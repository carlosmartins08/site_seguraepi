# Runbook de Alertas (API e Conversao)

Use este runbook para detectar incidente cedo e agir sem perder lead.

## Sinais e limiares
- `5xx` em `/api/lead` acima de `2%` por 5 minutos: severidade alta.
- `5xx` em `/api/funnel/event` acima de `5%` por 10 minutos: severidade media.
- `p95LatencyMs` em `/api/lead` acima de `1200ms` por 10 minutos: severidade media.
- `queued_for_retry` acima de `5` eventos em 15 minutos: severidade alta (webhook oscilando).
- `invalid_payload` em `/api/lead` acima de `10%` por 30 minutos: severidade media (cliente quebrado ou abuso).
- `lead_fail_spike_60m` no summary de funil: severidade alta.

## Primeiros 10 minutos
1. Confirmar se houve deploy ou mudanca de configuracao.
2. Consultar logs `api_event` filtrando por `route`, `status`, `code`, `requestId`.
3. Verificar volume em `data/lead-fallback.ndjson`.
4. Se `LEAD_WEBHOOK_URL` falhar, abrir incidente com dono da integracao externa.
5. Se houver erro de payload, validar ultimo release do frontend e eventos de tracking.

## Acao imediata por tipo
- `webhook_rejected` / `queued_for_retry`:
  - validar status do endpoint externo;
  - manter captura local ativa;
  - executar replay apos estabilizacao.
- `rate_limited` em pico legitimo:
  - revisar limite e burst;
  - migrar para provider persistente/distribuido se necessario.
- `invalid_payload`:
  - identificar origem (`source`, `clientIp`);
  - bloquear origem abusiva e corrigir cliente se for bug.
- `internal_error`:
  - usar `requestId` para rastrear stack;
  - aplicar rollback se erro persistir > 10 minutos.

## Reprocessamento de leads em fallback
Com `LEAD_WEBHOOK_URL` estavel:

```bash
npx tsx tools/replay-lead-fallback.ts
```

Resultado esperado:
- leads enviados saem de `data/lead-fallback.ndjson`;
- linhas invalidas vao para `data/lead-fallback.deadletter.ndjson`;
- log final com `processed/sent/failed/skipped/pending`.

## Criterio de encerramento do incidente
1. `5xx` abaixo dos limiares por 30 minutos.
2. `lead-fallback.ndjson` sem crescimento anormal.
3. replay concluido sem pendencias criticas.
4. RCA registrado com causa, impacto e prevencao.

