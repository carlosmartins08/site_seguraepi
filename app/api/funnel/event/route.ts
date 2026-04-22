import { NextResponse } from 'next/server';
import { appendFunnelEvent } from '../../../../lib/analytics/funnel-monitor';

type EventPayload = {
  event?: unknown;
  timestamp?: unknown;
  path?: unknown;
  url?: unknown;
  params?: unknown;
  source?: unknown;
};

const MAX_EVENT_NAME_LENGTH = 80;

function toSafeString(input: unknown): string | undefined {
  return typeof input === 'string' && input.trim() ? input.trim() : undefined;
}

function isValidEventName(input: string): boolean {
  return input.length <= MAX_EVENT_NAME_LENGTH && /^[a-z0-9_]+$/.test(input);
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as EventPayload;
    const event = toSafeString(payload.event);
    if (!event || !isValidEventName(event)) {
      return NextResponse.json({ ok: false, error: 'invalid_event_name' }, { status: 400 });
    }

    const timestamp = toSafeString(payload.timestamp) ?? new Date().toISOString();
    const path = toSafeString(payload.path);
    const url = toSafeString(payload.url);
    const source = toSafeString(payload.source);
    const params =
      payload.params && typeof payload.params === 'object' && !Array.isArray(payload.params)
        ? (payload.params as Record<string, unknown>)
        : undefined;

    await appendFunnelEvent({
      event,
      timestamp,
      path,
      url,
      source,
      params,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown_error';
    console.error(
      '[funnel_event_error]',
      JSON.stringify({
        route: '/api/funnel/event',
        error: message,
        timestamp: new Date().toISOString(),
      }),
    );
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
