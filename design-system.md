# SeguraEPI Intelligence Design System
**Versão:** 2.0 (Industrial Premium B2B + Technical Authority)  
**Missão:** Interface de alta confiança para compra técnica de EPI: conformidade (C.A./NR), previsibilidade (logística/estoque) e conversão sem fricção.

### Governança de tokens (fonte de verdade)
- Intenção e regras vivem aqui (`design-system.md`).
- Valores vivem em `src/styles/tokens.ts`.
- Exposição como classes Tailwind vive em `tailwind.config.ts`.
- Proibido hex/valores novos direto em componentes; alterar token = atualizar os três artefatos juntos.

---

## 0) Princípios (refinados)
1. **Autoridade sem barulho**: forte, mas controlado. Zero excesso de glow/uppercase.  
2. **Decisão guiada por evidência**: dados e status sempre visíveis e padronizados.  
3. **Semântica > cor**: cor é consequência. Tokens semânticos evitam improviso.  
4. **Estados completos**: hover/focus/loading/error são parte do componente, não “extra”.  
5. **Motion como feedback**: animação só quando melhora leitura ou reduz dúvida.  
6. **Acessibilidade é requisito**: foco, contraste, reduced-motion, aria.

---

# 1) TOKENS

## 1.1 Cores — Base (brand + neutrals + status)
**Brand**  
- `brand.500` = `#FF9B21` (Segura Orange)  
- `brand.600` = `#F38A00` (hover/pressed mais “técnico”)

**Neutrals (Slate)**  
- `neutral.950` = `#0F172A`  
- `neutral.900` = `#111827`  
- `neutral.800` = `#1F2937`  
- `neutral.700` = `#334155`  
- `neutral.500` = `#64748B`  
- `neutral.400` = `#94A3B8`  
- `neutral.200` = `#E2E8F0`  
- `neutral.100` = `#F1F5F9`  
- `neutral.50`  = `#F8FAFC`

**Status**  
- `status.success` = `#10B981`  
- `status.warning` = `#F59E0B`  
- `status.danger`  = `#EF4444`  
- `status.info`    = `#3B82F6`

> `warning` e `info` entram porque B2B técnico precisa de “atenção” e “informação” padronizadas (não só verde/vermelho).

## 1.2 Cores — Semânticas
**Backgrounds**  
- `bg.canvas` = `neutral.50`  
- `bg.surface` = `#FFFFFF`  
- `bg.surfaceMuted` = `neutral.100`  
- `bg.inverse` = `neutral.950`  
- `bg.overlay` = `rgba(15, 23, 42, 0.6)` (modal/overlay)

**Text**  
- `text.primary` = `neutral.950`  
- `text.secondary` = `neutral.700`  
- `text.muted` = `neutral.500`  
- `text.inverse` = `#FFFFFF`  
- `text.onBrand` = `neutral.950` (em fundo brand)

**Borders**  
- `border.default` = `neutral.200`  
- `border.muted` = `neutral.100`  
- `border.strong` = `neutral.400`  
- `border.inverse` = `rgba(248, 250, 252, 0.14)`

**Actions**  
- `action.primary` = `brand.500`  
- `action.primaryHover` = `brand.600`  
- `action.primaryPressed` = `#E07A00`  
- `action.secondary` = `neutral.950`  
- `action.secondaryHover` = `neutral.900`  
- `action.ghostHover` = `neutral.100`

**Links**  
- `link.default` = `neutral.950`  
- `link.hover` = `brand.600`  
- `link.inverse` = `neutral.50`

**Focus Ring**  
- `focus.ring` = `rgba(255, 155, 33, 0.45)` (sempre igual no sistema)

**Compliance / Technical**  
- `tech.compliance` = `status.success`  
- `tech.risk` = `status.danger`  
- `tech.attention` = `status.warning`  
- `tech.reference` = `status.info`

## 1.3 Espaçamento (Spacing Scale)
Base 4px  
- `space.0 = 0`  
- `space.1 = 4`  
- `space.2 = 8`  
- `space.3 = 12`  
- `space.4 = 16`  
- `space.5 = 20`  
- `space.6 = 24`  
- `space.8 = 32`  
- `space.10 = 40`  
- `space.12 = 48`  
- `space.16 = 64`  
- `space.20 = 80`  
- `space.24 = 96`

## 1.4 Radius (industrial premium, controlado)
- `radius.sm = 10px` (inputs pequenos, chips)  
- `radius.md = 14px` (buttons, cards simples)  
- `radius.lg = 18px` (cards de decisão)  
- `radius.xl = 24px` (modais/blocks premium)  
- `radius.2xl = 32px` (CTA blocks / seções imersivas)  
> 4rem vira exceção rara; não é padrão.

---

# 2) TIPOGRAFIA

## 2.1 Fontes
- **Display/Heading:** `Poppins` (700/800/900)  
- **Body/UI:** `Inter` (400/500/600)

## 2.2 Escala tipográfica (desktop; mobile reduz 10–18%)
**Display**  
- `type.displayXL` = 56 / line 1.05 / tracking -0.02 / weight 900  
- `type.displayLG` = 44 / line 1.08 / tracking -0.015 / weight 800

**Titles**  
- `type.titleXL` = 32 / line 1.2 / tracking -0.01 / weight 800  
- `type.titleLG` = 24 / line 1.25 / tracking -0.005 / weight 800  
- `type.titleMD` = 20 / line 1.3 / tracking 0 / weight 700

**Body**  
- `type.bodyLG` = 18 / line 1.6 / weight 500  
- `type.bodyMD` = 16 / line 1.6 / weight 400  
- `type.bodySM` = 14 / line 1.55 / weight 400

**Labels**  
- `type.labelMD` = 12 / line 1.2 / tracking 0.10 / weight 600 (caps permitido)  
- `type.labelSM` = 11 / line 1.2 / tracking 0.12 / weight 600 (caps)

## 2.3 Regras de uppercase (anti-“gritaria”)
- **Permitido**: `label*`, `NRChip`, microheadings curtos (até 5–7 palavras).  
- **Evitar**: títulos longos, parágrafos, CTAs com mais de 2–3 palavras.  
- **CTA ideal**: verbo + objeto (“Solicitar orçamento”, “Validar especificação”).

---

# 3) ELEVATION (Depth System)

## 3.1 Níveis
- `elevation.0`: sem sombra  
- `elevation.1`: leitura de surface (leve)  
- `elevation.2`: interactive (sombra + borda nítida)  
- `elevation.3`: decision/cta (sombra mais profunda + glow sutil, quando aplicável)

## 3.2 Shadows (padrões)
- `shadow.1`: `0 6px 18px -12px rgba(15,23,42,0.25)`  
- `shadow.2`: `0 18px 40px -20px rgba(15,23,42,0.35)`  
- `shadow.3`: `0 30px 70px -30px rgba(15,23,42,0.45)`

## 3.3 Glow (regra dura)
- `glow.brand`: `0 0 0 1px rgba(255,155,33,0.25), 0 0 22px rgba(255,155,33,0.22)`  
  **Somente em:** CTA primário, item ativo/selecionado, foco em inputs (sutil). Nunca em cards comuns.

---

# 4) MOTION (Motion System)

## 4.1 Durations
- `motion.fast` = 140ms  
- `motion.base` = 220ms  
- `motion.slow` = 360ms

## 4.2 Easing
- `ease.standard` = `cubic-bezier(0.2, 0.0, 0, 1)`  
- `ease.emphasized` = `cubic-bezier(0.2, 0, 0, 1)`

## 4.3 Transições padrão (por intenção)
- **Hover:** elevar 1 nível (1→2), `translateY(-2px)` máx, borda ligeiramente mais forte.  
- **Entrada de seção:** opacity 0→1, translateY 14px→0, duração `motion.slow`, delay escalonado (0/60/120/180ms).  
- **Accordion (FAQ):** height + opacity, duração `motion.base`.  
- **Loading:** skeleton shimmer discreto (ou pulse leve); opcional barra 2px no topo.

## 4.4 Reduced motion (obrigatório)
- Se `prefers-reduced-motion`, desativar ticker/marquee e entradas; manter só feedback básico (fade curto).

---

# 5) COMPONENTES (Kit v2.0)

## 5.1 Core
1. **Button** — variants: primary, secondary, ghost, link; states: default/hover/pressed/focus/disabled/loading; sizes: sm/md/lg.  
2. **Input / Select / Textarea** — states: default/focus/error/disabled/loading; helper e error text; mask WhatsApp.  
3. **Card** — variants: surface, interactive, decision, inverse; slots header/body/footer.  
4. **Badge** — variants: neutral, success, warning, danger, info, brand.  
5. **Accordion** — FAQ com animação e acessibilidade.

## 5.2 Technical B2B (autoridade)
1. **NRChip** — props: `nr`, `tone` (neutral/info), tooltip opcional.  
2. **CAStatusBadge** — props: `status` (active/attention/risk), `checkedAt` opcional (“checado hoje”).  
3. **EvidenceRow** — ícone + texto curto + badge (ex: “C.A. validado em base oficial”).  
4. **SpecCard (Setor)** — título + descrição; NRChips; CTA secundário.  
5. **ProcessTimeline** — 5 steps; desktop horizontal / mobile vertical; estado active/inactive.  
6. **MiniCaseCard** — Contexto → Ação → Resultado; métricas rápidas.  
7. **Metric** — número grande + label + unidade opcional (%, dias, empresas).  
8. **LeadFormCard** — bloco de orçamento com validação e mensagem de triagem técnica.  
9. **ContactBar** — WhatsApp/telefone fixo, não intrusivo (principalmente mobile).

---

# 6) Layout Patterns
1. **Hero Split 7/5** — texto+CTAs+evidências à esquerda; visual técnico à direita.  
2. **Narrative Centered** — blocos densos (dor/solução) com largura máx 720px.  
3. **Grid Cards** — setores (3 col), categorias (4 col).  
4. **Inverse Authority Block** — Centro Técnico em `bg.inverse` com CTA destacado.  
5. **Conversion Block** — form em card `decision` com borda forte + foco claro.

---

# 7) Acessibilidade (mínimos)
- Focus ring sempre visível em teclado (`focus.ring`).  
- Contraste mínimo AA (especialmente em dark).  
- Labels/placeholders não podem ser cinza claro demais.  
- Accordion com aria + navegação por teclado.  
- Reduced motion suportado.

---

# 8) Diretrizes de alto nível
- Uppercase é recurso, não padrão.  
- Glow só em ação/seleção.  
- Glass só em navbar e modal.  
- Texto longo sempre em largura controlada (680–760px).  
- Componentes sempre com estados completos (inclui loading).

---

## Nota de Logo (opcional, para governança rápida)
- Use o componente `<SeguraLogo />` com variantes light/dark/mono e ícone-only; tokens de tamanho/padding seguem LOGO_SIZES/LOGO_PADDING definidos no código.  
- Preferir palavra-chave brand.500/600 para manter consistência com o acento Segura Orange.

---
*Este documento é a fonte de verdade. Atualizações devem ser validadas pelo Lead Frontend.*
