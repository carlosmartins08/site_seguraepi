# Master Documentation - Segura EPI

Documento mestre para orientar qualquer pessoa (produto, engenharia, operacao) sobre como navegar e evoluir o projeto com seguranca.

## 1) Como usar esta documentacao
- Se voce e novo no projeto: leia na ordem `HANDOFF -> ARCHITECTURE -> DEVELOPER_GUIDE`.
- Se voce vai codar agora: use `DEVELOPER_GUIDE`.
- Se voce vai preparar release/operacao: use `OPERATIONS_MANUAL`.

## 2) Mapa oficial de documentos

### Core tecnico
- `docs/HANDOFF.md`: estado atual do projeto e passagem de bastao.
- `docs/ARCHITECTURE.md`: guardrails arquiteturais e contratos tecnicos.
- `docs/MAINTENANCE.md`: manutencao funcional do dia a dia.
- `CONTRIBUTING.md`: fluxo de contribuicao, commit e governanca de PR.

### Design e experiencia
- `docs/DESIGN_IMPLEMENTATION_CONTRACT.md`: contrato Figma -> Codigo.
- `docs/VISUAL_FLOW_QA_PROTOCOL.md`: QA visual e de fluxo antes de PR/release.
- `docs/LAYOUT_QUALITY_CHECKLIST.md`: checklist objetivo de qualidade visual.
- `docs/HEADING_SEMANTIC_QA_REPORT.md`: historico de validacao semantica.

### SEO, analytics e integracoes
- `docs/GA4_GTM_PLAYBOOK.md`: operacao de medicao e analytics.
- `docs/GTM_CONTAINER_BLUEPRINT.md`: blueprint de implementacao GTM.
- `docs/INTEGRATIONS_WBOT.md`: integracao e troubleshooting do chat.

### Operacao e release
- `docs/ALERTS_RUNBOOK.md`: alertas, resposta e reprocessamento.
- `docs/RELEASE_CHECKLIST.md`: gate obrigatorio pre e pos deploy.
- `docs/IMPROVEMENTS.md`: historico consolidado de melhorias.
- `docs/ROUTE_FLOW_CORRECTION_PLAN.md`: plano de correcao de fluxo/rotas.

## 3) Principios de governanca documental
- Um assunto deve ter uma fonte primaria clara (single source of truth).
- Documento operacional deve ter checklist executavel, nao texto abstrato.
- Mudanca tecnica relevante exige atualizacao de docs no mesmo PR.
- Evitar duplicidade: quando necessario, usar link para documento fonte.

## 4) Criterio de qualidade da documentacao
- Clareza: qualquer dev novo entende em menos de 30 minutos.
- Acionabilidade: cada secao indica comando, arquivo ou decisao objetiva.
- Rastreabilidade: onde e por que algo foi decidido deve estar documentado.
- Atualidade: documento sem revisao apos mudanca critica deve ser ajustado.

## 5) Revisao periodica recomendada
- Semanal: `RELEASE_CHECKLIST` e `ALERTS_RUNBOOK`.
- Quinzenal: `HANDOFF` e `IMPROVEMENTS`.
- Mensal: `ARCHITECTURE`, `DESIGN_IMPLEMENTATION_CONTRACT`, `CONTRIBUTING`.

