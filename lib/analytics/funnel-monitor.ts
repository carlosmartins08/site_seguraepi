import { promises as fs } from 'fs';
import path from 'path';

export type FunnelEventRecord = {
  event: string;
  timestamp: string;
  path?: string;
  url?: string;
  params?: Record<string, unknown>;
  source?: string;
};

type WindowSummary = {
  window: '60m' | '24h';
  totalEvents: number;
  counts: Record<string, number>;
  leadSuccessRate: number | null;
  leadFailRate: number | null;
  chatFallbackRate: number | null;
};

type FunnelAlert = {
  severity: 'low' | 'medium' | 'high';
  code: string;
  message: string;
};

type FunnelSummary = {
  generatedAt: string;
  eventsTracked: number;
  windows: {
    last60m: WindowSummary;
    last24h: WindowSummary;
  };
  alerts: FunnelAlert[];
};

const DATA_DIR = path.join(process.cwd(), 'data');
const FUNNEL_FILE = path.join(DATA_DIR, 'funnel-events.ndjson');
const WEBHOOK_URL = process.env.FUNNEL_EVENTS_WEBHOOK_URL;

const WINDOW_60M_MS = 60 * 60 * 1000;
const WINDOW_24H_MS = 24 * 60 * 60 * 1000;
const MAX_EVENTS_FOR_SUMMARY = 15000;
const MIN_ATTEMPTS_FOR_RATE = 10;

const TRACKED_EVENTS = [
  'route_view',
  'lead_submit_attempt',
  'lead_submit_success',
  'lead_submit_fail',
  'chat_open_attempt',
  'chat_open_success',
  'chat_open_fallback',
  'chat_open_fail',
] as const;

function isFiniteTimestamp(input: string): boolean {
  const value = new Date(input).getTime();
  return Number.isFinite(value);
}

function calculateRate(numerator: number, denominator: number): number | null {
  if (denominator < MIN_ATTEMPTS_FOR_RATE) return null;
  if (denominator === 0) return null;
  return Number((numerator / denominator).toFixed(4));
}

async function appendLocal(record: FunnelEventRecord): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(FUNNEL_FILE, `${JSON.stringify(record)}\n`, 'utf8');
}

async function forwardWebhook(record: FunnelEventRecord): Promise<void> {
  if (!WEBHOOK_URL) return;

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error(`Webhook rejected event with status ${response.status}`);
  }
}

export async function appendFunnelEvent(record: FunnelEventRecord): Promise<void> {
  if (WEBHOOK_URL) {
    await forwardWebhook(record);
    return;
  }
  await appendLocal(record);
}

function parseEventLine(raw: string): FunnelEventRecord | null {
  if (!raw.trim()) return null;
  try {
    const parsed = JSON.parse(raw) as FunnelEventRecord;
    if (!parsed || typeof parsed.event !== 'string' || typeof parsed.timestamp !== 'string') return null;
    if (!isFiniteTimestamp(parsed.timestamp)) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function readLocalEvents(limit = MAX_EVENTS_FOR_SUMMARY): Promise<FunnelEventRecord[]> {
  try {
    const raw = await fs.readFile(FUNNEL_FILE, 'utf8');
    const lines = raw.split(/\r?\n/);
    const tail = lines.slice(-limit);
    const events: FunnelEventRecord[] = [];
    for (const line of tail) {
      const parsed = parseEventLine(line);
      if (parsed) events.push(parsed);
    }
    return events;
  } catch {
    return [];
  }
}

function summarizeWindow(events: FunnelEventRecord[], startMs: number, nowMs: number, window: '60m' | '24h'): WindowSummary {
  const counts = Object.fromEntries(TRACKED_EVENTS.map((name) => [name, 0])) as Record<string, number>;

  let totalEvents = 0;
  for (const event of events) {
    const eventMs = new Date(event.timestamp).getTime();
    if (eventMs < startMs || eventMs > nowMs) continue;
    totalEvents += 1;
    if (event.event in counts) {
      counts[event.event] += 1;
    }
  }

  const leadAttempt = counts.lead_submit_attempt ?? 0;
  const leadSuccess = counts.lead_submit_success ?? 0;
  const leadFail = counts.lead_submit_fail ?? 0;
  const chatAttempt = counts.chat_open_attempt ?? 0;
  const chatFallback = counts.chat_open_fallback ?? 0;

  return {
    window,
    totalEvents,
    counts,
    leadSuccessRate: calculateRate(leadSuccess, leadAttempt),
    leadFailRate: calculateRate(leadFail, leadAttempt),
    chatFallbackRate: calculateRate(chatFallback, chatAttempt),
  };
}

function buildAlerts(summary60m: WindowSummary, summary24h: WindowSummary): FunnelAlert[] {
  const alerts: FunnelAlert[] = [];

  const failRate60m = summary60m.leadFailRate;
  if (failRate60m !== null && failRate60m >= 0.25) {
    alerts.push({
      severity: 'high',
      code: 'lead_fail_spike_60m',
      message: 'Falha de envio de lead acima de 25% nos últimos 60 minutos.',
    });
  }

  const fallbackRate60m = summary60m.chatFallbackRate;
  if (fallbackRate60m !== null && fallbackRate60m >= 0.35) {
    alerts.push({
      severity: 'high',
      code: 'chat_fallback_spike_60m',
      message: 'Fallback de chat acima de 35% nos últimos 60 minutos.',
    });
  }

  const attempt24h = summary24h.counts.lead_submit_attempt ?? 0;
  const success24h = summary24h.counts.lead_submit_success ?? 0;
  if (attempt24h >= MIN_ATTEMPTS_FOR_RATE && success24h === 0) {
    alerts.push({
      severity: 'medium',
      code: 'lead_success_zero_24h',
      message: 'Houve tentativas de lead nas últimas 24h sem nenhum sucesso registrado.',
    });
  }

  if (alerts.length === 0) {
    alerts.push({
      severity: 'low',
      code: 'funnel_stable',
      message: 'Sem alerta crítico no recorte atual.',
    });
  }

  return alerts;
}

export async function getFunnelSummary(): Promise<FunnelSummary> {
  const events = await readLocalEvents();
  const nowMs = Date.now();
  const summary60m = summarizeWindow(events, nowMs - WINDOW_60M_MS, nowMs, '60m');
  const summary24h = summarizeWindow(events, nowMs - WINDOW_24H_MS, nowMs, '24h');

  return {
    generatedAt: new Date(nowMs).toISOString(),
    eventsTracked: events.length,
    windows: {
      last60m: summary60m,
      last24h: summary24h,
    },
    alerts: buildAlerts(summary60m, summary24h),
  };
}
