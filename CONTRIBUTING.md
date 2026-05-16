# Contributing Guide

Este guia define como evoluir o projeto sem quebrar arquitetura, Design System ou operacao.

## Fluxo de trabalho
1. Crie branch a partir da `main` (`feat/...`, `fix/...`, `chore/...`).
2. Faça mudancas pequenas e com escopo claro.
3. Rode validacoes locais antes do PR:
   - `npm run quality`
   - `npm run build`
   - `npm run test:api`
   - `npm run test:smoke`
4. Abra PR preenchendo completamente o template.
5. Nao mergeie sem CI verde e sem plano de rollback.

## Padrao de commit
Use Conventional Commits:
- `feat:` nova funcionalidade
- `fix:` correcao de bug
- `refactor:` mudanca interna sem alterar comportamento
- `test:` mudanca de testes
- `docs:` mudanca de documentacao
- `chore:` tarefa tecnica/operacional

Exemplos:
- `feat: adiciona contrato de erro padrao para api lead`
- `fix: corrige fallback de replay sem webhook configurado`

## Regras de codigo
- Nao use hardcode de rota interna: use `ROUTES`/`buildUrl()`.
- Nao use token visual arbitrario: siga `docs/DESIGN_IMPLEMENTATION_CONTRACT.md`.
- Nao introduza novo token ou variante sem justificativa documentada no PR.
- Todo endpoint deve manter contrato estavel e rastreavel (`requestId`, `code`, `message` em erro).

## Regras de arquitetura (boundaries)
- `app/`: rotas e handlers HTTP.
- `components/`: UI e composicoes de interface.
- `lib/`: regras compartilhadas, contratos, observabilidade e integracoes.
- `hooks/`: hooks client-side.
- `docs/`: governanca e operacao.

Evite mover regra de negocio para componente de UI quando ela pode viver em `lib/`.

## Mudancas de alto risco
Mudancas em API, lead, funnel, auth, deploy ou observabilidade exigem:
1. teste automatizado cobrindo caminho feliz e falha;
2. risco principal + rollback no PR;
3. evidencias de execucao (output resumido dos comandos).

