# Plano de Correcao e Elevacao de Fluxo

## Comentario direto

O projeto esta estavel para build, mas ainda decide no escuro em partes criticas do funil. O risco nao e rota quebrada, e perda silenciosa de conversao por atrito nao medido.

## Objetivo do plano

- Corrigir incoerencias de rota e indexacao.
- Dar visibilidade operacional para funil e falhas.
- Elevar conversao com caminhos por intencao, nao por pagina isolada.

## Horizonte 48h (P0)

1. Corrigir incoerencias de indexacao e mapa de rotas
- Acao: alinhar `/catalogo` com sitemap/noindex (escolher uma estrategia unica).
- Dono sugerido: SEO/Front.
- Criterio de aceite: sitemap e metadata sem conflito.

2. Endurecer rotas legadas
- Acao: trocar redirects legados para permanente.
- Dono sugerido: Front.
- Criterio de aceite: `/retira` e `/retira-em-loja` apontam de forma definitiva para `/retirada-expressa`.

3. Tratar qualidade de conteudo de categorias
- Acao: revisar e limpar texto corrompido em `lib/catalog/categories.ts`.
- Dono sugerido: Conteudo + Front.
- Criterio de aceite: sem caracteres invalidos, revisao humana concluida.

## Horizonte 7 dias (P1)

1. Implementar contrato de eventos do funil
- Eventos minimos:
  - `route_view`
  - `cta_click`
  - `lead_submit_attempt`
  - `lead_submit_success`
  - `lead_submit_fail`
  - `chat_open_attempt`
  - `chat_open_success`
  - `chat_open_fallback`
- Dono sugerido: Front + Analytics.
- Criterio de aceite: eventos em ambiente de homologacao e painel basico de leitura.

2. Instrumentar falha operacional de lead
- Acao: log estruturado no endpoint de lead com `source`, `route`, `error_code`, `timestamp`.
- Dono sugerido: Back/Fullstack.
- Criterio de aceite: falha de webhook observavel e rastreavel.

3. Definir alertas minimos
- Acao: alerta para queda abrupta de `lead_submit_success` e aumento de `chat_open_fallback`.
- Dono sugerido: Operacao/Produto.
- Criterio de aceite: regra de alerta documentada e testada.

## Horizonte 30 dias (P2)

1. Introduzir trilhas por intencao na home
- Trilha A: cotar rapido.
- Trilha B: validar especificacao/CA.
- Trilha C: suporte imediato.
- Criterio de sucesso: aumento da taxa de avancar para chat/lead.

2. Reposicionar CTA em paginas longas
- Acao: CTA contextual no meio e fim da pagina, com prova de confianca proxima.
- Criterio de sucesso: menor abandono de scroll antes da primeira acao.

3. Executar experimentos controlados
- Teste 1: ordem dos blocos da home.
- Teste 2: copy do CTA principal por intencao.
- Criterio de sucesso: uplift estatisticamente relevante em avancar no funil.

## Matriz de prioridade (impacto x esforco)

- Alto impacto / baixo esforco:
  - corrigir sitemap x noindex
  - redirect permanente das rotas legadas
  - padrao unico de eventos
- Alto impacto / medio esforco:
  - logs estruturados de falha de lead
  - trilha por intencao na home
- Medio impacto / medio esforco:
  - experimento de ordem de blocos

## Alternativas criativas para elevar nivel

1. Diagnostico tecnico expresso antes do chat
- Mini fluxo de 3 perguntas (setor, risco, urgencia).
- Beneficio: melhora qualidade do atendimento e reduz retrabalho comercial.

2. CTA adaptativo por contexto de pagina
- Ex.: em pagina tecnica, priorizar "validar especificacao"; em institucional, priorizar "falar com consultor".
- Beneficio: reduz desvio de intencao.

3. Bloco de confianca acionavel
- Nao so prova estatica. Mostrar prova + acao imediata no mesmo componente.
- Beneficio: encurta distancia entre credibilidade e clique.

## Riscos e mitigacoes

- Risco: excesso de evento sem uso.
  - Mitigacao: todo evento precisa dono e pergunta de negocio associada.
- Risco: mudanca de CTA sem baseline.
  - Mitigacao: medir baseline por 7 dias antes de alterar.
- Risco: correcoes pontuais sem governanca.
  - Mitigacao: aplicar skills de rota, funil e conversao como checklist obrigatorio em PR critico.

## Checklist de execucao

- [ ] Decisao unica para `/catalogo` (indexacao/sitemap).
- [ ] Redirect permanente das rotas legadas.
- [ ] Revisao de texto de categorias concluida.
- [ ] Contrato de eventos aprovado por Produto + Engenharia.
- [ ] Dashboard minimo de funil publicado.
- [ ] Alertas de falha de lead/chat ativos.
- [ ] Primeiro experimento A/B em execucao.
