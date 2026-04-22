# GA4 + GTM Playbook (Fonte Oficial de Métricas)

## Decisão

GA4 é a fonte oficial para leitura de negócio.  
Quando `NEXT_PUBLIC_GTM_ID` e `NEXT_PUBLIC_GA_ID` coexistem, o projeto prioriza pipeline via GTM.
Envio de analytics respeita consentimento (`analytics`) antes de disparar eventos.

## Pipeline ativo no código

1. `components/analytics/AnalyticsScripts.tsx`
- define pipeline (`gtm` ou `ga`) em `window.__SEGURA_ANALYTICS_PIPELINE`
- GTM: inicializa `dataLayer` e carrega `gtm.js` com consentimento analytics
- GA direto: carrega `gtag.js` com `send_page_view: false` para evitar duplicidade

2. `components/analytics/RouteTracker.tsx`
- envia `page_view` padrão GA4 (`page_path`, `page_location`, `page_title`, `language`)
- envia `route_view` técnico para diagnóstico de fluxo

3. `lib/analytics/track.ts`
- envia eventos para GA conforme pipeline ativo
- também encaminha eventos críticos para monitor local (`/api/funnel/event`)

## Contrato de eventos (GA4)

### Navegação
- `page_view`
  - `page_path`
  - `page_location`
  - `page_title`
  - `language`

### Funil de lead
- `lead_submit_attempt`
- `lead_submit_success`
- `lead_submit_fail`
  - parâmetro recomendado: `source`

### Funil de chat
- `chat_open_attempt`
- `chat_open_success`
- `chat_open_fallback`
- `chat_open_fail`
  - parâmetros recomendados: `channel`, `surface`

### Experimento
- `exp_home_hero_exposure`
  - `experiment` (`home_hero_v1`)
  - `variant` (`control` ou `intent`)
  - `path`

## Configuração obrigatória no GA4

1. Admin -> Data Streams -> Web -> Enhanced measurement ativo.
2. Admin -> Events:
- validar recebimento dos eventos acima.
3. Admin -> Key events:
- marcar `lead_submit_success`
- marcar `chat_open_success`
4. Admin -> Custom definitions (Event-scoped):
- `source`
- `channel`
- `surface`
- `experiment`
- `variant`
- `page_path` (se necessário para exploração customizada)
5. Explore -> Funnel exploration:
- Funil 1: `page_view (/)` -> `cta_home_*` -> `chat_open_success`
- Funil 2: `page_view (/)` -> `lead_submit_attempt` -> `lead_submit_success`

## Configuração obrigatória no GTM (quando pipeline GTM)

1. Criar tag GA4 Configuration com Measurement ID da propriedade.
2. Trigger:
- All Pages (consent-aware).
3. Criar tag GA4 Event genérica para eventos de `dataLayer`.
4. Criar triggers por custom event:
- `lead_submit_attempt`
- `lead_submit_success`
- `lead_submit_fail`
- `chat_open_attempt`
- `chat_open_success`
- `chat_open_fallback`
- `chat_open_fail`
- `exp_home_hero_exposure`
5. Publicar container e validar no Tag Assistant.
6. Blueprint detalhado para replicacao: `docs/GTM_CONTAINER_BLUEPRINT.md`.

## Qualidade de dados (check semanal)

1. Taxa de sucesso de lead = `lead_submit_success / lead_submit_attempt`.
2. Taxa de fallback de chat = `chat_open_fallback / chat_open_attempt`.
3. Verificar eventos sem parâmetros esperados (`source`, `surface`, `variant`).
4. Verificar duplicidade de `page_view` após deploy.

## Alertas sugeridos (GA Custom Insights)

1. Queda de `lead_submit_success` > 40% em comparação semanal.
2. Aumento de `chat_open_fallback` > 50% em comparação semanal.
3. Queda abrupta de `page_view` na home (indício de problema de tag).
