# Site Segura EPI

Projeto institucional em Next.js 16 (App Router) com foco em UX B2B, governanca de rotas, i18n local e integracao de atendimento online (WBOT + WhatsApp).

## Requisitos
- Node.js 18+
- npm

## Scripts
- `npm install` - instala dependencias.
- `npm run dev` - desenvolvimento (Next).
- `npm run build` - build de producao (valida TypeScript + rotas tipadas).
- `npm run start` - serve o build.
- `npm run lint:design` - lint de design system (tokens, spacing, radius, cores soltas).
- `npm run lint:routes` - valida rotas internas contra `lib/routes.ts`.

## Estrutura
- `app/` - rotas e layouts do App Router.
- `components/`, `hooks/`, `lib/` - UI, hooks e helpers.
- `styles/` - CSS global e utilitarios (reduced motion, overrides de integracoes).
- `src/styles/tokens.ts` - valores do design system.
- `tailwind.config.cjs` - exposicao dos tokens como classes Tailwind.
- `design-system.md` - regras, escalas e governanca.

## Governanca de rotas
Centralizada em `lib/routes.ts`:
- `ROUTES` (canonica)
- `LEGACY_ROUTES` (redirect)
- `SITEMAP_EXCLUDE`
- `buildUrl()` para query string

Validador de rotas: `tools/lint-routes.ts` (rodar `npm run lint:routes`).

## I18n (PT/EN/ES)
I18n local via `localStorage`:
- `hooks/useI18n.tsx` (contexto + `document.documentElement.lang`)
- `lib/i18n/locales.ts` (locales e storage key)
- `lib/i18n/resources.ts` (labels nav/footer/status)
- `lib/i18n/home.ts` (conteudo da Home por idioma)

Nao existem rotas `/en` ou `/es`; o toggle e apenas client-side.

## Chat e atendimento
- FAB global: `components/actions/FloatingChatButton.tsx` (offline pre-chat + WhatsApp).
- Contexto de navegacao: `lib/chat-context.ts` (sessionStorage).
- Prefill offline: `lib/chat-prefill.ts` (sessionStorage).
- Formulario de orcamento: `components/home/LeadForm.tsx` -> `/obrigado` -> abre chat.
- Pagina de sucesso: `app/obrigado` (nao indexavel).

## LGPD e legal
- Conteudo legal: `lib/legal.tsx` (Politica/Termos).
- Paginas: `/politica-de-privacidade` e `/termos-de-uso`.
- Modal legal: `components/layout/LegalModal.tsx`.

## SEO/GEO e JSON-LD
Helpers em `lib/seo/schema.ts` + componente `components/seo/JsonLd.tsx`:
- `Organization`, `LocalBusiness`, `WebSite.SearchAction`
- `FAQPage` e `BreadcrumbList` nas paginas com FAQ

## Documentacao
- `docs/ARCHITECTURE.md` - regras, padroes e guardrails.
- `docs/INTEGRATIONS_WBOT.md` - integracao e troubleshooting do chat.
- `docs/IMPROVEMENTS.md` - registro das melhorias aplicadas.
- `docs/MAINTENANCE.md` - guia de manutencao e atualizacoes.
