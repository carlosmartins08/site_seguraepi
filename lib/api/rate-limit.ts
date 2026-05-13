type Bucket = {
  count: number;
  resetAtMs: number;
};

type RateLimitConfig = {
  key: string;
  limit: number;
  windowMs: number;
};

const buckets = new Map<string, Bucket>();

export function checkRateLimit(config: RateLimitConfig): {
  allowed: boolean;
  remaining: number;
  resetAtMs: number;
} {
  const now = Date.now();
  const bucket = buckets.get(config.key);

  if (!bucket || now >= bucket.resetAtMs) {
    const resetAtMs = now + config.windowMs;
    buckets.set(config.key, { count: 1, resetAtMs });
    return {
      allowed: true,
      remaining: Math.max(0, config.limit - 1),
      resetAtMs,
    };
  }

  if (bucket.count >= config.limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAtMs: bucket.resetAtMs,
    };
  }

  bucket.count += 1;
  return {
    allowed: true,
    remaining: Math.max(0, config.limit - bucket.count),
    resetAtMs: bucket.resetAtMs,
  };
}
