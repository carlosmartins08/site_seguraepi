import { defaultPreferences, readStoredConsent } from '../consent';
type TrackPayload = Record<string, any>;

const FUNNEL_EVENT_ENDPOINT = '/api/funnel/event';
const FUNNEL_ROUTE_WHITELIST = new Set(['/', '/chat', '/obrigado', '/catalogo']);
const MONITORED_EVENTS = new Set([
  'route_view',
  'lead_submit_attempt',
  'lead_submit_success',
  'lead_submit_fail',
  'chat_open_attempt',
  'chat_open_success',
  'chat_open_fallback',
  'chat_open_fail',
]);

function getAnalyticsPipeline(): 'gtm' | 'ga' | null {
  if (typeof window === 'undefined') return null;
  const value = (window as any).__SEGURA_ANALYTICS_PIPELINE;
  return value === 'gtm' || value === 'ga' ? value : null;
}

function canSendAnalytics(): boolean {
  const consent = readStoredConsent();
  const stored = consent?.preferences?.analytics;
  return typeof stored === 'boolean' ? stored : defaultPreferences.analytics;
}

function shouldForwardToFunnel(event: string, payload: TrackPayload): boolean {
  if (!MONITORED_EVENTS.has(event)) return false;
  if (event !== 'route_view') return true;
  return typeof payload.path === 'string' && FUNNEL_ROUTE_WHITELIST.has(payload.path);
}

function forwardFunnelEvent(event: string, payload: TrackPayload) {
  if (!shouldForwardToFunnel(event, payload)) return;
  if (typeof window === 'undefined') return;

  const body = JSON.stringify({
    event,
    timestamp: new Date().toISOString(),
    path: typeof payload.path === 'string' ? payload.path : window.location.pathname,
    url: typeof payload.url === 'string' ? payload.url : `${window.location.pathname}${window.location.search}`,
    params: payload,
    source: 'client-track',
  });

  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' });
      const sent = navigator.sendBeacon(FUNNEL_EVENT_ENDPOINT, blob);
      if (sent) return;
    }

    fetch(FUNNEL_EVENT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => null);
  } catch {
    // Best effort telemetry.
  }
}

export function track(event: string, params?: TrackPayload) {
  if (typeof window === 'undefined') return;

  const payload = params ?? {};
  if (!canSendAnalytics()) {
    if (process.env.NODE_ENV !== 'production') {
      console.debug('[track:blocked-consent]', event, payload);
    }
    return;
  }

  forwardFunnelEvent(event, payload);

  const pipeline = getAnalyticsPipeline();
  if (pipeline === 'ga' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event, payload);
    return;
  }

  if (Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push({ event, ...payload });
    return;
  }

  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event, payload);
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    console.debug('[track]', event, payload);
  }
}
