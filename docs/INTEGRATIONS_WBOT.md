# Integracao WBOT (Atendimento Online)

Este projeto integra o widget do WBOT para atendimento online, como alternativa primaria ao WhatsApp (que fica como fallback).

## Onde esta integrado
- Script do WBOT: carregado globalmente em `app/layout.tsx`.
- Gate de consentimento: `components/analytics/ConsentScriptGate.tsx`.
- Wrapper para abrir chat com fallback: `lib/wbot.ts` (`openWbotChat`).
- CTA pronto: `components/chat/OnlineChatButton.tsx`.
- Overrides visuais e reduced-motion: `styles/segura-ui.css`.

## Regra do token (critico)
O WBOT le o token do atributo literal `token` do `<script>`:

```html
<script src="https://wbot.chat/index.js" token="SEU_TOKEN"></script>
```

No projeto, isso e feito via `ConsentScriptGate`:
- `src="https://wbot.chat/index.js"`
- `token="..."`
- `id="wbot-chat-script"` (dedupe)

## Consentimento
O WBOT foi tratado como **necessary** (carrega mesmo antes de o usuario salvar preferencias).
- `ConsentScriptGate` aplica defaults via `defaultPreferences` quando ainda nao existe consent salvo.

Se a politica do produto mudar (ex.: exigir opt-in), a troca deve ser feita em `app/layout.tsx`:
- alterar `preference="necessary"` para `marketing`
- ou carregar apenas sob demanda (ao clicar).

## Polyfill de $.each (sem jQuery inteiro)
O script do WBOT usa `$.each` em um trecho. Para evitar erro no console e comportamento inconsistente, existe um polyfill minimo em `app/layout.tsx` com `strategy="beforeInteractive"`.

Escopo do polyfill:
- cria apenas `window.$.each` (nao injeta jQuery completo).

## Como abrir o chat (com fallback)
Use o wrapper:
- `openWbotChat({ fallbackHref: CONTACT_INFO.whatsapp, trackEvent, trackParams })`

Componente pronto (CTA):
- `components/chat/OnlineChatButton.tsx`

Exemplo:
```tsx
<OnlineChatButton variant="primary" trackEvent="cta_home_chat">
  Atendimento online
</OnlineChatButton>
```

## Estilos do widget (Design System)
Os overrides ficam em `styles/segura-ui.css` e seguem principios:
- fontes do projeto (Inter/Poppins via CSS variables do Next Font)
- radius/elevation coerentes
- focus ring equivalente ao `focus.ring`
- reduced-motion respeitado

Evite:
- sobrescrever CSS do WBOT em componentes.
- hardcode de hex em componentes para ajustes do widget.

## Troubleshooting (checklist rapido)
1) Botao do WBOT nao aparece:
- verifique se o `script[src="https://wbot.chat/index.js"]` carregou.
- confirme atributo `token="..."` (nao `data-token`).
- desative bloqueadores (adblock) para validar.

2) Clicar no CTA abre WhatsApp em vez do chat:
- o wrapper faz fallback quando `window.WBOTopenChat` nao existe (script ainda nao carregou ou falhou).

3) Erro sobre jQuery no console:
- confirme que o polyfill `wbot-jquery-each-polyfill` existe no HTML e roda antes do WBOT.

