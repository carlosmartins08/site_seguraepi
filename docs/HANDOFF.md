# Handoff Tecnico (Passagem de Bastao)

Este documento resume o estado atual para qualquer desenvolvedor continuar com contexto completo.

## 1) O que foi implementado recentemente
- Contrato de erro padrao nas APIs com `requestId` + header `x-request-id`.
- Observabilidade minima por endpoint (`status`, `durationMs`, `code`, `requestId`).
- Rate limit com provider configuravel (`memory` ou `file`).
- Idempotencia de envio de lead com `x-idempotency-key`.
- Retry/backoff no webhook de lead.
- Fallback operacional de leads em arquivo (`data/lead-fallback.ndjson`).
- Script de replay: `npm run ops:replay-leads`.
- Runbook de alertas: `docs/ALERTS_RUNBOOK.md`.
- Gate de Design System reforcado via `tools/lint-design.ts`.
- Contrato de implementacao UI: `docs/DESIGN_IMPLEMENTATION_CONTRACT.md`.

## 2) Como validar rapidamente o projeto
1. `npm install`
2. `npm run quality`
3. `npm run build`
4. `npm run test:api`
5. `npm run test:smoke`
6. `npm run test:seo-mobile`

Se tudo passar, a base esta consistente para evolucao.

## 3) Pontos de atencao operacionais
- Sem `LEAD_WEBHOOK_URL`, o sistema nao perde lead: enfileira em fallback e responde `202`.
- Replay automatico foi preparado via tarefa agendada Windows e script:
  - `tools/replay-leads-scheduled.ps1`
  - log: `reports/lead-replay.log`
- Para producao real, configurar `LEAD_WEBHOOK_URL` (arquivo `.env.local` ou env do sistema).

## 4) Onde mexer para cada tipo de mudanca
- API de lead: `app/api/lead/route.ts`
- API de funil: `app/api/funnel/event/route.ts`, `app/api/funnel/summary/route.ts`
- Observabilidade API: `lib/observability/api-monitor.ts`
- Contrato de resposta HTTP: `lib/api/response.ts`
- Design lint: `tools/lint-design.ts`
- Testes de contrato: `tests/api-contract.spec.ts`
- Testes de smoke: `tests/smoke.spec.ts`
- Testes SEO/mobile: `tests/seo-mobile.spec.ts`

## 5) Sequencia recomendada para evoluir sem retrabalho
1. Leia `docs/MASTER_DOCUMENTATION.md`.
2. Leia `docs/DEVELOPER_GUIDE.md`.
3. Leia `docs/ARCHITECTURE.md` e `docs/DESIGN_IMPLEMENTATION_CONTRACT.md`.
4. Leia `docs/OPERATIONS_MANUAL.md` e `docs/RELEASE_CHECKLIST.md`.
5. Faca mudanca pequena com teste.
6. Abra PR com template completo.
