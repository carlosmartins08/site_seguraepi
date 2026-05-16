import { appendFunnelEvent } from '../../../../lib/analytics/funnel-monitor';
import { checkRateLimit } from '../../../../lib/api/rate-limit';
import { getClientIp, isPlainObject, safeJsonByteLength } from '../../../../lib/api/request';
import { jsonError, jsonOk, withRequestId } from '../../../../lib/api/response';
import { logApiEvent, recordApiMetric } from '../../../../lib/observability/api-monitor';

type EventPayload = {
  event?: unknown;
  timestamp?: unknown;
  path?: unknown;
  url?: unknown;
  params?: unknown;
  source?: unknown;
};

const MAX_EVENT_NAME_LENGTH = 80;
const MAX_PARAMS_BYTES = 8 * 1024;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 120;
const API_ROUTE = '/api/funnel/event';

function toSafeString(input: unknown): string | undefined {
  return typeof input === 'string' && input.trim() ? input.trim() : undefined;
}

function isValidEventName(input: string): boolean {
  return input.length <= MAX_EVENT_NAME_LENGTH && /^[a-z0-9_]+$/.test(input);
}

export async function POST(req: Request) {
  const startMs = Date.now();
  const requestId = withRequestId(req);
  const clientIp = getClientIp(req);
  let status = 200;
  let code = 'ok';

  try {
    const rate = await checkRateLimit({
      key: `${API_ROUTE}:${clientIp}`,
      limit: RATE_LIMIT_MAX_REQUESTS,
      windowMs: RATE_LIMIT_WINDOW_MS,
    });

    if (!rate.allowed) {
      status = 429;
      code = 'rate_limited';
      return jsonError(requestId, code, 'Limite de requisicoes excedido.', {
        status,
        headers: {
          'Retry-After': String(Math.max(1, Math.ceil((rate.resetAtMs - Date.now()) / 1000))),
        },
      });
    }

    const payload = (await req.json()) as EventPayload;
    if (!isPlainObject(payload)) {
      status = 400;
      code = 'invalid_payload';
      return jsonError(requestId, code, 'Payload invalido.', { status });
    }

    const event = toSafeString(payload.event);
    if (!event || !isValidEventName(event)) {
      status = 400;
      code = 'invalid_event_name';
      return jsonError(requestId, code, 'Nome do evento invalido.', { status });
    }

    const timestamp = toSafeString(payload.timestamp) ?? new Date().toISOString();
    const path = toSafeString(payload.path);
    const url = toSafeString(payload.url);
    const source = toSafeString(payload.source);
    const params =
      payload.params && typeof payload.params === 'object' && !Array.isArray(payload.params)
        ? (payload.params as Record<string, unknown>)
        : undefined;

    if (params && safeJsonByteLength(params) > MAX_PARAMS_BYTES) {
      status = 413;
      code = 'params_too_large';
      return jsonError(requestId, code, 'Parametros excedem o limite permitido.', { status });
    }

    await appendFunnelEvent({
      event,
      timestamp,
      path,
      url,
      source,
      params,
      requestId,
      status: 'accepted',
      durationMs: Date.now() - startMs,
      route: API_ROUTE,
    });

    status = 200;
    code = 'ok';
    return jsonOk(requestId);
  } catch (error) {
    status = 500;
    code = 'internal_error';
    return jsonError(requestId, code, 'Erro interno ao registrar evento de funil.', { status });
  } finally {
    const durationMs = Date.now() - startMs;
    recordApiMetric({ route: API_ROUTE, status, durationMs, requestId, code });
    logApiEvent({
      level: status >= 500 ? 'error' : status >= 400 ? 'warn' : 'info',
      event: 'funnel_event_request',
      route: API_ROUTE,
      status,
      requestId,
      durationMs,
      code,
      details: { clientIp },
    });
  }
}
