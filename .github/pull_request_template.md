## Objetivo
- Descreva em 1-3 linhas o problema e o impacto esperado.

## Escopo
- [ ] Sem mudanca de contrato externo
- [ ] Mudanca de contrato externo documentada

## Checklist Obrigatorio
- [ ] `npm run quality` passou localmente
- [ ] `npm run build` passou localmente
- [ ] `npm run test:api` passou localmente
- [ ] `npm run test:smoke` passou localmente
- [ ] Sem hardcode de rota interna (usar `ROUTES`/`buildUrl`)
- [ ] Sem quebra de tipografia semantica (`text-display*`, `text-title*`, `text-body*`, `text-label*`)
- [ ] Sem regressao de acessibilidade (focus, `aria-*`, `main#main-content`)
- [ ] Evidencias anexadas (logs, screenshot ou output resumido)

## Riscos e Rollback
- Risco principal:
- Plano de rollback:

## Validacao Manual
- [ ] Fluxo principal validado
- [ ] Fluxo de erro validado
- [ ] Responsivo validado (mobile + desktop)
