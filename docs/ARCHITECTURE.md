# Arquitetura Front-End (Segura EPI)

Documento de guardrails para evitar regressao visual, quebra de rotas e conflitos de integracao.

## Stack
- Next.js 16 (App Router) + React 19
- Tailwind CSS com tokens semanticos
- Design system em `design-system.md` + `src/styles/tokens.ts` + `tailwind.config.cjs`

## Estrutura de pastas
- `app/`: rotas e layouts (App Router)
- `components/`: UI e componentes de dominio
- `hooks/`: hooks (sempre client-only quando usam hooks React)
- `lib/`: helpers (rotas, SEO, i18n, chat, legal)
- `styles/`: CSS global e overrides

## Design System (fonte de verdade)
Governanca:
- Regras: `design-system.md`
- Valores: `src/styles/tokens.ts`
- Exposicao de classes: `tailwind.config.cjs`

Regras:
- Use classes semanticas (`bg-*`, `text-*`, `border-*`, `shadow-*`, `duration-*`, `ease-*`).
- Evite hex/valores arbitrarios em JSX.
- Se precisar sobrescrever integracao (WBOT), use `styles/segura-ui.css`.

## Client vs Server Components
Qualquer arquivo com hooks React (`useEffect`, `useState`, `useRef`, etc.) precisa:
- `use client` como **primeiro statement** (sem comentario/linha em branco antes).

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
- `next.config.js` usa `typedRoutes: true`.
- Links internos devem usar `Route` quando possivel.

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

## SEO / GEO / JSON-LD
Helpers em `lib/seo/schema.ts`:
- `Organization`, `LocalBusiness`, `WebSite.SearchAction`
- `FAQPage`, `BreadcrumbList`

Renderizacao via `components/seo/JsonLd.tsx`.

## A11y e Performance
- `aria-live="polite"` em status dinamicos (navbar, chat, CTA).
- `prefers-reduced-motion` em `styles/segura-ui.css`.
- `cv-auto` (content-visibility) para secoes abaixo da dobra.
- `QuickSummary` + `LastUpdated` em paginas longas.

## Integracoes de terceiros
- WBOT carregado via `ConsentScriptGate` (ver `docs/INTEGRATIONS_WBOT.md`).
- Overrides de UI do widget em `styles/segura-ui.css`.
