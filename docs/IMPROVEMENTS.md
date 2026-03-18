# Melhorias aplicadas (historico resumido)

Registro das principais evolucoes para manutencao e onboarding tecnico.

## Governanca de rotas
- `lib/routes.ts` centraliza rotas canonicas e legadas.
- `buildUrl()` padroniza query strings.
- `tools/lint-routes.ts` valida rotas internas (script `npm run lint:routes`).
- `/chat` criada como rota utilitaria e removida do sitemap.
- `/obrigado` criada para pos-conversao (noindex).

## Conteudo e paginas
- Home reestruturada com novo posicionamento B2B e CTAs.
- Paginas institucionais atualizadas: Como Comprar, Retirada Expressa, Politicas, Sobre, Trabalhe Conosco.
- Guias por categoria em `/epi/[categoria]` com novos slugs.
- Pagina 404 personalizada com busca e atalhos.

## Chat e conversao
- FAB global com status online/offline e pre-chat offline.
- Contexto e prefill via sessionStorage (`chat_context`, `chat_prefill`).
- Formulario de orcamento direciona para `/obrigado` e abre chat.

## I18n (PT/EN/ES)
- Toggle local (localStorage) com labels em navbar/footer/status.
- Conteudo da Home por idioma (`lib/i18n/home.ts`).
- Atualizacao dinamica de `document.documentElement.lang`.

## SEO/GEO
- JSON-LD centralizado em `lib/seo/schema.ts`.
- FAQPage e BreadcrumbList em paginas com FAQ.
- Organization/LocalBusiness/WebSite no layout.
- SearchAction com `/catalogo?busca=`.

## Acessibilidade e performance
- Contraste reforcado em secoes escuras.
- `aria-live` para status dinamicos.
- `cv-auto` (content-visibility) em secoes abaixo da dobra.
- `QuickSummary` + `LastUpdated` em paginas longas.

## LGPD e legal
- Politica de Privacidade e Termos com paginas publicas.
- Modal legal atualizado e linkado.
- Cookie consent alinhado com LGPD.
