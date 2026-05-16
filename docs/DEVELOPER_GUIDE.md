# Developer Guide

Guia pratico para desenvolver no projeto com consistencia tecnica e visual.

## 1) Setup rapido
1. `npm install`
2. `npm run quality`
3. `npm run build`
4. `npm run test:api`
5. `npm run test:smoke`
6. `npm run test:seo-mobile`

## 2) Sequencia de leitura obrigatoria (primeiro dia)
1. `docs/HANDOFF.md`
2. `docs/ARCHITECTURE.md`
3. `docs/DESIGN_IMPLEMENTATION_CONTRACT.md`
4. `CONTRIBUTING.md`

## 3) Fluxo padrao de implementacao
1. Entender impacto (rota, API, UI, tracking, operacao).
2. Implementar mudanca minima necessaria.
3. Atualizar testes relevantes.
4. Rodar bateria local obrigatoria.
5. Abrir PR com evidencias e rollback.

## 4) Regras tecnicas que nao podem ser quebradas
- Rotas internas: sempre `ROUTES` e `buildUrl()`.
- UI: sem token arbitrario e sem tipografia crua.
- API: erro padrao com `code`, `message`, `requestId`.
- Mudanca de fluxo critico: sempre com teste de caminho feliz e falha.
- Sem mudanca de comportamento em producao sem documentar impacto.

## 5) Onde alterar cada tipo de demanda
- Conteudo e paginas: `app/*` + componentes relacionados.
- Contrato/API: `app/api/*` + `lib/api/*`.
- Observabilidade: `lib/observability/*` + `docs/ALERTS_RUNBOOK.md`.
- SEO/metadata: `lib/seo/*` + metadata por rota em `app/*`.
- Design system/lint: `tools/lint-design.ts` + `design-system.md`.

## 6) Definition of Done (DoD) do PR
- `quality`, `build`, `test:api`, `test:smoke`, `test:seo-mobile` verdes.
- Template de PR preenchido integralmente.
- Mudancas em docs atualizadas no mesmo PR quando necessario.
- Risco principal + plano de rollback registrados.

