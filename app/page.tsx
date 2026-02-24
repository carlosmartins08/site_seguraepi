
import React from 'react';
import Image from 'next/image';
import { Navbar } from '../components/layout/Navbar';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { SectionTitle } from '../components/typography/SectionTitle';
import { Button } from '../components/actions/Button';
import { ContextLink } from '../components/actions/ContextLink';
import { DecisionCard } from '../components/cards/DecisionCard';
import { MethodStep } from '../components/method/MethodStep';
import { PartnerBlock } from '../components/trust/PartnerBlock';
import { AlertList } from '../components/trust/AlertList';
import { AssistedCTA } from '../components/conversion/AssistedCTA';
import { GMBReviews } from '../components/trust/GMBReviews';
import { PartnerShowcase } from '../components/trust/PartnerShowcase';
import { CONTACT_INFO } from '../lib/constants';
import { LegalLayer } from '../components/home/LegalLayer';
import { ScrollReveal } from '../components/home/ScrollReveal';
import { WbotInitializer } from '../components/home/WbotInitializer';
import { CaSearch } from '../components/home/CaSearch';
import { FaqList, FaqItem } from '../components/home/FaqList';

export const metadata = {
  title: 'Segura EPI | EPI com orientação técnica e compra segura',
  description:
    'Fornecedor B2B de EPI com consultoria técnica, validação de C.A., estoque auditado e retirada expressa. Atendemos empresas com logística confiável e suporte especializado.',
  alternates: {
    canonical: 'https://seguraepi.com.br/',
  },
  openGraph: {
    title: 'Segura EPI | Autoridade técnica em EPI para empresas',
    description:
      'Comércio, consultoria e treinamento em EPI. Validação de C.A., crédito B2B, retirada expressa e parceiros líderes como 3M, MSA e Ansell.',
    url: 'https://seguraepi.com.br/',
    siteName: 'Segura EPI',
    type: 'website',
  },
};

/**
 * HOME OFICIAL - SEGURA EPI
 */
export default function HomePage() {
  const partnerPlaceholders = [
    'Fabricante A', 'Fabricante B', 'Fabricante C', 'Fabricante D',
    'Fabricante E', 'Fabricante F', 'Fabricante G', 'Fabricante H'
  ];

  const faqItems: FaqItem[] = [
    {
      q: "Como funciona o faturamento B2B?",
      a: "Analisamos crédito de forma ágil e transparente. Após aprovação, liberamos boleto faturado em até 24h com limites alinhados ao seu volume e cronograma."
    },
    {
      q: "Qual o prazo de retirada?",
      a: "Pedidos confirmados até 12h ficam prontos às 14h. Após esse horário, a retirada é às 9h do dia seguinte, sempre com checklist de conferência."
    },
    {
      q: "Os produtos possuem C.A.?",
      a: "100% do mix tem C.A. ativo e validado. Antes de cada venda conferimos vigência e aplicabilidade para o seu cenário."
    },
    {
      q: "Vocês entregam em todo o Brasil?",
      a: "Sim. Frota própria na Grande João Pessoa e rede de transportadoras auditadas para todo o país, com rastreio e prazos combinados."
    }
  ];

  const partners = [
    { name: '3M', categoryHint: 'Respiratória ⬢ �ptica', logoSrc: '/brands/3m.svg', href: 'https://www.3m.com.br' },
    { name: 'Bracol', categoryHint: 'Calçados ⬢ Botinas', logoSrc: '/brands/bracol.svg', href: 'https://www.bracol.com.br' },
    { name: 'Marluvas', categoryHint: 'Calçados ⬢ Conforto', logoSrc: '/brands/marluvas.svg', href: 'https://www.marluvas.com.br' },
    { name: 'Danny', categoryHint: 'Mãos ⬢ Proteção Mecânica', logoSrc: '/brands/danny.svg', href: 'https://www.danny.com.br' },
    { name: 'MSA', categoryHint: 'Cabeça ⬢ Respiratória', logoSrc: '/brands/msa.svg', href: 'https://br.msasafety.com' },
    { name: 'Ansell', categoryHint: 'Luvas ⬢ Química', logoSrc: '/brands/ansell.svg', href: 'https://www.ansell.com' },
  ];

  return (
    <main className="relative" id="main-content">
      <Navbar variant="dark" />
      <ScrollReveal />
      <WbotInitializer />

      {/* Hero */}
      <Section id="hero" variant="dark" className="pt-28 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-bg-inverse to-slate-900 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_35%)]" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="relative animate-slide-up">
                <div className="absolute -left-6 -top-6 w-32 h-32 bg-action-primary/15 blur-3xl rounded-full pointer-events-none" />
                <span className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block">
                  Ecossistema Segura EPI · Comércio ⬢ Consultoria ⬢ Treinamento
                </span>
                <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.05] mb-6 uppercase tracking-tight text-white">
                  Segurança que une <br />
                  tecnologia e humanidade <br />
                  para sua operação.
                </h1>
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
                  Protegemos vidas com consciência, conhecimento e respeito. Orientamos, validamos o C.A. e entregamos rápido para que cada pessoa volte para casa em segurança.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 animate-slide-up delay-100">
                <Button
                  href="/catalogo?origem=home-hero"
                  variant="primary"
                  className="px-10 py-5 shadow-glow-brand"
                  trackEvent="cta_hero_catalogo"
                >
                  Acessar Catálogo Digital
                </Button>
                <Button
                  href={CONTACT_INFO.whatsapp}
                  variant="outline"
                  className="text-white border-white/20 hover:border-action-primary hover:text-action-primaryHover hover:ring-2 hover:ring-action-primary/40 px-10 py-5 bg-white/5 backdrop-blur-sm"
                  trackEvent="cta_hero_consultoria"
                >
                  Consultoria Técnica
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 animate-slide-up delay-200">
                {[
                  { label: 'Estoque auditado (+15k itens)', icon: 'boxes' },
                  { label: 'Retirada expressa em 3h', icon: 'clock' },
                  { label: 'C.A. validado e ativo', icon: 'shield' },
                  { label: 'Crédito B2B em 24h', icon: 'invoice' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-action-primary">
                      {item.icon === 'boxes' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 5l9 5 9-5m-9 5v5" /></svg>
                      )}
                      {item.icon === 'clock' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      )}
                      {item.icon === 'shield' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      )}
                      {item.icon === 'invoice' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h3m-7 6h16M5 21V5a2 2 0 012-2h8l4 4v14" /></svg>
                      )}
                    </div>
                    <span className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-slate-200 leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 animate-pop delay-150">
              <div className="relative h-full min-h-[360px] rounded-4xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl">
                <Image
                  src="https://images.unsplash.com/photo-1564326060809-8d6f2d8195ff?auto=format&fit=crop&w=1200&q=75"
                  alt="Equipe usando EPI em operação"
                  fill
                  priority
                  sizes="(min-width:1024px) 480px, 100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTMxNTE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-bg-inverse/80 via-bg-inverse/60 to-transparent" />
                <div className="relative z-10 p-10 flex flex-col gap-6 h-full justify-end">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-action-primary rounded-full animate-pulse" />
                    <p className="text-white font-display font-bold uppercase tracking-[0.25em] text-xs">Radar de Conformidade</p>
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    Consultoria técnica, estoque pronto e logística que honra seu cronograma. Validamos o risco, confirmamos o C.A. e colocamos o EPI certo na mão da sua equipe.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 rounded-full border border-white/15 text-white/80 text-[11px] uppercase tracking-[0.2em]">NR-06</span>
                    <span className="px-4 py-2 rounded-full border border-white/15 text-white/80 text-[11px] uppercase tracking-[0.2em]">CA Ativo</span>
                    <span className="px-4 py-2 rounded-full border border-white/15 text-white/80 text-[11px] uppercase tracking-[0.2em]">Consultoria SST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Prova Social & Marcas Parceiras */}
      <PartnerShowcase
        id="prova-social"
        partners={partners}
        title="Marcas que respeitam a vida."
        subtitle="Selecionamos fabricantes com C.A. ativo, rastreabilidade e compromisso ético. Cada parceria reflete nossa promessa: proteger pessoas com excelência."
        kpiText="42 parceiros auditados ⬢ 100% CA válido"
        ctaHref="/catalogo?filtro=marca"
        ctaLabel="Ver todas as marcas"
      />

      {/* Potência Logística */}
      <Section id="logistica" variant="dark" className="reveal">
        <Container>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_10%,transparent_10%),linear-gradient(45deg,rgba(255,255,255,0.05)_10%,transparent_10%)] bg-[length:14px_14px]" />
            <div className="relative z-10 p-8 md:p-12 space-y-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-3xl space-y-3">
                  <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Potência Logística</p>
                  <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">Fluxo rápido, visível e sem improviso.</h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Montamos o caminho do EPI com etapas claras: do pedido à entrega ou retirada, com SLA combinado, rastreio e conferência técnica.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/chat?intent=frete" variant="primary" className="px-6 py-4 shadow-glow-brand">
                    Validar prazo agora
                  </Button>
                  <Button href="/retira-em-loja" variant="outline" className="px-6 py-4 text-white border-white/30 hover:border-action-primary hover:text-action-primaryHover">
                    Ver pontos de retirada
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-inner">
                <div className="animate-marquee gap-6 items-center text-white/80 text-xs uppercase tracking-[0.25em]">
                  <span className="px-3 py-2 rounded-full bg-white/10 border border-white/15">Corte 12h �  Retirada 14h</span>
                  <span className="px-3 py-2 rounded-full bg-white/10 border border-white/15">Pedidos pós 12h �  Retirada 9h</span>
                  <span className="px-3 py-2 rounded-full bg-white/10 border border-white/15">Frota própria · checklist + lacre</span>
                  <span className="px-3 py-2 rounded-full bg-white/10 border border-white/15">Rastreio transportadora auditada</span>
                  <span className="px-3 py-2 rounded-full bg-white/10 border border-white/15">Frete grátis GJP acima de R$500</span>
                </div>
              </div>

              <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-6 md:p-8 shadow-elevation-1">
                <div className="relative pb-8">
                  <div className="hidden md:block absolute left-3 right-3 top-6 h-[2px] bg-gradient-to-r from-action-primary/60 via-white/30 to-action-primary/40" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                    {[
                      { title: 'Pedido', desc: 'Recebido no chat ou portal, com conferência de C.A.', eta: '0h', icon: 'cart' },
                      { title: 'Separação', desc: 'Estoque auditado e checklist de pares/tamanhos.', eta: '+1h', icon: 'boxes' },
                      { title: 'Conferência', desc: 'Validação técnica + lacre e etiqueta de SLA.', eta: '+2h', icon: 'shield' },
                      { title: 'Entrega/Retirada', desc: 'Retirada 3h ou envio com rastreio ativo.', eta: '+3h', icon: 'truck' },
                    ].map((step, index) => (
                      <div key={step.title} className="relative z-10 flex flex-col gap-2 text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-action-primary/20 border border-action-primary/50 flex items-center justify-center text-action-primary">
                            {step.icon === 'cart' && (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l1-5H6.4M7 13l-1.35 6.74A1 1 0 006.64 21h10.72a1 1 0 00.99-.84L19 13M7 13h12M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" /></svg>)}
                            {step.icon === 'boxes' && (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z" /></svg>)}
                            {step.icon === 'shield' && (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>)}
                            {step.icon === 'truck' && (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l1 3h11l1-3h2m-2-5h2l2 5v6a1 1 0 01-1 1h-3m-4 0H9m-4 0H4a1 1 0 01-1-1v-6l2-5h2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 5l-4-2-4 2m8 0l-4 2-4-2m8 0v6m-8-6v6" /></svg>)}
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-white/70">T{step.eta}</p>
                            <p className="text-sm md:text-base font-display font-bold">{step.title}</p>
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                        {index < 3 && <div className="md:hidden h-[1px] bg-white/10 my-2" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conteúdo reduzido a linha do tempo e SLAs para foco e clareza */}
            </div>
          </div>
        </Container>
      </Section>

      {/* Objeções (reposicionada após Logística) */}
      <Section id="objecoes" variant="offwhite" className="reveal pt-16 pb-16 lg:pt-20 lg:pb-20">
        <Container>
          <SectionTitle subtitle="Evite erros" title="Erros comuns que comprometem gente e resultado" />

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mt-6">
            <Button href={CONTACT_INFO.whatsapp} variant="primary" className="w-full sm:w-auto px-6 py-4 shadow-glow-brand">
              Falar agora com consultor técnico
            </Button>
            <Button href="/catalogo?origem=home-objecoes" variant="outline" className="w-full sm:w-auto px-6 py-4">
              Ver soluções imediatas
            </Button>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <AlertList items={[
                "Escolher pelo preço e não pelo risco real.",
                "Ignorar rotina, conforto e adesão da equipe.",
                "Comprar sem padronizar tamanhos, reposição e treinamento.",
                "Não validar C.A. ou alternativas técnicas equivalentes."
              ]} />
            </div>
            <div className="lg:col-span-5 animate-pop">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-elevation-1 space-y-6">
                <h3 className="text-xl font-display font-bold text-text-primary uppercase">Como cuidamos disso</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-sm text-slate-500 font-sans">
                    <svg className="w-5 h-5 text-action-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg>
                    Orientação por risco, aplicação e nível de exposição.
                  </li>
                  <li className="flex items-start gap-4 text-sm text-slate-500 font-sans">
                    <svg className="w-5 h-5 text-action-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg>
                    Padronização B2B com reposição programada e treinamento.
                  </li>
                  <li className="flex items-start gap-4 text-sm text-slate-500 font-sans">
                    <svg className="w-5 h-5 text-action-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg>
                    Validação de C.A. e alternativas técnicas seguras.
                  </li>
                </ul>
                <Button href={CONTACT_INFO.whatsapp} variant="primary" className="w-full">Quero validar antes de comprar</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Hub de Inteligência e Atalhos */}
      <Section id="hub-inteligencia" variant="offwhite" className="pt-14 pb-16 md:pt-20 md:pb-20">
        <Container>
          <div className="bg-slate-900/80 backdrop-blur-md rounded-4xl border border-white/10 shadow-elevation-1 hover:shadow-glow-brand transition-shadow duration-500 p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Central de Ações Técnicas</p>
                <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-tight">O que precisa ser protegido agora?</h2>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-3xl p-4 md:p-6 border border-white/10 shadow-inner shadow-black/20 mb-8">
              <CaSearch />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <DecisionCard
                eyebrow="Atalho 01"
                title="Soluções por NR"
                description="Consulte por norma (NR-10, NR-35, NR-18) com orientação humana para decidir rápido e com segurança."
                icon={<svg className="w-8 h-8 text-action-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                href="/catalogo?filtro=nr"
                actionText="Ver por NR"
                className="bg-slate-900/70 text-white border-white/10 hover:border-action-primary hover:shadow-glow-brand"
              />
              <DecisionCard
                eyebrow="Atalho 02"
                title="Cotação para Empresas"
                description="Cadastro B2B com crédito em 24h, padronização por função e acompanhamento do consultor."
                icon={<svg className="w-8 h-8 text-action-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-9 6h12M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg>}
                href="/chat?intent=cotacao-b2b"
                actionText="Abrir cotação"
                className="bg-slate-900/70 text-white border-white/10 hover:border-action-primary hover:shadow-glow-brand"
              />
              <DecisionCard
                eyebrow="Atalho 03"
                title="Retirada Expressa"
                description="Confirme status e local de retirada em 3h na unidade Cabedelo com checklist de conferência."
                icon={<svg className="w-8 h-8 text-action-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                href="/retira-em-loja"
                actionText="Ver retirada"
                className="bg-slate-900/70 text-white border-white/10 hover:border-action-primary hover:shadow-glow-brand"
              />
            </div>
          </div>
        </Container>
      </Section>


      {/* Metodologia */}
      <Section id="metodo" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle
            subtitle="Nosso método"
            title="EPI certo, validado pelo seu risco real"
            description="Planejamos junto com você: entendemos a rotina, avaliamos a exposição e indicamos soluções com respaldo técnico e humano."
          />
          <div className="grid lg:grid-cols-12 gap-16 mt-16 items-start">
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
              <MethodStep number="01" title="Mapeamos o contexto" description="Função, ambiente, jornada e rotina de uso para entender a exposição real." />
              <MethodStep number="02" title="Classificamos o risco" description="Aplicamos norma e experiência prática para definir o nível de proteção necessário." />
              <MethodStep number="03" title="Indicamos e educamos" description="Apontamos o EPI ideal, alternativas equivalentes e orientamos a adoção pela equipe." />
              <MethodStep number="04" title="Validamos e acompanhamos" description="Checamos C.A., ajuste e conforto antes da compra e monitoramos desempenho." />
            </div>

            <div className="lg:col-span-4 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-elevation-1 animate-pop">
                <h3 className="text-xl font-display font-bold text-text-primary mb-6 uppercase tracking-tight">Compra consciente, sem retrabalho</h3>
                <ul className="space-y-5">
                  <li className="flex items-center gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-action-primary rounded-full shrink-0" />
                    Seleção orientada pelo risco e pela rotina
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-action-primary rounded-full shrink-0" />
                    Alternativas equivalentes homologadas quando necessário
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-action-primary rounded-full shrink-0" />
                    Apoio consultivo para padronização e treinamento
                  </li>
                </ul>
                <div className="mt-10 pt-8 border-t border-slate-50 space-y-6">
                  <Button href={CONTACT_INFO.whatsapp} variant="primary" className="w-full text-xs py-4">Validar meu cenário no chat</Button>
                  <ContextLink href="/catalogo?origem=home-metodo" className="justify-center w-full">Ver catálogo por categoria</ContextLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Hub - GMB Reviews */}
      <GMBReviews />

      {/* Intenções */}
      <Section id="intencoes" variant="default" className="reveal">
        <Container>
          <SectionTitle
            subtitle="Comece por aqui"
            title="Qual proteção sua equipe precisa agora?"
            description="Escolha o caminho e seguimos juntos. Orientação técnica, humana e objetiva para cada etapa."
            alignment="center"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
              <DecisionCard
                eyebrow="Atendimento consultivo"
                title="Comprar EPI para minha equipe"
                description="Conte sua operação e funções. Indicamos o EPI certo, treinamos o time e padronizamos reposição."
                badges={["B2B", "Padronização"]}
              href="/chat?origem=home-intencoes&intent=equipe"
              actionText="Iniciar atendimento"
            />
              <DecisionCard
                eyebrow="Por risco e aplicação"
                title="Encontrar EPI por risco específico"
                description="Corte, ruído, poeira, química, altura e mais. Validação de C.A. e adequação às NRs."
                badges={["Risco", "Aplicação"]}
              href="/catalogo?origem=home-intencoes&filtro=risco"
              actionText="Ver por risco"
            />
              <DecisionCard
                eyebrow="Cotação objetiva"
                title="Já tenho itens definidos"
                description="Envie a lista. Validamos se está aderente, sugerimos equivalentes e mostramos o prazo real."
                badges={["Cotação", "Lista"]}
              href="/chat?origem=home-intencoes&intent=cotar-itens"
              actionText="Cotar agora"
            />
              <DecisionCard
                eyebrow="Compra recorrente"
                title="Padronizar e comprar recorrente"
                description="Organize categorias, tamanhos e frequência. Menos urgência, mais controle e segurança para o time."
                badges={["Recorrência", "Controle"]}
              href="/chat?origem=home-intencoes&intent=recorrencia"
              actionText="Falar sobre recorrência"
            />
          </div>
        </Container>
      </Section>

      {/* Categorias */}
      <Section id="categorias" variant="default" className="reveal">
        <Container>
          <SectionTitle
            subtitle="Mix de proteção"
            title="Categorias de EPI para sua operação"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <DecisionCard title="Proteção das mãos" description="Luvas por risco: corte, químico, abrasão e precisão. CA validado." href="/catalogo?categoria=maos" actionText="Ver catálogo" />
            <DecisionCard title="Proteção respiratória" description="Máscaras, filtros e respiradores com orientação de troca e selagem." href="/catalogo?categoria=respiratoria" actionText="Ver catálogo" />
            <DecisionCard title="Proteção auditiva" description="Abafadores e plugues para diferentes níveis de ruído e turnos longos." href="/catalogo?categoria=auditiva" actionText="Ver catálogo" />
            <DecisionCard title="Proteção facial" description="�culos e viseiras contra impacto, partículas e respingos químicos." href="/catalogo?categoria=ocular" actionText="Ver catálogo" />
            <DecisionCard title="Trabalho em altura" description="Cintos, talabartes e ancoragens certificados para NR-35." href="/catalogo?categoria=altura" actionText="Ver catálogo" />
            <DecisionCard title="Vestuário" description="Uniformes e proteção térmica/antiestática alinhados ao seu ambiente." href="/catalogo?categoria=vestuario" actionText="Ver catálogo" />
            <DecisionCard title="Calçados" description="Botas e sapatos com conforto, grip e isolamento conforme sua rotina." href="/catalogo?categoria=calcados" actionText="Ver catálogo" />
            <DecisionCard title="Sinalização" description="Itens de apoio e comunicação visual para ambientes seguros e conscientes." href="/catalogo?categoria=sinalizacao" actionText="Ver catálogo" />
          </div>
        </Container>
      </Section>

      {/* Segmentos */}
      <Section id="segmentos" variant="default" className="reveal">
        <Container>
          <SectionTitle
            subtitle="Segmentação por dor"
            title="Soluções integradas por nicho"
            description="Cada setor tem um risco e uma cultura. Adaptamos o kit, a norma e o treinamento para eliminar objeções e manter a equipe protegida."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Construção Civil & Infra */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-elevation-1 hover:shadow-glow-brand transition-all duration-500 hover:-translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=75"
                alt="Construção civil com equipe equipada"
                fill
                loading="lazy"
                sizes="(min-width:1024px) 33vw, 100vw"
                className="absolute inset-0 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'grayscale(30%)' }}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTMxNTE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative p-8 space-y-4 text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display font-bold uppercase tracking-[0.25em]">NR-18 ⬢ NR-35</span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Construção Civil & Infra</h3>
                <p className="text-slate-200 text-sm leading-relaxed">Obra segura e produtiva. Equipamentos testados para NR-18 e NR-35, antiqueda, botas de alta resistência e checklist de uso diário.</p>
                <p className="text-action-primary font-display text-xs uppercase tracking-[0.25em] flex items-center gap-2">Ver Soluções para Obra <span className="w-6 h-[2px] bg-action-primary block group-hover:w-10 transition-all"></span></p>
                <a href="/catalogo?setor=construcao" className="sr-only">Ir para catálogo de construção</a>
              </div>
            </div>

            {/* Setor Elétrico */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-elevation-1 hover:shadow-glow-brand transition-all duration-500 hover:-translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=75"
                alt="Setor elétrico em operação"
                fill
                loading="lazy"
                sizes="(min-width:1024px) 33vw, 100vw"
                className="absolute inset-0 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'grayscale(30%)' }}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTMxNTE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative p-8 space-y-4 text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display font-bold uppercase tracking-[0.25em]">NR-10 ⬢ 1000V</span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Setor Elétrico</h3>
                <p className="text-slate-200 text-sm leading-relaxed">Alta tensão pede rigor. Linha metal-free, isolamento térmico/elétrico e validação de CA para NR-10 sem espaço para improviso.</p>
                <p className="text-action-primary font-display text-xs uppercase tracking-[0.25em] flex items-center gap-2">Ver Linha Técnica <span className="w-6 h-[2px] bg-action-primary block group-hover:w-10 transition-all"></span></p>
                <a href="/catalogo?setor=eletrico" className="sr-only">Ver linha técnica elétrica</a>
              </div>
            </div>

            {/* Alimentícia & Hospitalar */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-elevation-1 hover:shadow-glow-brand transition-all duration-500 hover:-translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=75"
                alt="Ambiente hospitalar"
                fill
                loading="lazy"
                sizes="(min-width:1024px) 33vw, 100vw"
                className="absolute inset-0 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'grayscale(30%)' }}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTMxNTE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative p-8 space-y-4 text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display font-bold uppercase tracking-[0.25em]">C.A. Ativo</span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Alimentícia & Hospitalar</h3>
                <p className="text-slate-200 text-sm leading-relaxed">Higiene e aderência total. Solados Super Grip, materiais de fácil limpeza e protocolos para ambientes controlados sem contaminação.</p>
                <p className="text-action-primary font-display text-xs uppercase tracking-[0.25em] flex items-center gap-2">Ver Itens Higiene <span className="w-6 h-[2px] bg-action-primary block group-hover:w-10 transition-all"></span></p>
                <a href="/catalogo?setor=alimentar-hospitalar" className="sr-only">Ver itens para higiene</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Neo Evolution - removed as requested */}

      {/* Autoridade Humana - Mentoria Técnica */}
      <Section id="mentoria" variant="default" className="reveal">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center bg-slate-950 rounded-4xl border border-white/10 overflow-hidden">
            <div className="lg:col-span-5 relative h-full">
              <div className="h-full min-h-[320px] bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center grayscale-[15%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Autoridade Humana</p>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                Mais que vender EPIs, mentoramos sua segurança.
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur">
                <p className="text-slate-200 text-lg leading-relaxed">
                  Por trás de cada capacete existe uma história. Nossa equipe valida riscos, ensina o uso correto e caminha com você para que todos cheguem em casa em segurança.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    { title: 'Consultoria ativa', desc: 'Especificamos o C.A. certo para prevenir acidentes e autuações.' },
                    { title: 'Olhar humano', desc: 'Empatia e respeito pelo gestor e pela equipe em campo.' },
                    { title: 'Ecossistema completo', desc: 'Tecnologia (Neo Evolution) + conhecimento prático das NRs.' },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                      <p className="font-display font-bold uppercase tracking-[0.15em] text-sm mb-1 text-action-primary">{item.title}</p>
                      <p className="text-slate-200 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-action-primary italic text-sm font-sans">
                  �SConectamos tecnologia e humanidade para proteger o que mais importa: as pessoas.⬝
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/chat?intent=mentoria" variant="primary" className="px-8 py-4 shadow-glow-brand">
                  Falar com um Mentor Técnico
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>


      {/* FAQ */}
      <Section id="faq" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle subtitle="FAQ" title="Dúvidas Frequentes" />
          <FaqList items={faqItems} />
        </Container>
      </Section>

      {/* CTA Final */}
      <Section id="cta-final" variant="immersive" className="reveal">
        <Container>
          <AssistedCTA />
        </Container>
      </Section>

      <LegalLayer />
    </main>
  );
}

