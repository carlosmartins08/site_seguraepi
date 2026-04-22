# GTM Container Blueprint (Segura EPI)

## Objetivo

Replicar um container GTM consistente, auditavel e sem duplicidade de eventos para GA4.

## Premissas

- O site usa `dataLayer` como camada de transporte.
- O evento `page_view` e disparado manualmente no App Router.
- `send_page_view` do GA direto esta desabilitado para evitar duplicidade.
- Consentimento de analytics e obrigatorio para envio de eventos.

## Padrao de nomenclatura no GTM

- Variaveis: `v_...`
- Triggers: `tr_...`
- Tags: `tg_...`

## Variaveis obrigatorias

1. Built-in variables (habilitar no GTM)
- `Event`
- `Page URL`
- `Page Path`
- `Page Hostname`
- `Referrer`

2. Data Layer Variables
- `v_dl_source` -> `source`
- `v_dl_channel` -> `channel`
- `v_dl_surface` -> `surface`
- `v_dl_experiment` -> `experiment`
- `v_dl_variant` -> `variant`
- `v_dl_page_path` -> `page_path`
- `v_dl_page_location` -> `page_location`
- `v_dl_page_title` -> `page_title`
- `v_dl_language` -> `language`

3. Constant variables
- `v_const_ga_measurement_id` -> `G-XXXXXXXXXX` (propriedade GA4 oficial)

## Triggers obrigatorios

1. `tr_all_pages`
- Tipo: Page View
- Disparo: All Pages

2. Custom Event triggers
- `tr_ev_page_view` -> `page_view`
- `tr_ev_route_view` -> `route_view`
- `tr_ev_lead_attempt` -> `lead_submit_attempt`
- `tr_ev_lead_success` -> `lead_submit_success`
- `tr_ev_lead_fail` -> `lead_submit_fail`
- `tr_ev_chat_attempt` -> `chat_open_attempt`
- `tr_ev_chat_success` -> `chat_open_success`
- `tr_ev_chat_fallback` -> `chat_open_fallback`
- `tr_ev_chat_fail` -> `chat_open_fail`
- `tr_ev_exp_home_hero` -> `exp_home_hero_exposure`

## Tags obrigatorias

1. `tg_ga4_config`
- Tipo: Google Analytics: GA4 Configuration
- Measurement ID: `{{v_const_ga_measurement_id}}`
- Trigger: `tr_all_pages`
- Campos recomendados:
  - `allow_google_signals`: `true`
  - `anonymize_ip`: `true`
  - `send_page_view`: `false`

2. `tg_ga4_page_view`
- Tipo: GA4 Event
- Event Name: `page_view`
- Trigger: `tr_ev_page_view`
- Event parameters:
  - `page_path`: `{{v_dl_page_path}}`
  - `page_location`: `{{v_dl_page_location}}`
  - `page_title`: `{{v_dl_page_title}}`
  - `language`: `{{v_dl_language}}`

3. `tg_ga4_route_view`
- Tipo: GA4 Event
- Event Name: `route_view`
- Trigger: `tr_ev_route_view`
- Event parameters:
  - `page_path`: `{{v_dl_page_path}}`
  - `page_location`: `{{v_dl_page_location}}`
  - `page_title`: `{{v_dl_page_title}}`
  - `language`: `{{v_dl_language}}`

4. `tg_ga4_lead_attempt`
- Event Name: `lead_submit_attempt`
- Trigger: `tr_ev_lead_attempt`
- Parameters:
  - `source`: `{{v_dl_source}}`

5. `tg_ga4_lead_success`
- Event Name: `lead_submit_success`
- Trigger: `tr_ev_lead_success`
- Parameters:
  - `source`: `{{v_dl_source}}`

6. `tg_ga4_lead_fail`
- Event Name: `lead_submit_fail`
- Trigger: `tr_ev_lead_fail`
- Parameters:
  - `source`: `{{v_dl_source}}`

7. `tg_ga4_chat_attempt`
- Event Name: `chat_open_attempt`
- Trigger: `tr_ev_chat_attempt`
- Parameters:
  - `channel`: `{{v_dl_channel}}`
  - `surface`: `{{v_dl_surface}}`

8. `tg_ga4_chat_success`
- Event Name: `chat_open_success`
- Trigger: `tr_ev_chat_success`
- Parameters:
  - `channel`: `{{v_dl_channel}}`
  - `surface`: `{{v_dl_surface}}`

9. `tg_ga4_chat_fallback`
- Event Name: `chat_open_fallback`
- Trigger: `tr_ev_chat_fallback`
- Parameters:
  - `channel`: `{{v_dl_channel}}`
  - `surface`: `{{v_dl_surface}}`

10. `tg_ga4_chat_fail`
- Event Name: `chat_open_fail`
- Trigger: `tr_ev_chat_fail`
- Parameters:
  - `channel`: `{{v_dl_channel}}`
  - `surface`: `{{v_dl_surface}}`

11. `tg_ga4_exp_home_hero`
- Event Name: `exp_home_hero_exposure`
- Trigger: `tr_ev_exp_home_hero`
- Parameters:
  - `experiment`: `{{v_dl_experiment}}`
  - `variant`: `{{v_dl_variant}}`
  - `page_path`: `{{v_dl_page_path}}`

## Configuracao no GA4

1. Marcar como Key Event:
- `lead_submit_success`
- `chat_open_success`

2. Criar custom dimensions (event scope):
- `source`
- `channel`
- `surface`
- `experiment`
- `variant`
- `language`

## Consentimento e privacidade

1. No GTM, habilitar consent checks para tags GA4.
2. Tags de analytics devem exigir consentimento `analytics_storage`.
3. Nao enviar identificadores pessoais em parametros de evento.

## Checklist de validacao (antes de publicar container)

1. Tag Assistant:
- confirmar disparo de `tg_ga4_config` em todas as paginas.
- confirmar disparo de cada `tg_ga4_*` no evento certo.

2. GA4 DebugView:
- validar sequencia: `page_view` -> `route_view` -> eventos de acao.
- validar parametros (`source`, `channel`, `surface`, `experiment`, `variant`).

3. Realtime:
- validar entrada de `lead_submit_success` e `chat_open_success`.

4. Duplicidade:
- confirmar 1 `page_view` por navegacao.

## Publicacao segura

1. Criar versao no GTM com nome:
- `seguraepi-ga4-core-v1`
2. Publicar primeiro em ambiente de homologacao.
3. Validar por 24h.
4. Publicar em producao.
