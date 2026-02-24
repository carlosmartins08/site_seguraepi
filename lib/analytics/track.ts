type TrackPayload = Record<string, any>;

export function track(event: string, params?: TrackPayload) {
  if (typeof window === 'undefined') return;

  const payload = params ?? {};

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
