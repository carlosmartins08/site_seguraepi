# Site Segura EPI

Projeto institucional B2B em Next.js 16 (App Router) com foco em autoridade tecnica, conversao para atendimento consultivo e ponte para catalogo externo.

## Stack
- Next.js 16 (App Router) + React 19
- Tailwind CSS com tokens semanticos
- Design system em `design-system.md` + `src/styles/tokens.ts` + `tailwind.config.cjs`

## Tipografia e opacidades
- Tipografia tokenizada obrigatoria: `text-display*`, `text-title*`, `text-body*`, `text-label*`.
- Evitar tamanhos crus (`text-sm`, `text-lg`, `text-2xl`, etc.) em JSX.
- Opacidades semanticas apenas em `bg-*` e `border-*` com `/10`, `/20`, `/40`.

## Requisitos
- Node.js 18+
- npm

## Scripts
- `npm install` - instala dependencias
- `npm run dev` - desenvolvimento (Next)
- `npm run build` - build de producao (valida TypeScript + rotas tipadas)
- `npm run start` - serve o build
- `npm run lint:design` - lint de design system (tokens, spacing, radius, cores soltas)
- `npm run lint:routes` - valida rotas internas contra `lib/routes.ts`

## Variaveis de ambiente
- `NEXT_PUBLIC_WBOT_TOKEN` - token do WBOT (obrigatorio para chat online)
- `NEXT_PUBLIC_GA_ID` - Google Analytics (opcional)
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager (opcional)
- `LEAD_WEBHOOK_URL` - endpoint para receber leads do formulario (recomendado em producao)

## Estrutura
- `app/` - rotas e layouts do App Router
- `components/`, `hooks/`, `lib/` - UI, hooks e helpers
- `styles/` - CSS global e utilitarios (reduced motion, overrides de integracoes)
- `src/styles/tokens.ts` - valores do design system
- `tailwind.config.cjs` - exposicao dos tokens como classes Tailwind
- `design-system.md` - regras, escalas e governanca

## Fluxos criticos
- Atendimento online: FAB global -> WBOT -> fallback WhatsApp
- Lead B2B: `LeadForm` -> `/obrigado` -> abre chat
- Catalogo B2B: `/catalogo` redireciona para subdominio dedicado

## Dados e persistencia
- sessionStorage: `chat_context`, `chat_prefill`, `lead_orcamento`
- `/api/lead` grava em `data/leads.json` apenas em ambiente local
- Em producao, configurar `LEAD_WEBHOOK_URL` para CRM/ERP

## Governanca de rotas
Centralizada em `lib/routes.ts`:
- `ROUTES` (canonica)
- `LEGACY_ROUTES` (redirect)
- `SITEMAP_EXCLUDE`
- `buildUrl()` para query string

Validador de rotas: `tools/lint-routes.ts` (rodar `npm run lint:routes`)

## I18n (PT/EN/ES)
I18n local via `localStorage`, com escopo controlado:
- `hooks/useI18n.tsx` (contexto + `document.documentElement.lang`)
- `lib/i18n/locales.ts` (`SUPPORTED_LOCALES` e storage key)
- `lib/i18n/resources.ts` (labels nav/footer/status)
- `lib/i18n/home.ts` (conteudo da Home por idioma)

Atualmente o `SUPPORTED_LOCALES` esta restrito a `['pt']` para evitar experiencia parcialmente traduzida.

## Chat e atendimento
- FAB global: `components/actions/FloatingChatButton.tsx` (offline pre-chat + WhatsApp)
- Contexto de navegacao: `lib/chat-context.ts` (sessionStorage)
- Prefill offline: `lib/chat-prefill.ts` (sessionStorage)
- Formulario de orcamento: `components/home/LeadForm.tsx` -> `/obrigado` -> abre chat
- Pagina de sucesso: `app/obrigado` (nao indexavel)

## LGPD e legal
- Conteudo legal: `lib/legal.tsx` (Politica/Termos)
- Paginas: `/politica-de-privacidade` e `/termos-de-uso`
- Modal legal: `components/layout/LegalModal.tsx`
- Preferencias de cookies reabertas pelo footer

## SEO/GEO e JSON-LD
Helpers em `lib/seo/schema.ts` + componente `components/seo/JsonLd.tsx`:
- `Organization`, `LocalBusiness`, `WebSite.SearchAction`
- `FAQPage` e `BreadcrumbList` nas paginas com FAQ

## Documentacao
- `docs/ARCHITECTURE.md` - regras, padroes e guardrails
- `docs/INTEGRATIONS_WBOT.md` - integracao e troubleshooting do chat
- `docs/IMPROVEMENTS.md` - registro das melhorias aplicadas
- `docs/MAINTENANCE.md` - guia de manutencao e atualizacoes
