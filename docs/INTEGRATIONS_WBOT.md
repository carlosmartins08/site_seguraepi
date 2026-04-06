# Integracao WBOT (Atendimento Online)

O WBOT e o motor do atendimento online. A UX e controlada pelo FAB customizado, com fallback para WhatsApp e pre-chat offline.

## Onde esta integrado
- Script WBOT: `app/layout.tsx` via `ConsentScriptGate`
- Polyfill `$.each`: `app/layout.tsx` (beforeInteractive)
- FAB customizado: `components/actions/FloatingChatButton.tsx`
- Helper de abertura: `lib/wbot.ts` (`openWbotChat`, `buildWhatsappLink`)
- Overrides visuais: `styles/segura-ui.css`

## Token (critico)
O WBOT le o token no atributo literal `token` do `<script>`:

```html
<script src="https://wbot.chat/index.js" token="SEU_TOKEN"></script>
```

No projeto, isso e feito via `ConsentScriptGate` em `app/layout.tsx` usando `NEXT_PUBLIC_WBOT_TOKEN`.

## Consentimento
O WBOT esta marcado como **necessary**:
- Carrega mesmo antes do usuario escolher preferencias de cookies
- Para exigir opt-in, alterar `preference` em `app/layout.tsx`

## FAB customizado (primeira experiencia)
O FAB substitui o launcher nativo do WBOT:
- `components/actions/FloatingChatButton.tsx`
- Oculta o botao nativo com CSS (`#wbot-open-chat { display: none; }`)
- Offline: abre pre-chat e envia WhatsApp com mensagem pre-preenchida
- Online: abre WBOT com fallback WhatsApp (se script nao carregou)

## Contexto e Prefill
SessionStorage:
- `chat_context` (`lib/chat-context.ts`): pagina, query, intent, origem, timestamp
- `chat_prefill` (`lib/chat-prefill.ts`): nome, empresa, WhatsApp, assunto

O contexto e anexado ao fallback do WhatsApp para evitar repeticao de informacoes.

## Mobile
O widget WBOT e forçado a fullscreen em mobile via `styles/segura-ui.css`.

## Troubleshooting (checklist)
1) WBOT nao abre:
- Verifique `script[src="https://wbot.chat/index.js"]` e atributo `token`
- Confirme se `ConsentScriptGate` carregou

2) CTA abre WhatsApp ao inves do WBOT:
- O wrapper faz fallback quando `window.WBOTopenChat` nao existe (script falhou ou ainda nao carregou)

3) Erro de jQuery no console:
- O polyfill `wbot-jquery-each-polyfill` deve existir no `app/layout.tsx`
