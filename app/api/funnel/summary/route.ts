import { NextResponse } from 'next/server';
import { getFunnelSummary } from '../../../../lib/analytics/funnel-monitor';

export async function GET() {
  try {
    const summary = await getFunnelSummary();
    return NextResponse.json(summary);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown_error';
    console.error(
      '[funnel_summary_error]',
      JSON.stringify({
        route: '/api/funnel/summary',
        error: message,
        timestamp: new Date().toISOString(),
      }),
    );
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
