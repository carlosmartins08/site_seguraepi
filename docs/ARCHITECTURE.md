# Arquitetura Front-End (SeguraEPI)

Este documento consolida regras de arquitetura, padroes de UI e guardrails do projeto para evitar regressao visual e erros de build.

## Stack
- Next.js 16 (App Router) + React 19
- Tailwind CSS com tokens semanticos
- Design system documentado em `design-system.md` e implementado em `src/styles/tokens.ts` + `tailwind.config.cjs`

## Estrutura de pastas (alto nivel)
- `app/`: rotas, layouts e paginas (App Router)
- `components/`: componentes de UI
- `hooks/`: hooks (sempre client-only quando usam React hooks)
- `lib/`: helpers (consentimento, tracking, integracoes)
- `styles/`: CSS global (utilitarios e overrides)

## Design System (fonte de verdade)
Governanca:
- Intencao e regras: `design-system.md`
- Valores: `src/styles/tokens.ts`
- Exposicao como classes: `tailwind.config.cjs`

Regra pratica:
- Componentes usam **classes semanticas** (`bg-*`, `text-*`, `border-*`, `shadow-*`, `duration-*`, `ease-*`).
- Evitar hex e valores arbitrarios em componentes; quando inevitavel (integracoes), documentar e isolar em `styles/segura-ui.css`.

## Client vs Server Components (regra critica)
Qualquer arquivo que use hooks React (`useEffect`, `useState`, `useRef`, etc.) precisa:
- Ter `'use client';` como **primeiro statement do arquivo** (sem comentario/linha em branco antes).
- Evitar BOM/linhas em branco antes do directive (isso quebra o build).

## Roteamento e Typed Routes
O projeto usa `typedRoutes: true` em `next.config.js`.

Implicacoes:
- `next/link` exige que `href` interno seja uma rota valida (ver `.next/types/link.d.ts`).
- Para menus/listas de rotas estaticas, tipar `href` como `Route` (ex.: navbar).
- Para componentes genericos (aceitam URL externa + interna), e normal usar `href as any` no `Link` para evitar travar a tipagem.

Rotas legadas:
- `/retira` existe como redirect em `app/retira/page.tsx`.

## Motion e acessibilidade
- Motion e duracoes devem seguir tokens (`duration-fast/base/slow`, `ease-standard/emphasized`).
- Hover: `translateY` max ~2px (`-translate-y-0.5`).
- `prefers-reduced-motion` deve desativar animacoes e transicoes nao essenciais (ver `styles/segura-ui.css`).
- Focus: use `focus-visible:ring-2 focus-visible:ring-focus-ring` + offset adequado.

## Integracoes de terceiros
Integracoes que injetam DOM/CSS (ex.: WBOT) devem:
- Ser carregadas por um gate de consentimento quando aplicavel (`components/analytics/ConsentScriptGate.tsx`).
- Ter overrides visuais minimos em `styles/segura-ui.css`.
- Suportar reduced-motion (desativar animacoes/transicoes via media query).

Veja: `docs/INTEGRATIONS_WBOT.md`.

