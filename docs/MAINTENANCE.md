# Guia de Manutencao

Este documento orienta como atualizar conteudo, integracoes e configuracoes sem quebrar rotas ou o design system.

## Variaveis de ambiente
- `NEXT_PUBLIC_WBOT_TOKEN` - token do WBOT
- `NEXT_PUBLIC_GA_ID` - Google Analytics (opcional)
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager (opcional)
- `LEAD_WEBHOOK_URL` - webhook para leads (producao)
- `FUNNEL_EVENTS_WEBHOOK_URL` - webhook opcional para eventos de funil (monitoramento externo)

## Conteudo institucional
Paginas principais:
- `/como-comprar` -> `app/como-comprar/page.tsx`
- `/retirada-expressa` -> `app/retirada-expressa/ClientPage.tsx`
- `/politica-de-entrega-e-frete` -> `app/politica-de-entrega-e-frete/ClientPage.tsx`
- `/politica-de-trocas-e-devolucoes` -> `app/politica-de-trocas-e-devolucoes/page.tsx`
- `/politica-de-privacidade` -> `app/politica-de-privacidade/page.tsx`
- `/termos-de-uso` -> `app/termos-de-uso/page.tsx`
- `/sobre-segura-epi` -> `app/sobre-segura-epi/ClientPage.tsx`
- `/trabalhe-conosco` -> `app/trabalhe-conosco/ClientPage.tsx`

Recomendacao:
- Atualize textos mantendo layout
- Ajuste `metadata` quando alterar titulo/descricao

## Guias por categoria
Fonte de dados:
- `lib/catalog/categories.ts`

Onde ajustar:
- `CATEGORY_PAGES` (conteudo)
- `CATEGORY_ORDER` (ordem no hub)

Pagina:
- `/epi/[categoria]` -> `app/epi/[categoria]/page.tsx`
- Hub -> `app/epi/categorias/page.tsx`

## I18n (PT/EN/ES)
Arquivos principais:
- `lib/i18n/locales.ts`
- `lib/i18n/resources.ts` (labels nav/footer/status)
- `lib/i18n/home.ts` (conteudo da Home por idioma)

O toggle e local (localStorage `segura-epi-locale`).
Atualmente `SUPPORTED_LOCALES` esta restrito a `['pt']`. Expanda somente com traducao completa.

## Autoridade tecnica (E-E-A-T)
Dados base:
- `lib/content/authority.ts`

Use para:
- `AuthorityPanel`
- `LastUpdated` em paginas longas

Atualize `leadName`, `leadRole`, `credentials` e `updatedAt` quando houver responsavel tecnico real.

## SEO / GEO
Helpers:
- `lib/seo/schema.ts`
- `components/seo/JsonLd.tsx`
Metadata base:
- `lib/seo/site.ts` (title/description padrao)

Sempre que adicionar FAQ:
- Inclua `buildFaqJsonLd` na pagina
- Inclua `buildBreadcrumbJsonLd` com o caminho correto

## Chat e conversao
FAB global:
- `components/actions/FloatingChatButton.tsx`

Helpers:
- `lib/chat-context.ts` (sessionStorage `chat_context`)
- `lib/chat-prefill.ts` (sessionStorage `chat_prefill`)
- `lib/lead.ts` (sessionStorage `lead_orcamento`)

Leads:
- `app/api/lead/route.ts` (POST)
- Em ambiente local grava em `data/leads.json`
- Em producao use `LEAD_WEBHOOK_URL`

Rotas:
- `/chat` (utilitario)
- `/obrigado` (pos-conversao, noindex)

Instrumentacao de funil (base atual):
- `page_view` em `components/analytics/RouteTracker.tsx` (evento padrao GA4)
- `route_view` em `components/analytics/RouteTracker.tsx`
- `lead_submit_attempt`, `lead_submit_success`, `lead_submit_fail` em `components/home/LeadForm.tsx`
- `chat_open_attempt`, `chat_open_success`, `chat_open_fallback`, `chat_open_fail` em `lib/wbot.ts`
- exposicao de experimento em home: `exp_home_hero_exposure` em `components/home/HomeClient.tsx`

Pipeline de analytics:
- quando `NEXT_PUBLIC_GTM_ID` existe, GTM e o pipeline priorizado.
- GA direto (`gtag`) e usado apenas quando GTM nao esta configurado.
- guia operacional: `docs/GA4_GTM_PLAYBOOK.md`.
- blueprint detalhado de container: `docs/GTM_CONTAINER_BLUEPRINT.md`.

Experimento A/B da home:
- arquivo de decisao: `lib/experiments/home-hero.ts`
- variante forcada por query param: `?exp_home_hero=a` ou `?exp_home_hero=b`

Observabilidade de lead:
- `app/api/lead/route.ts` registra logs estruturados de falha:
  - `lead_api_webhook_error`
  - `lead_api_no_webhook`
  - `lead_api_error`

Painel minimo de funil:
- ingestao de eventos: `app/api/funnel/event/route.ts`
- resumo de funil: `app/api/funnel/summary/route.ts`
- dashboard interno (noindex): `/painel-funil` em `app/painel-funil/page.tsx`
- agregacao local: `lib/analytics/funnel-monitor.ts` (arquivo `data/funnel-events.ndjson`)

## Contatos
Dados base:
- `lib/constants.ts` (`CONTACT_INFO`)

Helpers:
- `lib/contact.ts` (tel/mailto)

Use `phoneHref()` e `mailtoHref()` sempre que renderizar telefone/email.
`useBusinessStatus` usa `CONTACT_INFO.businessHours` e timezone `America/Sao_Paulo`.

## LGPD e legal
Conteudo:
- `lib/legal.tsx`
- `components/layout/LegalModal.tsx`

Paginas:
- `/politica-de-privacidade`
- `/termos-de-uso`

Preferencias de cookies:
- Reabertura via footer usando `CONSENT_OPEN_EVENT`

## A11y
- Toda pagina deve manter `id="main-content"` no `<main>`
- Fallback sem JS para `.reveal`: o HTML inicia com `no-js`; se o JS falhar, o conteudo fica visivel (`html.no-js .reveal`).

## Tipografia e opacidades semanticas
- Headings, labels e body devem usar tokens: `text-display*`, `text-title*`, `text-body*`, `text-label*`.
- Evite tamanhos crus (`text-sm`, `text-lg`, `text-2xl`, etc.) em componentes e paginas.
- Opacidades semanticas sao permitidas apenas em `bg-*` e `border-*` com escala fixa `/10`, `/20`, `/40`.
- Textos `text-*/*` nao entram na normalizacao de opacidade.

## Motion e iconografia
- Entradas/stagger: use `components/motion/Reveal` + `.reveal` e `data-reveal`/`data-reveal-item`.
- Microinteracao: `Button` com prop `motion` e `components/motion/MotionCard` (cards interativos).
- Menu mobile: animacao controlada por `lib/motion/overlay.ts`.
- Icones: usar `components/icons/Icon` + `components/icons/icon-map.ts` (sem SVG solto).
- Respeitar `prefers-reduced-motion` em novas animacoes.

## Checklist de QA (manual)
- Navegacao: Header/Footer, CTA principais e rotas criticas (`/catalogo`, `/chat`, `/obrigado`).
- Formularios: estados `loading/erro/sucesso`, mensagens claras e feedback visivel.
- Consentimento: banner LGPD + reabertura via footer.
- Responsivo: hero, cards, tabelas tecnicas e FAQ.
- Acessibilidade: focus visivel, `aria-live` em status dinamicos.
- Motion: reveals, CTAs e menu mobile sem atraso excessivo.
- Icones: consistencia de nomes e ausencia de SVG solto.

## Seguranca e boas praticas
- Nao expor tokens/segredos no client (use variaveis de ambiente e endpoints server-side).
- Evitar hardcode de URLs internas; use `ROUTES` + `buildUrl()`.
- Preferir classes semanticas; evitar hex/valores arbitrarios.
- Validar entradas no `app/api/lead` e manter `LEAD_WEBHOOK_URL` apenas em ambiente seguro.

## Testes recomendados
- `npm run lint:routes`
- `npm run lint:design`
- `npm run build`
- Lighthouse (Home, Centro Tecnico, Como Comprar, Politica de Trocas)

## Skills de governanca (local no projeto)
- `docs/skills/route-flow-guardian/SKILL.md` - auditoria de coerencia de rotas, redirects, sitemap e caminhos.
- `docs/skills/funnel-observability-guardian/SKILL.md` - contrato de eventos e observabilidade de funil.
- `docs/skills/conversion-path-designer/SKILL.md` - melhoria de caminho de conversao por intencao.
- Plano operacional: `docs/ROUTE_FLOW_CORRECTION_PLAN.md`.
