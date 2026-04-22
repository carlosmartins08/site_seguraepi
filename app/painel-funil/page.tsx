import type { Metadata } from 'next';
import { getFunnelSummary } from '../../lib/analytics/funnel-monitor';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Painel de Funil',
  robots: {
    index: false,
    follow: false,
  },
};

function formatPercent(value: number | null): string {
  if (value === null) return '-';
  return `${(value * 100).toFixed(1)}%`;
}

function severityClass(severity: 'low' | 'medium' | 'high'): string {
  if (severity === 'high') return 'text-status-danger';
  if (severity === 'medium') return 'text-action-primary';
  return 'text-tech-compliance';
}

export default async function FunnelPanelPage() {
  const summary = await getFunnelSummary();
  const last60m = summary.windows.last60m;
  const last24h = summary.windows.last24h;

  return (
    <main id="main-content" className="min-h-screen bg-bg-surface p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-2">
          <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-labelSM">
            Observabilidade de Conversão
          </p>
          <h1 className="text-titleXL md:text-displayXL font-display font-bold text-text-primary">
            Painel mínimo de funil
          </h1>
          <p className="text-text-body text-bodySM">
            Atualizado em {new Date(summary.generatedAt).toLocaleString('pt-BR')} | Eventos analisados: {summary.eventsTracked}
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          <article className="bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-elevation-1 space-y-4">
            <h2 className="text-titleMD font-display font-semibold text-text-primary">Últimos 60 minutos</h2>
            <ul className="space-y-2 text-bodySM text-text-body">
              <li>Lead attempt: {last60m.counts.lead_submit_attempt ?? 0}</li>
              <li>Lead success: {last60m.counts.lead_submit_success ?? 0}</li>
              <li>Lead fail: {last60m.counts.lead_submit_fail ?? 0}</li>
              <li>Chat attempt: {last60m.counts.chat_open_attempt ?? 0}</li>
              <li>Chat fallback: {last60m.counts.chat_open_fallback ?? 0}</li>
            </ul>
            <div className="pt-2 border-t border-border-subtle text-bodySM text-text-body space-y-1">
              <p>Taxa de sucesso do lead: {formatPercent(last60m.leadSuccessRate)}</p>
              <p>Taxa de falha do lead: {formatPercent(last60m.leadFailRate)}</p>
              <p>Taxa de fallback do chat: {formatPercent(last60m.chatFallbackRate)}</p>
            </div>
          </article>

          <article className="bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-elevation-1 space-y-4">
            <h2 className="text-titleMD font-display font-semibold text-text-primary">Últimas 24 horas</h2>
            <ul className="space-y-2 text-bodySM text-text-body">
              <li>Lead attempt: {last24h.counts.lead_submit_attempt ?? 0}</li>
              <li>Lead success: {last24h.counts.lead_submit_success ?? 0}</li>
              <li>Lead fail: {last24h.counts.lead_submit_fail ?? 0}</li>
              <li>Chat attempt: {last24h.counts.chat_open_attempt ?? 0}</li>
              <li>Chat fallback: {last24h.counts.chat_open_fallback ?? 0}</li>
            </ul>
            <div className="pt-2 border-t border-border-subtle text-bodySM text-text-body space-y-1">
              <p>Taxa de sucesso do lead: {formatPercent(last24h.leadSuccessRate)}</p>
              <p>Taxa de falha do lead: {formatPercent(last24h.leadFailRate)}</p>
              <p>Taxa de fallback do chat: {formatPercent(last24h.chatFallbackRate)}</p>
            </div>
          </article>
        </section>

        <section className="bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-elevation-1 space-y-3">
          <h2 className="text-titleMD font-display font-semibold text-text-primary">Alertas</h2>
          <ul className="space-y-2 text-bodySM">
            {summary.alerts.map((alert) => (
              <li key={alert.code} className={severityClass(alert.severity)}>
                [{alert.severity.toUpperCase()}] {alert.message}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
