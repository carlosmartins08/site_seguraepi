type ApiMetricEvent = {
  route: string;
  status: number;
  durationMs: number;
  requestId: string;
  code?: string;
};

type RouteMetricBucket = {
  total: number;
  errors: number;
  durations: number[];
};

const buckets = new Map<string, RouteMetricBucket>();
const MAX_DURATIONS = 400;

function getBucket(route: string): RouteMetricBucket {
  const existing = buckets.get(route);
  if (existing) return existing;
  const created: RouteMetricBucket = { total: 0, errors: 0, durations: [] };
  buckets.set(route, created);
  return created;
}

export function logApiEvent(event: {
  level: 'info' | 'warn' | 'error';
  event: string;
  route: string;
  status: number;
  requestId: string;
  durationMs: number;
  code?: string;
  error?: string;
  details?: Record<string, unknown>;
}): void {
  const payload = {
    ts: new Date().toISOString(),
    event: event.event,
    route: event.route,
    status: event.status,
    requestId: event.requestId,
    durationMs: event.durationMs,
    code: event.code,
    error: event.error,
    ...event.details,
  };

  if (event.level === 'error') {
    console.error('[api_event]', JSON.stringify(payload));
    return;
  }
  if (event.level === 'warn') {
    console.warn('[api_event]', JSON.stringify(payload));
    return;
  }
  console.info('[api_event]', JSON.stringify(payload));
}

export function recordApiMetric(metric: ApiMetricEvent): void {
  const bucket = getBucket(metric.route);
  bucket.total += 1;
  if (metric.status >= 500) {
    bucket.errors += 1;
  }

  bucket.durations.push(metric.durationMs);
  if (bucket.durations.length > MAX_DURATIONS) {
    bucket.durations.shift();
  }
}

function percentile(values: number[], p: number): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.ceil((p / 100) * sorted.length) - 1);
  return sorted[Math.max(0, index)] ?? 0;
}

export function getApiMetricsSummary() {
  const byRoute = Array.from(buckets.entries()).map(([route, bucket]) => {
    const errorRate = bucket.total ? Number((bucket.errors / bucket.total).toFixed(4)) : 0;
    return {
      route,
      total: bucket.total,
      errors: bucket.errors,
      errorRate,
      p95LatencyMs: Math.round(percentile(bucket.durations, 95)),
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    byRoute,
  };
}
