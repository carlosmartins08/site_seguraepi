# Layout Quality Checklist (Core)

Checklist objetivo para validar paginas core antes de publicar.

## 1) Tokens e semantica
- Nenhum valor visual hardcoded em componentes/paginas core (cor, sombra, radius) sem justificativa.
- Preferir classes semanticas (`bg-*`, `text-*`, `border-*`, `shadow-*`) e utilitarios de sistema.
- Cards e blocos recorrentes usam padrao:
  - `ui-card` para cards de conteudo.
  - `ui-panel` para paineis de contexto/ponte.
  - `ui-cta` para blocos de chamada final.

## 2) Ritmo e hierarquia
- Secoes com espacamento consistente (`Section` como base, sem overrides arbitrarios).
- `SectionTitle` para titulos de secao (subtitle + title + description).
- CTA primario visualmente dominante; secundarios sem competir por destaque.

## 3) Responsividade
- Sem colisao de elementos em 360px, 390px, 768px e 1024px.
- Grids quebram com leitura clara e sem densidade excessiva.
- Blocos `ui-card`/`ui-panel` mantem padding legivel em mobile.

## 4) Acessibilidade
- Foco visivel em todos os elementos interativos.
- Contraste AA minimo para texto funcional e CTA.
- `prefers-reduced-motion` respeitado para animacoes de entrada e utilitarios.

## 5) SEO estrutural
- Um unico `h1` por pagina.
- Secoes principais com `h2` (via `SectionTitle`) e subtitulos internos com `h3`.
- Conteudo longo com paragrafos legiveis e largura controlada.

