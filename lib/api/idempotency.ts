import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const IDEMPOTENCY_FILE = path.join(DATA_DIR, 'idempotency-keys.json');
const WINDOW_MS = 5 * 60 * 1000;
const cache = new Map<string, number>();
const provider = process.env.IDEMPOTENCY_PROVIDER === 'file' ? 'file' : 'memory';

function cleanupMemory(now: number): void {
  for (const [key, expiresAt] of cache.entries()) {
    if (now >= expiresAt) cache.delete(key);
  }
}

async function readFileEntries(): Promise<Record<string, number>> {
  try {
    const raw = await fs.readFile(IDEMPOTENCY_FILE, 'utf8');
    const parsed = JSON.parse(raw) as Record<string, number>;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

async function writeFileEntries(entries: Record<string, number>): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(IDEMPOTENCY_FILE, JSON.stringify(entries), 'utf8');
}

export async function reserveIdempotencyKey(rawKey: string): Promise<boolean> {
  const key = rawKey.trim();
  if (!key) return true;

  const now = Date.now();
  const expiresAt = now + WINDOW_MS;

  if (provider === 'file') {
    const entries = await readFileEntries();
    for (const [entryKey, entryExpiresAt] of Object.entries(entries)) {
      if (now >= entryExpiresAt) delete entries[entryKey];
    }

    if (entries[key] && entries[key] > now) {
      return false;
    }

    entries[key] = expiresAt;
    await writeFileEntries(entries);
    return true;
  }

  cleanupMemory(now);
  const existing = cache.get(key);
  if (existing && existing > now) {
    return false;
  }

  cache.set(key, expiresAt);
  return true;
}
