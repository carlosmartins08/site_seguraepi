# Site Segura EPI

Projeto institucional em Next.js 16 (App Router) com React 19.

## Requisitos
- Node.js 18+
- npm

## Scripts
- `npm install` — instala dependências.
- `npm run dev` — desenvolvimento (Next).
- `npm run build` — build de produção.
- `npm run start` — serve o build.

## Estrutura
- `app/` — rotas e layouts do App Router.
- `components/`, `lib/`, `styles/` — UI, helpers e estilos.
- `next.config.js`, `tsconfig.json`, `next-env.d.ts` — configuração do Next/TypeScript.

## Observações
- Idiomas PT/EN via `hooks/useI18n.tsx` e `components/actions/LocaleSwitcher.tsx`.
- Consentimento LGPD pronto em `components/trust/CookieConsent.tsx`.
