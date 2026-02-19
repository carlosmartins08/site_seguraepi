
'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
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
import { CookieConsent } from '../components/trust/CookieConsent';
import { LegalModal } from '../components/layout/LegalModal';
import { FloatingChatButton } from '../components/actions/FloatingChatButton';
import { cn } from '../lib/cn';
import { CONTACT_INFO } from '../lib/constants';
import { LEGAL_TEXTS } from '../lib/legal';
import { useI18n } from '../hooks/useI18n';

/**
 * HOME OFICIAL - SEGURA EPI
 */
export default function HomePage() {
  const [legalModal, setLegalModal] = useState<{ open: boolean, type: 'privacy' | 'terms' }>({ open: false, type: 'privacy' });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { t } = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const partnerPlaceholders = [
    'Fabricante A', 'Fabricante B', 'Fabricante C', 'Fabricante D',
    'Fabricante E', 'Fabricante F', 'Fabricante G', 'Fabricante H'
  ];

  const faqItems = [
    {
      q: "Como funciona o faturamento B2B?",
      a: "Oferecemos condições personalizadas de faturamento via boleto para empresas após uma análise de crédito rápida. O processo é focado em desburocratizar a compra de suprimentos industriais."
    },
    {
      q: "Qual o prazo de retirada?",
      a: "Para pedidos locais em nossa unidade física, os itens podem ser retirados em até 2 horas após a confirmação financeira, garantindo agilidade para urgências operacionais."
    },
    {
      q: "Os produtos possuem C.A.?",
      a: "Sim, 100% do nosso mix de produtos possui Certificado de Aprovação (CA) ativo e válido junto ao Ministério do Trabalho, garantindo conformidade total com a NR-06."
    },
    {
      q: "Vocês entregam em todo o Brasil?",
      a: "Sim. Embora tenhamos uma unidade física estratégica para retirada rápida, possuímos logística otimizada e parcerias com transportadoras para atender empresas em todo o território nacional."
    }
  ];

  return (
    <main className="relative">
      <Navbar variant="dark" />
      <CookieConsent onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })} />
      <FloatingChatButton />

      <LegalModal
        isOpen={legalModal.open}
        onClose={() => setLegalModal({ ...legalModal, open: false })}
        title={LEGAL_TEXTS[legalModal.type].title}
        content={LEGAL_TEXTS[legalModal.type].content}
        updatedAt={LEGAL_TEXTS[legalModal.type].updatedAt}
      />

      {/* Hero */}
      <Section id="hero" variant="dark" className="pt-32 pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-segura-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-segura-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="animate-slide-up">
                <span className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block">
                  {t('hero.eyebrow', 'Fornecedor B2B de EPI')}
                </span>
                <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.1] mb-8 uppercase tracking-tighter">
                  {t('hero.headlinePrefix', 'EPI para empresas com')} <br />
                  <span className="text-segura-primary">{t('hero.headlineStrong', 'orientação técnica')}</span> <br />
                  {t('hero.headlineSuffix', 'e compra segura')}
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
                  {t(
                    'hero.paragraph',
                    'Escolha por risco, função e aplicação real. A Segura EPI conecta seu time às soluções certas — com apoio consultivo e parcerias de fabricantes líderes.'
                  )}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 animate-slide-up delay-100">
                <Button
                  href={CONTACT_INFO.whatsapp}
                  variant="primary"
                  className="px-10 py-5 hover:bg-white hover:text-segura-dark hover:shadow-[0_0_30px_rgba(255,155,33,0.5)] transition-all duration-500"
                >
                  {t('hero.primaryCta', 'Falar com consultor')}
                </Button>
                <Button
                  href="/catalogo?origem=home-hero"
                  variant="outline"
                  className="text-white border-white/20 hover:border-segura-primary hover:text-segura-primary hover:ring-2 hover:ring-segura-primary/50 px-10 py-5 bg-white/5 backdrop-blur-sm"
                >
                  {t('hero.secondaryCta', 'Ver catálogo')}
                </Button>
              </div>

              <div className="pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up delay-200">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-segura-primary group-hover:bg-segura-primary group-hover:text-segura-dark transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-slate-300">Orientação por risco e aplicação</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-segura-primary group-hover:bg-segura-primary group-hover:text-segura-dark transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-slate-300">Mix completo por categoria e setor</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-segura-primary group-hover:bg-segura-primary group-hover:text-segura-dark transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                  </div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-slate-300">Atendimento consultivo e rápido</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 animate-pop delay-300">
              <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-4xl backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-segura-primary opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-white font-display font-bold text-xl mb-8 uppercase tracking-tight">Atalhos por Intenção</h3>

                <div className="space-y-4">
                  <a href="/chat?origem=home-hero&intent=equipe" className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-segura-primary/50 transition-all group/chip">
                    <span className="text-slate-300 group-hover/chip:text-white font-sans font-medium">Preciso comprar para minha equipe</span>
                    <svg className="w-5 h-5 text-segura-primary opacity-0 group-hover/chip:opacity-100 transition-all -translate-x-2 group-hover/chip:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                  <a href="/catalogo?origem=home-hero&filtro=risco" className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-segura-primary/50 transition-all group/chip">
                    <span className="text-slate-300 group-hover/chip:text-white font-sans font-medium">Tenho um risco específico</span>
                    <svg className="w-5 h-5 text-segura-primary opacity-0 group-hover/chip:opacity-100 transition-all -translate-x-2 group-hover/chip:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                  <a href="/chat?origem=home-hero&intent=cotar-itens" className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-segura-primary/50 transition-all group/chip">
                    <span className="text-slate-300 group-hover/chip:text-white font-sans font-medium">Quero cotar itens definidos</span>
                    <svg className="w-5 h-5 text-segura-primary opacity-0 group-hover/chip:opacity-100 transition-all -translate-x-2 group-hover/chip:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metodologia */}
      <Section id="metodo" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle
            subtitle="Nosso método"
            title="Escolha de EPI com critério — por risco e aplicação"
            description="Você não precisa adivinhar. Nós orientamos a compra com base no seu cenário, função e ambiente, para reduzir erros e acelerar a decisão."
          />
          <div className="grid lg:grid-cols-12 gap-16 mt-16 items-start">
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
              <MethodStep number="01" title="Entendemos o cenário" description="Você informa função, ambiente e necessidade do time." />
              <MethodStep number="02" title="Avaliamos risco e aplicação" description="Validamos o risco real e o tipo de uso (contínuo ou eventual)." />
              <MethodStep number="03" title="Indicamos a solução" description="Recomendamos o EPI adequado e opções equivalentes quando fizer sentido." />
              <MethodStep number="04" title="Validamos antes da compra" description="Conferimos o encaixe do produto no seu cenário e fechamos com segurança." />
            </div>

            <div className="lg:col-span-4 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-segura-soft animate-pop">
                <h3 className="text-xl font-display font-bold text-segura-dark mb-6 uppercase tracking-tight">Evite retrabalho e compras erradas</h3>
                <ul className="space-y-5">
                  <li className="flex items-center gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0" />
                    Seleção orientada por uso real
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0" />
                    Alternativas equivalentes quando necessário
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans text-slate-500">
                    <div className="w-1.5 h-1.5 bg-segura-primary rounded-full shrink-0" />
                    Apoio consultivo para padronização
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
            title="Qual é sua necessidade agora?"
            description="Escolha um caminho e avance sem perder tempo. A gente orienta o próximo passo."
            alignment="center"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            <DecisionCard
              eyebrow="Atendimento consultivo"
              title="Comprar EPI para minha equipe"
              description="Informe sua operação e função do time. Indicamos a seleção ideal por uso e risco."
              badges={["B2B", "Padronização"]}
              href="/chat?origem=home-intencoes&intent=equipe"
              actionText="Iniciar atendimento"
            />
            <DecisionCard
              eyebrow="Por risco e aplicação"
              title="Encontrar EPI por risco específico"
              description="Corte, ruído, poeira, química, altura e mais. Navegue por filtros e categorias."
              badges={["Risco", "Aplicação"]}
              href="/catalogo?origem=home-intencoes&filtro=risco"
              actionText="Ver por risco"
            />
            <DecisionCard
              eyebrow="Cotação objetiva"
              title="Já tenho itens definidos"
              description="Envie a lista e receba alternativas equivalentes quando necessário."
              badges={["Cotação", "Lista"]}
              href="/chat?origem=home-intencoes&intent=cotar-itens"
              actionText="Cotar agora"
            />
            <DecisionCard
              eyebrow="Compra recorrente"
              title="Padronizar e comprar recorrente"
              description="Organize categorias, tamanhos e frequência. Reduza urgências e erros de reposição."
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
            subtitle="Mix de produtos"
            title="Categorias de EPI para sua operação"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <DecisionCard title="Proteção das mãos" description="Luvas e soluções para risco mecânico e químico." href="/catalogo?categoria=maos" actionText="Ver catálogo" />
            <DecisionCard title="Proteção respiratória" description="Máscaras e filtros contra poeiras e vapores." href="/catalogo?categoria=respiratoria" actionText="Ver catálogo" />
            <DecisionCard title="Proteção auditiva" description="Abafadores e plugues para ambientes ruidosos." href="/catalogo?categoria=auditiva" actionText="Ver catálogo" />
            <DecisionCard title="Proteção facial" description="Óculos e viseiras contra impacto e partículas." href="/catalogo?categoria=ocular" actionText="Ver catálogo" />
            <DecisionCard title="Trabalho em altura" description="Cintos e talabartes para segurança vertical." href="/catalogo?categoria=altura" actionText="Ver catálogo" />
            <DecisionCard title="Vestuário" description="Uniformes e proteção térmica operacional." href="/catalogo?categoria=vestuario" actionText="Ver catálogo" />
            <DecisionCard title="Calçados" description="Botas e sapatos de segurança e conforto." href="/catalogo?categoria=calcados" actionText="Ver catálogo" />
            <DecisionCard title="Sinalização" description="Itens de apoio e segurança do ambiente." href="/catalogo?categoria=sinalizacao" actionText="Ver catálogo" />
          </div>
        </Container>
      </Section>

      {/* Segmentos */}
      <Section id="segmentos" variant="default" className="reveal">
        <Container>
          <SectionTitle subtitle="Onde atuamos" title="EPI para diferentes operações de trabalho" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <DecisionCard title="Construção e obras" description="Proteção para obra, altura e impacto." href="/chat?intent=setor&setor=obras" actionText="Falar sobre obra" />
            <DecisionCard title="Indústria" description="EPI para operação e risco mecânico." href="/chat?intent=setor&setor=industria" actionText="Validar cenário" />
            <DecisionCard title="Logística" description="Conforto e padronização para equipes." href="/chat?intent=setor&setor=logistica" actionText="Organizar time" />
          </div>
        </Container>
      </Section>

      {/* Objeções */}
      <Section id="objecoes" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle subtitle="Evite erros" title="O que dá errado na compra de EPI" />
          <div className="grid lg:grid-cols-12 gap-16 mt-16 items-start">
            <div className="lg:col-span-7">
              <AlertList items={[
                "Escolher pelo preço e não pela aplicação real.",
                "Ignorar rotina e conforto do funcionário.",
                "Comprar sem padronizar tamanhos e reposição.",
                "Não considerar alternativas equivalentes técnicas."
              ]} />
            </div>
            <div className="lg:col-span-5 animate-pop">
              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-segura-soft">
                <h3 className="text-xl font-display font-bold text-segura-dark mb-8 uppercase">Solução Segura EPI</h3>
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4 text-sm text-slate-500 font-sans">
                    <svg className="w-5 h-5 text-segura-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg>
                    Orientação por risco e aplicação real.
                  </li>
                  <li className="flex items-start gap-4 text-sm text-slate-500 font-sans">
                    <svg className="w-5 h-5 text-segura-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} /></svg>
                    Foco em padronização B2B.
                  </li>
                </ul>
                <Button href={CONTACT_INFO.whatsapp} variant="primary" className="w-full">Quero validar antes de comprar</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle subtitle="FAQ" title="Dúvidas Frequentes" />
          <div className="max-w-4xl mt-16 space-y-5">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl border border-slate-100 p-8">
                <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full flex items-center justify-between text-left">
                  <span className="text-xl font-display font-black uppercase text-segura-dark">{item.q}</span>
                  <svg className={cn("w-6 h-6 transition-transform", openFaqIndex === index && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={2} /></svg>
                </button>
                {openFaqIndex === index && <p className="mt-6 pt-6 border-t border-slate-50 text-slate-600 text-lg leading-relaxed">{item.a}</p>}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section id="cta-final" variant="immersive" className="reveal">
        <Container>
          <AssistedCTA />
        </Container>
      </Section>

      <Footer
        onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
      />
    </main>
  );
}
