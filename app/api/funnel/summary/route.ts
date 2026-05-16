import { getFunnelSummary } from '../../../../lib/analytics/funnel-monitor';
import { getApiMetricsSummary, logApiEvent, recordApiMetric } from '../../../../lib/observability/api-monitor';
import { jsonError, withRequestId } from '../../../../lib/api/response';

const API_ROUTE = '/api/funnel/summary';

export async function GET(req: Request) {
  const startMs = Date.now();
  const requestId = withRequestId(req);
  let status = 200;
  let code = 'ok';

  try {
    const summary = await getFunnelSummary();
    const apiMetrics = getApiMetricsSummary();

    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-request-id': requestId,
    });

    return new Response(
      JSON.stringify({
        ok: true,
        requestId,
        summary,
        apiMetrics,
      }),
      { status, headers },
    );
  } catch {
    status = 500;
    code = 'internal_error';
    return jsonError(requestId, code, 'Erro interno ao gerar resumo de funil.', { status });
  } finally {
    const durationMs = Date.now() - startMs;
    recordApiMetric({ route: API_ROUTE, status, durationMs, requestId, code });
    logApiEvent({
      level: status >= 500 ? 'error' : 'info',
      event: 'funnel_summary_request',
      route: API_ROUTE,
      status,
      requestId,
      durationMs,
      code,
    });
  }
}
