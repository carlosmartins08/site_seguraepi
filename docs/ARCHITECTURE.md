# Arquitetura Front-End (Segura EPI)

Documento de guardrails para manter coerencia visual, estabilidade de rotas e integracoes previsiveis.

## Objetivo do produto
Site institucional B2B com foco em autoridade tecnica (NR/CA), conversao para atendimento consultivo e ponte para catalogo externo.

## Stack
- Next.js 16 (App Router) + React 19
- Tailwind CSS com tokens semanticos
- Design system em `design-system.md` + `src/styles/tokens.ts` + `tailwind.config.cjs`

## Estrutura de pastas
- `app/`: rotas e layouts (App Router)
- `components/`: UI e componentes de dominio
- `hooks/`: hooks (client-only quando usam hooks React)
- `lib/`: helpers (rotas, SEO, i18n, chat, legal, consent)
- `styles/`: CSS global e overrides

## Design System (fonte de verdade)
Governanca:
- Regras: `design-system.md`
- Valores: `src/styles/tokens.ts`
- Exposicao de classes: `tailwind.config.cjs`

Regras:
- Use classes semanticas (`bg-*`, `text-*`, `border-*`, `shadow-*`, `duration-*`, `ease-*`).
- Evite hex/valores arbitrarios em JSX.
- Ajuste tokens apenas nos tres artefatos sincronizados.
- Tipografia deve usar tokens (`text-display*`, `text-title*`, `text-body*`, `text-label*`). Evite tamanhos crus (`text-sm`, `text-lg`, `text-2xl`, etc.).
- Opacidades semanticas sao permitidas apenas em `bg-*` e `border-*`, na escala fixa `/10`, `/20`, `/40`. Textos `text-*/*` nao entram nessa regra.

## Client vs Server Components
Qualquer arquivo com hooks React (`useEffect`, `useState`, `useRef`, etc.) precisa:
- `use client` como primeiro statement (sem comentario/linha em branco antes).

## Governanca de rotas
Centralizada em `lib/routes.ts`:
- `ROUTES` (rotas canonicas)
- `LEGACY_ROUTES` (redirects)
- `SITEMAP_EXCLUDE`
- `buildUrl()` (query string sem hardcode)
- `DYNAMIC_ROUTE_PREFIXES` (ex.: `/epi/`)

Validador:
- `tools/lint-routes.ts` + `npm run lint:routes`

Typed Routes:
- `next.config.js` usa `typedRoutes: true`
- Links internos devem usar `Route` quando possivel

Sitemap:
- `app/sitemap.ts` gera URLs a partir de `ROUTES` + `CATEGORY_PAGES`
- Exclui `SITEMAP_EXCLUDE` e rotas utilitarias
- Rotas legadas atuais: `/retira` e `/retira-em-loja` (redirect)
- `SITEMAP_EXCLUDE` inclui `/chat` e `/obrigado`

## I18n local
Sem rotas `/en` ou `/es`. Toggle client-side:
- `hooks/useI18n.tsx` (contexto + `document.documentElement.lang`)
- `lib/i18n/locales.ts` (`SUPPORTED_LOCALES` + `STORAGE_KEY_LOCALE`)
- `lib/i18n/resources.ts` (labels nav/footer/status)
- `lib/i18n/home.ts` (conteudo da Home por idioma)

Observacao: `SUPPORTED_LOCALES` esta restrito a `['pt']` enquanto nao houver traducao completa das paginas.

## Dados e persistencia
- sessionStorage: `chat_context`, `chat_prefill`, `lead_orcamento`
- API de lead: `app/api/lead/route.ts`
- Armazenamento local: `data/leads.json` apenas em ambiente local
- Producao: usar `LEAD_WEBHOOK_URL` para CRM/ERP

## Chat e UX de atendimento
Componentes e helpers:
- FAB global: `components/actions/FloatingChatButton.tsx`
- Pre-chat offline + WhatsApp com prefill
- Contexto de navegacao: `lib/chat-context.ts` (sessionStorage)
- Prefill offline: `lib/chat-prefill.ts` (sessionStorage)
- Formulario de orcamento: `components/home/LeadForm.tsx` -> `/obrigado`

Rotas:
- `/chat` (utilitaria, noindex)
- `/obrigado` (pos-conversao, noindex)

## Consentimento e LGPD
- Persistencia em `localStorage` via `lib/consent.ts`
- Evento global para reabrir preferencias: `CONSENT_OPEN_EVENT`
- Footer dispara reabertura do painel

## SEO / GEO / JSON-LD
Helpers em `lib/seo/schema.ts`:
- `Organization`, `LocalBusiness`, `WebSite.SearchAction`
- `FAQPage`, `BreadcrumbList`

Renderizacao via `components/seo/JsonLd.tsx`.

## A11y e Performance
- Skip-link exige `id="main-content"` em todas as paginas
- `aria-live="polite"` em status dinamicos (navbar, chat, CTA)
- `prefers-reduced-motion` em `styles/segura-ui.css`
- `cv-auto` (content-visibility) para secoes abaixo da dobra
- `QuickSummary` + `LastUpdated` em paginas longas

## Integracoes de terceiros
- WBOT carregado via `ConsentScriptGate` (ver `docs/INTEGRATIONS_WBOT.md`)
- Overrides de UI do widget em `styles/segura-ui.css`
