import { promises as fs } from 'fs';
import path from 'path';

type LeadFallbackRecord = Record<string, unknown> & {
  requestId?: string;
};

type ReplayResult = {
  processed: number;
  sent: number;
  failed: number;
  skipped: number;
};

const DATA_DIR = path.join(process.cwd(), 'data');
const FALLBACK_FILE = path.join(DATA_DIR, 'lead-fallback.ndjson');
const DEAD_LETTER_FILE = path.join(DATA_DIR, 'lead-fallback.deadletter.ndjson');
const MAX_ATTEMPTS = Number(process.env.LEAD_REPLAY_MAX_ATTEMPTS ?? '3');
const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function readFallbackLines(): Promise<string[]> {
  try {
    const raw = await fs.readFile(FALLBACK_FILE, 'utf8');
    return raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function parseRecord(line: string): LeadFallbackRecord | null {
  try {
    const parsed = JSON.parse(line) as LeadFallbackRecord;
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}

async function postLead(record: LeadFallbackRecord): Promise<boolean> {
  if (!WEBHOOK_URL) return false;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-request-id':
            typeof record.requestId === 'string' && record.requestId.trim()
              ? record.requestId
              : crypto.randomUUID(),
        },
        body: JSON.stringify(record),
      });

      if (response.ok) return true;
      if (response.status >= 500 && attempt < MAX_ATTEMPTS) {
        await sleep(attempt * 250);
        continue;
      }
      return false;
    } catch {
      if (attempt < MAX_ATTEMPTS) {
        await sleep(attempt * 250);
        continue;
      }
      return false;
    }
  }

  return false;
}

async function appendDeadLetter(lines: string[]): Promise<void> {
  if (!lines.length) return;
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(DEAD_LETTER_FILE, `${lines.join('\n')}\n`, 'utf8');
}

async function rewriteFallbackFile(lines: string[]): Promise<void> {
  if (!lines.length) {
    await fs.rm(FALLBACK_FILE, { force: true });
    return;
  }
  await fs.writeFile(FALLBACK_FILE, `${lines.join('\n')}\n`, 'utf8');
}

async function main(): Promise<void> {
  if (!WEBHOOK_URL) {
    console.error('LEAD_WEBHOOK_URL nao configurado. Abortando replay.');
    process.exit(1);
  }

  const rawLines = await readFallbackLines();
  if (!rawLines.length) {
    console.info('Nenhum lead em fallback para reprocessar.');
    return;
  }

  const pendingLines: string[] = [];
  const deadletterLines: string[] = [];
  const result: ReplayResult = { processed: 0, sent: 0, failed: 0, skipped: 0 };

  for (const line of rawLines) {
    const parsed = parseRecord(line);
    if (!parsed) {
      result.skipped += 1;
      deadletterLines.push(line);
      continue;
    }

    result.processed += 1;
    const sent = await postLead(parsed);
    if (sent) {
      result.sent += 1;
      continue;
    }

    result.failed += 1;
    pendingLines.push(line);
  }

  await rewriteFallbackFile(pendingLines);
  await appendDeadLetter(deadletterLines);

  console.info(
    JSON.stringify({
      event: 'lead_fallback_replay_result',
      processed: result.processed,
      sent: result.sent,
      failed: result.failed,
      skipped: result.skipped,
      pending: pendingLines.length,
      deadletter: deadletterLines.length,
      timestamp: new Date().toISOString(),
    }),
  );
}

main().catch((error) => {
  console.error('Falha inesperada no replay de fallback.', error);
  process.exit(1);
});

