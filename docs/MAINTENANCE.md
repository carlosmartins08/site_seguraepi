# Guia de Manutencao

Este documento orienta como atualizar conteudo, integracoes e configuracoes sem quebrar rotas ou o design system.

## Conteudo institucional
Paginas principais:
- `/como-comprar` -> `app/como-comprar/page.tsx`
- `/retirada-expressa` -> `app/retirada-expressa/ClientPage.tsx`
- `/politica-de-entrega-e-frete` -> `app/politica-de-entrega-e-frete/ClientPage.tsx`
- `/politica-de-trocas-e-devolucoes` -> `app/politica-de-trocas-e-devolucoes/page.tsx`
- `/politica-de-privacidade` -> `app/politica-de-privacidade/page.tsx`
- `/termos-de-uso` -> `app/termos-de-uso/page.tsx`
- `/sobre-segura-epi` -> `app/sobre-segura-epi/ClientPage.tsx`
- `/trabalhe-conosco` -> `app/trabalhe-conosco/ClientPage.tsx`

Recomendacao:
- Atualize textos mantendo layout.
- Ajuste `metadata` quando alterar titulo/descricao.

## Guias por categoria
Fonte de dados:
- `lib/catalog/categories.ts`

Onde ajustar:
- `CATEGORY_PAGES` (conteudo)
- `CATEGORY_ORDER` (ordem no hub)

Pagina:
- `/epi/[categoria]` -> `app/epi/[categoria]/page.tsx`
- Hub -> `app/epi/categorias/page.tsx`

## I18n (PT/EN/ES)
Arquivos principais:
- `lib/i18n/locales.ts`
- `lib/i18n/resources.ts` (labels nav/footer/status)
- `lib/i18n/home.ts` (conteudo da Home por idioma)

O toggle e local (localStorage `segura-epi-locale`).
Atualmente `SUPPORTED_LOCALES` esta restrito a `['pt']`. Expanda somente com traducao completa.

## Autoridade tecnica (E-E-A-T)
Dados base:
- `lib/content/authority.ts`

Use para:
- `AuthorityPanel`
- `LastUpdated` em paginas longas

Atualize `leadName`, `leadRole`, `credentials` e `updatedAt` quando houver responsavel tecnico real.

## SEO / GEO
Helpers:
- `lib/seo/schema.ts`
- `components/seo/JsonLd.tsx`
Metadata base:
- `lib/seo/site.ts` (title/description padrao)

Sempre que adicionar FAQ:
- Inclua `buildFaqJsonLd` na pagina
- Inclua `buildBreadcrumbJsonLd` com o caminho correto

## Chat e conversao
FAB global:
- `components/actions/FloatingChatButton.tsx`

Helpers:
- `lib/chat-context.ts` (sessionStorage `chat_context`)
- `lib/chat-prefill.ts` (sessionStorage `chat_prefill`)
- `lib/lead.ts` (sessionStorage `lead_orcamento`)

Rotas:
- `/chat` (utilitario)
- `/obrigado` (pos-conversao, noindex)

## Contatos
Dados base:
- `lib/constants.ts` (`CONTACT_INFO`)

Helpers:
- `lib/contact.ts` (tel/mailto)

Use `phoneHref()` e `mailtoHref()` sempre que renderizar telefone/email.
`useBusinessStatus` usa `CONTACT_INFO.businessHours` e `CONTACT_INFO.supportTime`.

## LGPD e legal
Conteudo:
- `lib/legal.tsx`
- `components/layout/LegalModal.tsx`

Paginas:
- `/politica-de-privacidade`
- `/termos-de-uso`

Atualize o email do DPO em `lib/legal.tsx` e no modal, se necessario.

## Testes recomendados
- `npm run lint:routes`
- `npm run lint:design`
- `npm run build`
- Lighthouse (Home, Centro Tecnico, Como Comprar, Politica de Trocas)
