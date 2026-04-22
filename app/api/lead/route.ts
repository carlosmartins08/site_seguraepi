import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type LeadRecord = Record<string, unknown>;

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
const API_ROUTE = '/api/lead';

function getSource(payload: LeadRecord): string {
  return typeof payload.source === 'string' ? payload.source : 'unknown';
}

async function readLeads(): Promise<LeadRecord[]> {
  try {
    const raw = await fs.readFile(LEADS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  let source = 'unknown';

  try {
    const payload = (await req.json()) as LeadRecord;
    source = getSource(payload);
    const record = {
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
      ...payload,
    };

    if (LEAD_WEBHOOK_URL) {
      const response = await fetch(LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });

      if (!response.ok) {
        console.error(
          '[lead_api_webhook_error]',
          JSON.stringify({
            route: API_ROUTE,
            source,
            status: response.status,
            timestamp: new Date().toISOString(),
          }),
        );
        return NextResponse.json({ ok: false }, { status: 502 });
      }

      return NextResponse.json({ ok: true });
    }

    if (process.env.NODE_ENV === 'production') {
      console.warn(
        '[lead_api_no_webhook]',
        JSON.stringify({
          route: API_ROUTE,
          source,
          timestamp: new Date().toISOString(),
        }),
      );
      return NextResponse.json({ ok: true });
    }

    await fs.mkdir(DATA_DIR, { recursive: true });
    const current = await readLeads();
    current.push(record);
    await fs.writeFile(LEADS_FILE, JSON.stringify(current, null, 2));

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown_error';
    console.error(
      '[lead_api_error]',
      JSON.stringify({
        route: API_ROUTE,
        source,
        error: message,
        timestamp: new Date().toISOString(),
      }),
    );
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
