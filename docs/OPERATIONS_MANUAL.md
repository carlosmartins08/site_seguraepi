# Operations Manual

Manual operacional para release, monitoramento e resposta a incidente.

## 1) Pre-release (obrigatorio)
Use `docs/RELEASE_CHECKLIST.md` como gate.

Minimo obrigatorio:
1. `npm run quality`
2. `npm run build`
3. `npm run test:api`
4. `npm run test:smoke`
5. `npm run test:seo-mobile`

## 2) Pos-release (15-30 min)
- Confirmar navegacao nas rotas criticas.
- Confirmar eventos de funil em `/api/funnel/event` e summary.
- Confirmar ausencia de pico de erro em logs `api_event`.
- Confirmar estabilidade de leads (`queued_for_retry` sob controle).

## 3) Runbook de incidente
Fonte primaria: `docs/ALERTS_RUNBOOK.md`.

Fluxo minimo:
1. Detectar (alerta/erro/queixa).
2. Classificar severidade.
3. Conter impacto (rollback, bloqueio de fluxo, fallback).
4. Corrigir causa.
5. Validar retorno a normalidade.
6. Registrar RCA e prevencao.

## 4) Leads e fallback operacional
- Captura de lead nao deve ser perdida.
- Sem webhook disponivel, leads entram em `data/lead-fallback.ndjson`.
- Replay manual:
  - `npm run ops:replay-leads`
- Replay automatizado (Windows):
  - `tools/replay-leads-scheduled.ps1`
  - log em `reports/lead-replay.log`

## 5) Sinais de risco operacional
- Aumento de `5xx` em `/api/lead` e `/api/funnel/event`.
- Crescimento continuo de `lead-fallback.ndjson`.
- Queda abrupta de `lead_submit_success` no summary.
- Pico de `invalid_payload` (possivel bug cliente ou abuso).

## 6) Escalonamento e comunicacao
- Incidente severidade alta: comunicar imediatamente engenharia + produto.
- Toda mitigacao deve ter horario, dono e status claro.
- Ao encerrar: documentar causa, impacto e acao preventiva.

