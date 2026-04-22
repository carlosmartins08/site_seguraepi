---
name: route-flow-guardian
description: Auditar coerencia de rotas e navegacao ponta a ponta em apps web. Usar quando houver mudancas em paginas, slugs, redirects, links internos, sitemap, canonical, noindex, not-found, fluxo de entrada/saida por rota ou suspeita de jornada quebrada mesmo sem erro 404.
---

# route-flow-guardian

## Objetivo

Garantir que o usuario consiga sair do ponto A para o ponto B sem ambiguidade, sem becos sem saida e sem conflito entre SEO, navegacao e regra de negocio.

## Entradas minimas

- Mapa de rotas canonicas e legadas.
- Lista de paginas criticas por negocio.
- Regras de indexacao (sitemap, robots, canonical, noindex).
- Principais CTAs e destinos esperados.

## Fluxo de trabalho

1. Levantar inventario de rotas.
2. Marcar rotas canonicas, legadas, utilitarias e de pos-conversao.
3. Validar coerencia entre:
   - `ROUTES` e links reais
   - redirects e paginas antigas
   - sitemap e noindex
   - not-found e atalhos de recuperacao
4. Identificar paginas orfas, links sem contexto e entradas duplicadas para o mesmo objetivo.
5. Priorizar falhas por impacto:
   - P0: bloqueia conversao/navegacao
   - P1: gera atrito e perda de clareza
   - P2: consistencia e manutencao
6. Gerar plano de acao com dono, prazo e criterio de aceite.

## Checklist minimo

- Toda rota critica tem ao menos 1 caminho de entrada claro.
- Toda rota critica tem ao menos 1 saida clara.
- Rotas legadas redirecionam para destino unico.
- Rotas `noindex` nao entram em sitemap.
- Paginas longas tem CTA contextual em mais de um ponto.
- Rota 404 oferece recuperacao por intencao.

## Entregaveis

- Diagnostico por rota (problema, impacto, evidencia).
- Matriz de prioridade (P0/P1/P2).
- Plano de implementacao por sprint curta (48h, 7 dias, 30 dias).

## Guardrails

- Nao propor solucao sem evidenciar rota e ponto de quebra.
- Nao misturar opiniao visual com problema de fluxo.
- Nao alterar slug/canonical sem plano de migracao.
