import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type LeadRecord = Record<string, unknown>;

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;

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
  try {
    const payload = (await req.json()) as LeadRecord;
    const record = {
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
      ...payload,
    };

    if (LEAD_WEBHOOK_URL) {
      await fetch(LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });
      return NextResponse.json({ ok: true });
    }

    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json({ ok: true });
    }

    await fs.mkdir(DATA_DIR, { recursive: true });
    const current = await readLeads();
    current.push(record);
    await fs.writeFile(LEADS_FILE, JSON.stringify(current, null, 2));

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
