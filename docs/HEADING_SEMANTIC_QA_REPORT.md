# Heading Semantic QA Report

Data: 2026-05-13  
Escopo: paginas core + secundarias alteradas na rodada de padronizacao visual.

## Resultado geral
- Status: aprovado
- Regra aplicada: 1 `h1` por pagina; secoes com `h2` (via `SectionTitle`) e blocos internos com `h3/h4`.
- Ajuste estrutural realizado: `SectionTitle` passou a aceitar `as="h1" | "h2"` para hero semantico.

## Evidencias por pagina (amostra principal)
- `/catalogo`: `SectionTitle as="h1"` em `app/catalogo/ClientPage.tsx`.
- `/como-comprar`: `SectionTitle as="h1"` em `app/como-comprar/page.tsx`.
- `/centro-tecnico`: `SectionTitle as="h1"` em `app/centro-tecnico/page.tsx`.
- `/politica-de-privacidade`: `SectionTitle as="h1"` em `app/politica-de-privacidade/page.tsx`.
- `/termos-de-uso`: `SectionTitle as="h1"` em `app/termos-de-uso/page.tsx`.
- `/epi`: `h1` explicito no hero e secoes posteriores com `SectionTitle` + `h3` internos.
- `/epi/[categoria]`: `h1` explicito no hero; blocos de destaque com `h2`; cards com `h3`.
- `/chat`: `h1` explicito no hero.
- `/not-found`: `h1` explicito no hero.
- `/obrigado`: `h1` no hero, `h2` no bloco de processo e `h3` nos subblocos.

## Decisoes implementadas
- Componente atualizado: `components/typography/SectionTitle.tsx`
  - Nova prop: `as?: "h1" | "h2"` (default `h2`).
  - Preserva visual; altera apenas semantica do heading quando necessario.

## Checklist de aprovacao
- [x] Uma hierarquia principal clara por pagina.
- [x] Hero principal com `h1` nas paginas que usavam `SectionTitle` no topo.
- [x] Subniveis consistentes (`h2`/`h3`) nos blocos internos.
- [x] Estrutura compativel com SEO tecnico (sem inflacao de `h1`).

## Observacao de validacao tecnica
- Build de producao segue bloqueado apenas por rede para fetch de fontes Google (`Inter` e `Poppins`) em `app/layout.tsx`.
- Nao ha erro semantico novo de heading relacionado a esta rodada.

