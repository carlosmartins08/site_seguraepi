# Contrato de Implementacao de UI (Design System First)

Este contrato define como transformar layout em codigo sem quebrar consistencia nem criar debito visual.

## Regras de implementacao
- Ler a tela como arvore de componentes existentes.
- Reusar componente homologado antes de criar qualquer variacao nova.
- Mapear variantes do Figma para props reais no codigo.
- Traduzir pixels, fontes e cores para tokens do projeto.
- Tratar qualquer valor fora da escala como excecao, nunca como padrao.

## Proibicoes
- Nao usar hex, rgba ou classes arbitrarias de cor em componentes de produto.
- Nao usar tipografia crua (`text-sm`, `text-lg`, `text-2xl`, etc.).
- Nao usar spacing/radius arbitrario (`p-[..]`, `rounded-[..]`).
- Nao introduzir novo token sem aprovacao de design + dev governance.

## Excecoes
Quando o layout exigir algo fora do sistema:
1. Abrir excecao no PR com contexto de negocio.
2. Explicar por que token/componente atual nao resolve.
3. Definir prazo para absorver no Design System ou remover excecao.

## Criterios de aceite UI
- Sem regressao de acessibilidade (teclado, foco, contraste, semantica).
- Responsivo validado em mobile e desktop.
- Estados de interacao cobertos (`hover`, `focus`, `active`, `disabled`, loading/erro/sucesso quando aplicavel).
- Evidencia de mapeamento Figma -> Codigo anexada no PR.

