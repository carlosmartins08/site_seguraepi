# Visual and Flow QA Protocol

Protocolo obrigatorio de validacao manual antes de abrir PR de frontend ou aprovar release.

## Regra de ouro
- Se nao existe evidencia (print, video curto ou nota objetiva), o item conta como nao testado.
- Se um item critico falhar, o PR nao avanca.

## 1) Coerencia visual (Design x Codigo)

### 1.1 Inspecao de layout (pixel parity)
- Compare tela implementada com referencia do Figma usando overlay (Pixel Perfect ou modo de inspecao do Figma).
- Aceite somente quando:
  - alinhamentos principais batem sem deslocamentos visiveis
  - hierarquia tipografica (tamanho/peso/espacamento) esta fiel
  - espacamentos macro da secao seguem o ritmo definido no design
- Evidencia minima: 1 print por breakpoint (320, 768, 1440).

### 1.2 Consistencia de tokens
- Nao pode haver hardcode visual (hex, px arbitrario, radius solto) em componentes de interface.
- Cores, fontes, espacamentos e bordas devem vir de:
  - `design-system.md`
  - `src/styles/tokens.ts`
  - `tailwind.config.cjs`
- Validacao rapida sugerida:
  - buscar hex no JSX/TSX
  - buscar classes de tamanho tipografico cru fora do padrao do sistema

### 1.3 Estados de componentes interativos
- Testar em todos os elementos clicaveis/inputs:
  - default
  - hover
  - focus (teclado)
  - disabled
  - loading (quando aplicavel)
- Falha automatica se foco nao estiver claro visualmente.

## 2) Coerencia de navegacao e fluxo

### 2.1 Navegacao por teclado
- Percorra a pagina inteira usando `Tab` e `Shift+Tab`.
- Ordem deve seguir leitura logica (cima para baixo, esquerda para direita).
- Todo elemento focado deve ter destaque claro e consistente.

### 2.2 Persistencia de estado
- Em formularios, preencher campos e testar:
  - trocar de aba e voltar
  - usar botao Voltar do navegador
- O estado nao pode sumir sem aviso.
- Se houver reset intencional, isso deve estar explicitamente sinalizado para o usuario.

### 2.3 Tratamento de links
- Link externo abre em nova aba (`target="_blank"` + `rel="noopener noreferrer"`).
- Link interno navega sem recarregar pagina inteira (roteamento do app).

## 3) Prevencao de erro e feedback visual

### 3.1 Loading
- Acoes assincronas precisam mostrar feedback:
  - botao com estado de carregamento e bloqueio de clique duplo
  - tabela/lista com skeleton, spinner ou placeholder equivalente
- Falha automatica se usuario conseguir disparar envio duplo por falta de lock visual.

### 3.2 Erro amigavel
- Erro de API/processo deve aparecer em tela com linguagem clara.
- Mensagem precisa oferecer recuperacao:
  - exemplo: botao "Tentar novamente"
- Falha automatica se erro ficar apenas no console.

### 3.3 Validacao em tempo real
- Formularios devem validar no `blur` de campo (nao apenas no submit).
- Erro deve indicar exatamente o que corrigir.

## 4) Autoavaliacao rapida (gate pre-PR)

### 4.1 Responsividade
- Validar no minimo:
  - 320px (celular pequeno)
  - 768px (tablet)
  - 1440px (desktop grande)
- Nao pode haver quebra, sobreposicao ou CTA inacessivel.

### 4.2 Rede lenta
- Simular `Fast 3G` e `Slow 3G` no DevTools.
- Confirmar:
  - feedback de carregamento visivel
  - pagina utilizavel antes da carga total
  - sem travamento de interacoes criticas

## 5) Criterio de aprovacao
- Aprovado: 100% dos itens criticos ok e evidencias anexadas no PR.
- Reprovado: qualquer falha em foco, navegacao por teclado, persistencia de formulario ou feedback de erro/loading.
