# Melhorias aplicadas (historico resumido)

Registro das principais evolucoes para manutencao e onboarding tecnico.

## Governanca de rotas
- `lib/routes.ts` centraliza rotas canonicas e legadas
- `buildUrl()` padroniza query strings
- `tools/lint-routes.ts` valida rotas internas (script `npm run lint:routes`)
- `/chat` criada como rota utilitaria e removida do sitemap
- `/obrigado` criada para pos-conversao (noindex)

## Conteudo e paginas
- Home reestruturada com novo posicionamento B2B e CTAs
- Paginas institucionais atualizadas: Como Comprar, Retirada Expressa, Politicas, Sobre, Trabalhe Conosco
- Guias por categoria em `/epi/[categoria]` com novos slugs
- Pagina 404 personalizada com busca e atalhos

## Chat e conversao
- FAB global com status online/offline e pre-chat offline
- Contexto e prefill via sessionStorage (`chat_context`, `chat_prefill`)
- Formulario de orcamento direciona para `/obrigado` e abre chat

## I18n (PT/EN/ES)
- Toggle local (localStorage) com labels em navbar/footer/status
- Conteudo da Home por idioma (`lib/i18n/home.ts`)
- Atualizacao dinamica de `document.documentElement.lang`

## SEO/GEO
- JSON-LD centralizado em `lib/seo/schema.ts`
- FAQPage e BreadcrumbList em paginas com FAQ
- Organization/LocalBusiness/WebSite no layout
- SearchAction com `/catalogo?busca=`

## Acessibilidade e performance
- Contraste reforcado em secoes escuras
- `aria-live` para status dinamicos
- `cv-auto` (content-visibility) em secoes abaixo da dobra
- `QuickSummary` + `LastUpdated` em paginas longas

## LGPD e legal
- Politica de Privacidade e Termos com paginas publicas
- Modal legal atualizado e linkado
- Cookie consent alinhado com LGPD

## 2026-04
- Tokens de radius sincronizados com o design system
- Padronizacao de cores semanticas (`bg-bg-surface`, `text-text-inverse`)
- Tipografia tokenizada aplicada em headings, labels e body (`text-display*`, `text-title*`, `text-body*`, `text-label*`)
- Opacidades semanticas normalizadas em `bg-*` e `border-*` (`/10`, `/20`, `/40`)
- Skip-link aplicado em todas as paginas (`id="main-content"`)
- Reabertura de preferencias de cookies via footer
- Endpoint de lead com webhook opcional (`/api/lead` + `LEAD_WEBHOOK_URL`)
- Timezone de status comercial fixado em `America/Sao_Paulo`
- Tabela tecnica de `/epi` responsiva em mobile
- Fallback sem JS para `.reveal` (conteudo visivel quando `html` permanece com `no-js`)
- Validacao de consentimento reforcada no formulario de lead (erro visivel quando checkbox nao marcado)
- Sistema de motion com Anime.js (`lib/motion/*`, `components/motion/Reveal`, `MotionCard`, `Button motion`)
- Kit de icones consolidado via `lucide-react` (`components/icons/Icon` + `icon-map`)
- Menu mobile animado por timeline curta (overlay)
- Redirect permanente nas rotas legadas `/retira` e `/retira-em-loja`
- Coerencia SEO: `/catalogo` removido do sitemap para alinhar com `noindex`
- Reparo de encoding no conteudo de categorias (`lib/catalog/categories.ts`)
- Evento global de navegacao `route_view` e contrato inicial de eventos de funil (lead/chat)
- Logs estruturados no endpoint `/api/lead` para falhas de webhook e operacao
- Monitor minimo de funil com APIs (`/api/funnel/event`, `/api/funnel/summary`) e painel interno (`/painel-funil`)
- Experimento A/B no hero da home (variantes `control` x `intent`) com evento de exposicao
- Pipeline GA-first: `page_view` manual para App Router + prioridade GTM quando configurado
