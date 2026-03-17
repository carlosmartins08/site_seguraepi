# Site Segura EPI

Projeto institucional em Next.js 16 (App Router) com React 19, focado em UX B2B e consistencia via design system (tokens + Tailwind).

## Requisitos
- Node.js 18+
- npm

## Scripts
- `npm install` - instala dependencias.
- `npm run dev` - desenvolvimento (Next).
- `npm run build` - build de producao (valida TypeScript + rotas tipadas).
- `npm run start` - serve o build.
- `npm run lint:design` - lint de design (spacing/radius/arbitrários/cores soltas).

## Estrutura
- `app/` - rotas e layouts do App Router.
- `components/`, `hooks/`, `lib/` - UI, hooks e helpers.
- `styles/` - CSS global e utilitarios (inclui reduced motion e overrides de integracoes).
- `src/styles/tokens.ts` - valores do design system (fonte de verdade).
- `tailwind.config.cjs` - exposicao dos tokens como classes Tailwind semanticas.
- `design-system.md` - regras, escalas e governanca (intencao do sistema).

## Checklist de design (lint)
- Sem valores arbitrários `[...]` para spacing/radius em classes Tailwind.
- Evitar cores soltas em JSX (hex/rgba); prefira tokens/classe semântica.
- `npm run lint:design` deve seguir limpo antes de publicar.

## Regras de arquitetura (importantes para nao quebrar build)
- **Client Components:** arquivos que usam hooks (`useEffect`, `useState`, etc.) precisam do `'use client';` como **primeiro statement** do arquivo (sem comentario/linha em branco antes).
- **Typed Routes:** `next.config.js` esta com `typedRoutes: true`. Links internos via `next/link` precisam apontar para rotas existentes (ver `.next/types/link.d.ts`). Rotas legadas curtas (ex.: `/retira`) sao tratadas com redirect em `app/retira/page.tsx`.
- **Design System:** evite hex/valores arbitrarios em componentes. Use classes semanticas (`bg-*`, `text-*`, `border-*`, `shadow-*`, `duration-*`, `ease-*`) mapeadas para tokens.

## Consentimento (LGPD)
- Estado fica em `localStorage` com chave `segura-epi-consent` (ver `lib/consent.ts`).
- `components/analytics/ConsentScriptGate.tsx` controla scripts por preferencia e aplica defaults (ex.: `necessary` carrega mesmo antes do usuario escolher).

## Atendimento online (WBOT)
- Script carregado globalmente em `app/layout.tsx` via `ConsentScriptGate` com `preference="necessary"`.
- O WBOT exige `token` como atributo literal no `<script>` (nao `data-token`).
- Wrapper para abrir chat com fallback WhatsApp: `lib/wbot.ts` (`openWbotChat`).
- CTA pronto para uso: `components/chat/OnlineChatButton.tsx`.
- Overrides visuais minimos do widget ficam em `styles/segura-ui.css`.

## Documentacao
- `docs/ARCHITECTURE.md` - arquitetura, regras e padroes.
- `docs/INTEGRATIONS_WBOT.md` - integracao do WBOT (token, consent, fallback, troubleshooting).
- `docs/IMPROVEMENTS.md` - registro das melhorias aplicadas e proximos passos.
