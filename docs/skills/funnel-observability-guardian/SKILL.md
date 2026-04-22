---
name: funnel-observability-guardian
description: Definir instrumentacao de funil e observabilidade de conversao com eventos, erros e alertas. Usar quando faltarem dados para diagnosticar queda de conversao, abandono entre etapas, falha de lead/chat/formulario, ou quando o time quer parar de decidir no achismo.
---

# funnel-observability-guardian

## Objetivo

Transformar fluxo de negocio em sinais confiaveis para decidir com dados e detectar falhas antes de virar perda de receita.

## Entradas minimas

- Fluxos criticos (ex.: home -> chat, home -> lead -> obrigado).
- Ferramentas ativas (GA4/GTM, datalayer, logs, Sentry etc.).
- Eventos existentes e lacunas conhecidas.
- Regras de consentimento e privacidade.

## Fluxo de trabalho

1. Definir objetivo de negocio por fluxo.
2. Desenhar etapas do funil com nomes estaveis.
3. Padronizar contrato de eventos:
   - nome do evento
   - parametros obrigatorios
   - versao do evento
4. Instrumentar sucesso e falha:
   - tentativa
   - sucesso
   - erro
   - fallback
5. Definir qualidade de dados:
   - completude
   - consistencia
   - deduplicacao
6. Definir observabilidade operacional:
   - logs estruturados
   - metricas de funil
   - alertas de queda

## Taxonomia base recomendada

- `route_view`
- `cta_click`
- `lead_submit_attempt`
- `lead_submit_success`
- `lead_submit_fail`
- `chat_open_attempt`
- `chat_open_success`
- `chat_open_fallback`

## Entregaveis

- Tracking plan por fluxo.
- Contrato de eventos e parametros.
- Regras de qualidade de dados.
- Alertas minimos para operacao.

## Guardrails

- Nao coletar dado sensivel sem base legal.
- Nao criar evento sem dono e sem uso analitico claro.
- Nao declarar conclusao causal sem experimento.
