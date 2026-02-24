# Melhorias aplicadas (jornada)

Este documento registra as correcoes e melhorias aplicadas no projeto para:
- estabilizar build (Next App Router + React hooks)
- alinhar UI com o design system (tokens, motion, radius, acessibilidade)
- incorporar atendimento online (WBOT) como canal primario com fallback WhatsApp

## Correcoes criticas (build/arquitetura)
- Client Components: `'use client';` ajustado para ser **primeiro statement** em arquivos que usam hooks React.
- Typed Routes (Next `typedRoutes: true`):
  - rotas internas agora respeitam o arquivo gerado `.next/types/link.d.ts`.
  - adicionada rota legada `/retira` como redirect para `/retirada-expressa` (`app/retira/page.tsx`).

## Consistencia com Design System
- Motion:
  - padronizacao de duracoes/easing (uso de `duration-base/slow` e `ease-standard` quando aplicavel).
  - reduced motion reforcado em `styles/segura-ui.css`.
- Radius:
  - remocao de valores fora da escala (ex.: `rounded-4xl`, `md:rounded-t-[5rem]`) em componentes/paginas principais.
- Sombras/glow:
  - remocao de sombras hardcoded onde havia alternativa via token (ex.: uso de `shadow-glow-brand`).

## Navegacao interna (performance/UX)
- Uso de `next/link` para links internos em componentes chave (ex.: navbar e cards), evitando full reload.

## Atendimento online (WBOT)
- Script do WBOT carregado no `app/layout.tsx` via `ConsentScriptGate` como `necessary`.
- Token corrigido para atributo literal `token` (requisito do WBOT).
- Polyfill minimo de `$.each` (sem jQuery completo) para eliminar erro e risco funcional.
- Remocao do `WbotInitializer` antigo para evitar conflito com `window.WBOTdata`.
- Wrapper `lib/wbot.ts` e tipagem global `types/wbot.d.ts`.
- CTAs principais migrados para abrir WBOT com fallback WhatsApp (`components/chat/OnlineChatButton.tsx`).
- Overrides visuais do widget em `styles/segura-ui.css` (fontes, radius, focus, reduced motion).

## Componentes ajustados (exemplos)
- `components/actions/Button.tsx`: agora suporta modo link (`href`) e modo action (`<button>` sem `href`) com tracking.
- `components/cards/VideoCard.tsx`: removidas classes inexistentes e alinhado a tokens/motion/focus.

## Limitacoes conhecidas / proximos passos
- `CookieConsent`/`LegalLayer` hoje esta acoplado ao `app/page.tsx` (home). Se a necessidade for banner/legal em todas as rotas, mover para `app/layout.tsx` (refatoracao controlada).
- Alguns estilos inline em `LegalModal` ainda usam hex (por serem CSS-in-JS isolados); ideal migrar para tokens/vars.
- Fazer sweep final para remover `transition-all` e duracoes fora do motion system em componentes secundarios.

