
# SeguraEPI Intelligence Design System
**Versão:** 1.0 (Industrial Modern B2B)  
**Missão:** Transmitir autoridade técnica, conformidade normativa e agilidade logística através de uma interface imersiva e de alta performance.

---

## 1. Princípios de Design
- **Industrial Premium:** Estética que remete a robustez, porém com refinamento digital (Glassmorphism e Glows).
- **Decisão Técnica:** A interface deve priorizar dados técnicos (C.A., NRs, Aplicações) sobre apelo emocional genérico.
- **Hierarquia de Comando:** Uso de tipografia em "All Caps" e "Black" para títulos, evocando comando e segurança.
- **Micro-Interações Magnéticas:** Feedbacks visuais suaves (hover states, progress bars) que recompensam a exploração do usuário.

---

## 2. Paleta de Cores (The "Safety" Palette)
Configurada via Tailwind CSS no `index.html`.

| Nome | Valor Hex | Uso Principal |
| :--- | :--- | :--- |
| **Primary (Segura Orange)** | `#FF9B21` | Call to Actions, Alertas, Branding, Ícones técnicos. |
| **Dark (Slate 950)** | `#0F172A` | Backgrounds imersivos, Cabeçalhos de seção, Texto principal. |
| **Off-White (Slate 50)** | `#F8FAFC` | Backgrounds de suporte, diferenciação de seções. |
| **Success (Emerald)** | `#10B981` | Status de C.A. Ativo, Consultores Online. |
| **Danger (Red)** | `#EF4444` | Alertas críticos, Erros comuns de especificação. |
| **Gray (Slate 400)** | `#94A3B8` | Textos de apoio, Micro-cópias, Placeholder. |

---

## 3. Tipografia
O sistema utiliza uma abordagem de contraste entre a força industrial e a clareza técnica.

- **Display (Títulos):** `Poppins` (Weights: 700, 800, 900)
  - *Estilo:* Geralmente `uppercase`, com `tracking-tighter` para títulos hero e `tracking-widest` para sub-labels.
- **Sans (Corpo):** `Inter` (Weights: 300, 400, 500, 600)
  - *Estilo:* Foco em legibilidade máxima para descrições técnicas e FAQs.

---

## 4. Design Language & Componentes

### 4.1 Border Radius (The "Safe" Curves)
Utilizamos raios generosos para suavizar o ambiente industrial pesado.
- `rounded-xl`: Botões e inputs.
- `rounded-2xl`: Cards de parceiros e pequenos blocos.
- `rounded-3xl`: Modais e Cards de decisão.
- `rounded-4xl`: Seções imersivas e blocos de CTA (4rem).

### 4.2 Sombras e Efeitos
- `shadow-segura-soft`: `0 4px 20px -2px rgba(0, 0, 0, 0.05)` (Discreto para luz do dia).
- `shadow-segura-hover`: `0 30px 60px -15px rgba(0, 0, 0, 0.1)` (Profundidade em interação).
- `shadow-segura-glow`: `0 0 15px rgba(255, 155, 33, 0.3)` (Utilizado em elementos ativos).
- **Glassmorphism:** `backdrop-blur-xl` + `bg-white/80` (Navbar e Modais).

---

## 5. Movimento e Animações
Documentadas em `styles/segura-ui.css`.

- **Slide-Up:** Utilizado para entrada de conteúdo textual (0.4s).
- **Pop:** Utilizado para cards e elementos de destaque (0.3s).
- **Technical Ticker:** Barra de rolagem contínua para notícias e alertas de NRs.
- **Marquee:** Fluxo contínuo de parceiros homologados, simbolizando uma rede viva.
- **Scroll Progress:** Barra de 2px no topo da `Navbar` para indicar profundidade de leitura.

---

## 6. Layout e Grid
- **Container:** Máximo de `1280px` (`7xl`) com padding responsivo.
- **Seções:** Espaçamento vertical de `py-20` (mobile) a `py-32` (desktop) para criar "respiro" entre tópicos densos.
- **Variant Immersive:** Seções escuras com topo arredondado (`rounded-t-4xl`) para quebrar a linearidade da página.

---

## 7. Checklist de Conformidade (Para Novos Componentes)
1. O componente utiliza as cores da paleta `segura`?
2. A tipografia de título está em `uppercase` com `font-display`?
3. O hover inclui uma transição suave e talvez um leve `-translate-y-1`?
4. Se for um link de contexto, ele possui o ícone de seta magnética?
5. A acessibilidade (ARIA) foi considerada?
6. O componente respeita a margem de segurança do `Container`?

---
*Este documento é um organismo vivo. Atualizações devem ser validadas pelo Lead Frontend.*
