# Release Checklist (Pronto para Escalar)

Use este checklist antes de qualquer deploy em producao.

## 1) Qualidade de codigo
- [ ] `npm ci`
- [ ] `npm run quality`
- [ ] `npm run build`
- [ ] `npm run test:api`
- [ ] `npm run test:smoke`

## 2) Configuracao e seguranca
- [ ] Variaveis de ambiente revisadas (`NEXT_PUBLIC_WBOT_TOKEN`, `LEAD_WEBHOOK_URL`, analytics)
- [ ] Headers de seguranca ativos em `next.config.js`
- [ ] Rotas utilitarias com noindex (`/chat`, `/obrigado`)

## 3) Produto e UX
- [ ] Home: CTA principal e secundario funcionando
- [ ] Lead form: validacao, consentimento e redirecionamento funcionando
- [ ] Chat: abertura, fallback e rastreio funcionando
- [ ] Footer/Navbar: links criticos validados
- [ ] Protocolo visual e fluxo executado (`docs/VISUAL_FLOW_QA_PROTOCOL.md`) com evidencia no PR

## 4) SEO e descoberta
- [ ] `sitemap.xml` e `robots.txt` consistentes
- [ ] Metadata basica por pagina critica revisada
- [ ] JSON-LD essencial valido (Organization, LocalBusiness, WebSite)

## 5) Operacao
- [ ] CI verde no PR
- [ ] Branch protection ativa exigindo workflow `CI`
- [ ] Plano de rollback definido no PR
- [ ] Dono da release identificado

## 6) Pos-deploy (15-30 min)
- [ ] Navegacao das rotas criticas em producao
- [ ] Eventos de funil chegando (`/api/funnel/event` e summary)
- [ ] Leads sem erro de webhook (`queued_for_retry` sob controle)
- [ ] Sem erro critico no console/server logs
- [ ] Runbook de alertas revisado (`docs/ALERTS_RUNBOOK.md`)
