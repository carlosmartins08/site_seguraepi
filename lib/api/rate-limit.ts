import { promises as fs } from 'fs';
import path from 'path';

type Bucket = {
  count: number;
  resetAtMs: number;
};

type RateLimitConfig = {
  key: string;
  limit: number;
  windowMs: number;
};

const memoryBuckets = new Map<string, Bucket>();
const DATA_DIR = path.join(process.cwd(), 'data');
const RATE_LIMIT_FILE = path.join(DATA_DIR, 'rate-limit.json');
const provider = process.env.RATE_LIMIT_PROVIDER === 'file' ? 'file' : 'memory';

function decide(config: RateLimitConfig, bucket: Bucket | undefined, now: number): {
  next: Bucket;
  allowed: boolean;
  remaining: number;
  resetAtMs: number;
} {
  if (!bucket || now >= bucket.resetAtMs) {
    const resetAtMs = now + config.windowMs;
    return {
      next: { count: 1, resetAtMs },
      allowed: true,
      remaining: Math.max(0, config.limit - 1),
      resetAtMs,
    };
  }

  if (bucket.count >= config.limit) {
    return {
      next: bucket,
      allowed: false,
      remaining: 0,
      resetAtMs: bucket.resetAtMs,
    };
  }

  const next = { ...bucket, count: bucket.count + 1 };
  return {
    next,
    allowed: true,
    remaining: Math.max(0, config.limit - next.count),
    resetAtMs: next.resetAtMs,
  };
}

function checkRateLimitMemory(config: RateLimitConfig) {
  const now = Date.now();
  const bucket = memoryBuckets.get(config.key);
  const decision = decide(config, bucket, now);
  memoryBuckets.set(config.key, decision.next);

  return {
    allowed: decision.allowed,
    remaining: decision.remaining,
    resetAtMs: decision.resetAtMs,
  };
}

async function readFileBuckets(): Promise<Record<string, Bucket>> {
  try {
    const raw = await fs.readFile(RATE_LIMIT_FILE, 'utf8');
    const parsed = JSON.parse(raw) as Record<string, Bucket>;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

async function writeFileBuckets(buckets: Record<string, Bucket>): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(RATE_LIMIT_FILE, JSON.stringify(buckets), 'utf8');
}

async function checkRateLimitFile(config: RateLimitConfig) {
  const now = Date.now();
  const allBuckets = await readFileBuckets();

  for (const [key, bucket] of Object.entries(allBuckets)) {
    if (now >= bucket.resetAtMs) {
      delete allBuckets[key];
    }
  }

  const decision = decide(config, allBuckets[config.key], now);
  allBuckets[config.key] = decision.next;
  await writeFileBuckets(allBuckets);

  return {
    allowed: decision.allowed,
    remaining: decision.remaining,
    resetAtMs: decision.resetAtMs,
  };
}

export async function checkRateLimit(config: RateLimitConfig): Promise<{
  allowed: boolean;
  remaining: number;
  resetAtMs: number;
}> {
  if (provider === 'file') {
    return checkRateLimitFile(config);
  }
  return checkRateLimitMemory(config);
}
