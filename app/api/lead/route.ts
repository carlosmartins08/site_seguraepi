import { promises as fs } from 'fs';
import path from 'path';
import { checkRateLimit } from '../../../lib/api/rate-limit';
import { getClientIp, isPlainObject, safeJsonByteLength } from '../../../lib/api/request';
import { jsonError, jsonOk, withRequestId } from '../../../lib/api/response';
import { logApiEvent, recordApiMetric } from '../../../lib/observability/api-monitor';
import { reserveIdempotencyKey } from '../../../lib/api/idempotency';

type LeadRecord = Record<string, unknown>;

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const LEADS_FALLBACK_FILE = path.join(DATA_DIR, 'lead-fallback.ndjson');
const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
const API_ROUTE = '/api/lead';
const MAX_PAYLOAD_BYTES = 12 * 1024;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const MAX_WEBHOOK_ATTEMPTS = 3;

function getSource(payload: LeadRecord): string {
  return typeof payload.source === 'string' ? payload.source : 'unknown';
}

async function readLeads(): Promise<LeadRecord[]> {
  try {
    const raw = await fs.readFile(LEADS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function appendFallbackLead(record: LeadRecord): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(LEADS_FALLBACK_FILE, `${JSON.stringify(record)}\n`, 'utf8');
}

async function wait(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function postToWebhook(record: LeadRecord): Promise<{ ok: true } | { ok: false; status?: number; reason: string }> {
  if (!LEAD_WEBHOOK_URL) {
    return { ok: false, reason: 'webhook_not_configured' };
  }

  for (let attempt = 1; attempt <= MAX_WEBHOOK_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });

      if (response.ok) {
        return { ok: true };
      }

      if (response.status >= 500 && attempt < MAX_WEBHOOK_ATTEMPTS) {
        await wait(attempt * 200);
        continue;
      }

      return { ok: false, status: response.status, reason: 'webhook_rejected' };
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'unknown_fetch_error';
      if (attempt < MAX_WEBHOOK_ATTEMPTS) {
        await wait(attempt * 200);
        continue;
      }
      return { ok: false, reason };
    }
  }

  return { ok: false, reason: 'webhook_failed_after_retry' };
}

export async function POST(req: Request) {
  const startMs = Date.now();
  const requestId = withRequestId(req);
  const clientIp = getClientIp(req);
  let source = 'unknown';
  let status = 200;
  let code = 'ok';

  try {
    const rateKey = `${API_ROUTE}:${clientIp}`;
    const rate = await checkRateLimit({
      key: rateKey,
      limit: RATE_LIMIT_MAX_REQUESTS,
      windowMs: RATE_LIMIT_WINDOW_MS,
    });

    if (!rate.allowed) {
      status = 429;
      code = 'rate_limited';
      return jsonError(requestId, 'rate_limited', 'Limite de requisicoes excedido.', {
        status,
        headers: {
          'Retry-After': String(Math.max(1, Math.ceil((rate.resetAtMs - Date.now()) / 1000))),
        },
      });
    }

    const body = (await req.json()) as unknown;
    if (!isPlainObject(body)) {
      status = 400;
      code = 'invalid_payload';
      return jsonError(requestId, code, 'Payload invalido.', { status });
    }

    if (safeJsonByteLength(body) > MAX_PAYLOAD_BYTES) {
      status = 413;
      code = 'payload_too_large';
      return jsonError(requestId, code, 'Payload excede o limite permitido.', { status });
    }

    const payload = body as LeadRecord;
    source = getSource(payload);

    const idempotencyKey = req.headers.get('x-idempotency-key') ?? '';
    const reserved = await reserveIdempotencyKey(`${API_ROUTE}:${clientIp}:${idempotencyKey}`);
    if (!reserved) {
      status = 409;
      code = 'duplicate_submission';
      return jsonError(requestId, code, 'Envio duplicado detectado.', { status });
    }

    const record = {
      id: crypto.randomUUID(),
      requestId,
      receivedAt: new Date().toISOString(),
      ...payload,
    };

    if (LEAD_WEBHOOK_URL) {
      const webhook = await postToWebhook(record);
      if (!webhook.ok) {
        await appendFallbackLead({
          ...record,
          fallbackReason: webhook.reason,
          fallbackStatus: webhook.status,
        });

        status = 202;
        code = 'queued_for_retry';
        return jsonOk(requestId, { queued: true, fallback: true }, { status });
      }

      status = 200;
      code = 'ok';
      return jsonOk(requestId);
    }

    if (process.env.NODE_ENV === 'production') {
      await appendFallbackLead({
        ...record,
        fallbackReason: 'webhook_not_configured',
      });
      status = 202;
      code = 'queued_for_retry_no_webhook';
      return jsonOk(requestId, { queued: true, fallback: true, reason: 'webhook_not_configured' }, { status });
    }

    await fs.mkdir(DATA_DIR, { recursive: true });
    const current = await readLeads();
    current.push(record);
    await fs.writeFile(LEADS_FILE, JSON.stringify(current, null, 2));

    status = 200;
    code = 'ok';
    return jsonOk(requestId);
  } catch (error) {
    status = 500;
    code = 'internal_error';
    const message = error instanceof Error ? error.message : 'unknown_error';
    return jsonError(requestId, code, 'Erro interno ao processar lead.', { status });
  } finally {
    const durationMs = Date.now() - startMs;
    recordApiMetric({ route: API_ROUTE, status, durationMs, requestId, code });
    logApiEvent({
      level: status >= 500 ? 'error' : status >= 400 ? 'warn' : 'info',
      event: 'lead_request',
      route: API_ROUTE,
      status,
      requestId,
      durationMs,
      code,
      details: { clientIp, source },
    });
  }
}
