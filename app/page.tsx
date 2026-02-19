
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
// Floating chat do WhatsApp foi substituído pelo Wbot como ponto de contato prioritário
import { cn } from '../lib/cn';
import { CONTACT_INFO } from '../lib/constants';
import { LEGAL_TEXTS } from '../lib/legal';
import { useI18n } from '../hooks/useI18n';
import { useBusinessStatus } from '../hooks/useBusinessStatus';

/**
 * HOME OFICIAL - SEGURA EPI
 */
export default function HomePage() {
  const [legalModal, setLegalModal] = useState<{ open: boolean, type: 'privacy' | 'terms' }>({ open: false, type: 'privacy' });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [caSearch, setCaSearch] = useState('');
  const { t } = useI18n();
  const { isOpen: isOnline, message: statusMessage } = useBusinessStatus();

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

  // Configura dados iniciais para o Wbot (prioridade de chat)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    (window as any).WBOTdata = {
      greeting: isOnline
        ? 'Olá! Sou o consultor técnico da SeguraEPI. Precisa validar um C.A. ou de um orçamento rápido agora?'
        : 'Estamos fora do horário, mas registre sua dúvida e retornaremos às 07:30 com um consultor técnico.',
      status: statusMessage,
      online: isOnline,
    };
  }, [isOnline, statusMessage]);

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

      <LegalModal
        isOpen={legalModal.open}
        onClose={() => setLegalModal({ ...legalModal, open: false })}
        title={LEGAL_TEXTS[legalModal.type].title}
        content={LEGAL_TEXTS[legalModal.type].content}
        updatedAt={LEGAL_TEXTS[legalModal.type].updatedAt}
      />

      {/* Hero */}
      <Section id="hero" variant="dark" className="pt-28 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-segura-dark to-slate-900 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_35%)]" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="relative animate-slide-up">
                <div className="absolute -left-6 -top-6 w-32 h-32 bg-segura-primary/15 blur-3xl rounded-full pointer-events-none" />
                <span className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block">
                  Líder em Distribuição de EPI no Nordeste
                </span>
                <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.05] mb-6 uppercase tracking-tight text-white">
                  EPI em João Pessoa: <br />
                  Segurança com Inteligência <br />
                  e Pronta Entrega.
                </h1>
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
                  Muito mais que uma revenda. Somos consultores técnicos focados em proteger o seu maior patrimônio: a vida da sua equipe. Estoque real e logística expressa para sua obra não parar.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 animate-slide-up delay-100">
                <Button
                  href="/catalogo?origem=home-hero"
                  variant="primary"
                  className="px-10 py-5 shadow-segura-glow"
                >
                  Acessar Catálogo Digital
                </Button>
                <Button
                  href={CONTACT_INFO.whatsapp}
                  variant="outline"
                  className="text-white border-white/20 hover:border-segura-primary hover:text-segura-primary hover:ring-2 hover:ring-segura-primary/40 px-10 py-5 bg-white/5 backdrop-blur-sm"
                >
                  Consultoria Técnica
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 animate-slide-up delay-200">
                {[
                  { label: 'Estoque Real (+15k itens)', icon: 'boxes' },
                  { label: 'Retirada em 3h', icon: 'clock' },
                  { label: 'C.A. 100% Ativo', icon: 'shield' },
                  { label: 'Faturamento B2B em 24h', icon: 'invoice' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-segura-primary">
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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564326060809-8d6f2d8195ff?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-tr from-segura-dark/80 via-segura-dark/60 to-transparent" />
                <div className="relative z-10 p-10 flex flex-col gap-6 h-full justify-end">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-segura-primary rounded-full animate-pulse" />
                    <p className="text-white font-display font-bold uppercase tracking-[0.25em] text-xs">Portal da Confiança</p>
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    Inteligência técnica + estoque real. Retiradas em 3h para João Pessoa e logística expressa para todo o Nordeste.
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
      <Section id="prova-social" variant="offwhite" className="reveal">
        <Container>
          <div className="bg-white/70 backdrop-blur-xl border border-slate-100 rounded-4xl shadow-segura-soft p-8 md:p-12 space-y-12">
            {/* Marcas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-black text-segura-dark uppercase tracking-tight">Curadoria Técnica com as Melhores Marcas do Mercado.</h3>
              <p className="text-slate-500 max-w-3xl">Trabalhamos exclusivamente com fabricantes que mantêm padrões rigorosos de qualidade e C.A.s sempre atualizados.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
                {['3M', 'Bracol', 'Marluvas', 'Danny', 'MSA', 'Ansell'].map((brand) => (
                  <div
                    key={brand}
                    className="h-14 rounded-2xl bg-slate-900 text-white/60 flex items-center justify-center uppercase tracking-[0.2em] font-display text-xs transition-all duration-300 hover:text-white hover:bg-white hover:shadow-segura-glow hover:-translate-y-1"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 flex flex-col gap-3">
                <h3 className="text-2xl font-display font-black text-segura-dark uppercase tracking-tight">Excelência reconhecida por quem está na linha de frente.</h3>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-segura-primary/15 text-segura-primary font-display font-bold text-xs uppercase tracking-[0.2em]">5.0 estrelas</div>
                  <div className="flex text-segura-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-slate-500 text-sm">Google Meu Negócio</span>
                </div>
              </div>

              {[
                {
                  text: '“Atendimento técnico de verdade. Validaram o CA antes da compra e entregaram em poucas horas.”',
                  name: 'Paulo Andrade — Gestor de Compras',
                },
                {
                  text: '“Estoque real e rápido. Consegui retirada em 3h para uma urgência na obra, sem burocracia.”',
                  name: 'Mariana Costa — Eng. Segurança do Trabalho',
                },
                {
                  text: '“Equipe humana e preparada. Explicaram cada norma e sugeriram equivalentes com CA ativo.”',
                  name: 'Ricardo Lima — Coordenador de Manutenção',
                },
              ].map((review) => (
                <div key={review.name} className="bg-slate-900/90 backdrop-blur border-t-2 border-segura-primary rounded-3xl p-6 text-white shadow-segura-soft">
                  <p className="text-slate-200 italic leading-relaxed">{review.text}</p>
                  <p className="mt-4 font-display font-bold uppercase tracking-[0.2em] text-sm">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Potência Logística */}
      <Section id="logistica" variant="dark" className="reveal">
        <Container>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_10%,transparent_10%),linear-gradient(45deg,rgba(255,255,255,0.05)_10%,transparent_10%)] bg-[length:14px_14px]" />
            <div className="relative z-10 p-8 md:p-12 space-y-10">
              <div className="max-w-3xl space-y-3">
                <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Potência Logística</p>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">Logística que Honra o seu Cronograma.</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Sabemos que no canteiro de obras ou no chão de fábrica, “esperar” não é opção. Criamos um ecossistema logístico para que o EPI esteja na mão do seu colaborador no menor tempo possível.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Retirada Expressa (3h)',
                    desc: 'Compre via WhatsApp e retire em nossa recepção otimizada. Sem filas, sem burocracia.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    ),
                  },
                  {
                    title: 'Frota Própria Segura',
                    desc: 'Entrega gratuita na Grande João Pessoa para pedidos acima de R$ 500,00. Segurança de ponta a ponta.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l1 3h11l1-3h2m-2-5h2l2 5v6a1 1 0 01-1 1h-3m-4 0H9m-4 0H4a1 1 0 01-1-1v-6l2-5h2" /></svg>
                    ),
                  },
                  {
                    title: 'Distribuição Nordeste',
                    desc: 'Parcerias com transportadoras líderes para grandes pedidos com rastreabilidade total.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-3xl bg-white/5 border border-white/10 text-white shadow-segura-soft hover:shadow-segura-glow transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-segura-primary/15 border border-segura-primary/40 flex items-center justify-center text-segura-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-slate-900/70 border border-segura-primary/20 rounded-3xl p-6 md:p-8 shadow-segura-soft backdrop-blur">
                  <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Horários de Corte</p>
                  <div className="space-y-4 text-white">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-segura-primary/15 border border-segura-primary/40 flex items-center justify-center text-segura-primary font-display font-black">AM</div>
                      <div>
                        <p className="font-display font-bold uppercase tracking-[0.2em]">Pedido até 12h</p>
                        <p className="text-slate-300">Retirada às 14h do mesmo dia.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-segura-primary/15 border border-segura-primary/40 flex items-center justify-center text-segura-primary font-display font-black">PM</div>
                      <div>
                        <p className="font-display font-bold uppercase tracking-[0.2em]">Pedido após 12h</p>
                        <p className="text-slate-300">Retirada às 9h do dia seguinte.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-segura-soft">
                    <div className="h-48 bg-[url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button href="/chat?intent=frete" variant="outline" className="text-white border-white/30 hover:border-segura-primary hover:text-segura-primary">
                      Consultar Frete para minha Região
                    </Button>
                    <p className="text-slate-400 text-sm">Grande João Pessoa: frete grátis acima de R$ 500,00 com frota própria.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Hub de Inteligência e Atalhos */}
      <Section id="hub-inteligencia" variant="offwhite" className="-mt-16 md:-mt-24 relative z-20">
        <Container>
          <div className="bg-slate-900/80 backdrop-blur-md rounded-4xl border border-white/10 shadow-segura-soft hover:shadow-segura-glow transition-shadow duration-500 p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Central de Ações Técnicas</p>
                <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-tight">O que você precisa resolver agora?</h2>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-3xl p-4 md:p-6 border border-white/10 shadow-inner shadow-black/20 mb-8">
              <label className="flex items-center gap-2 text-slate-200 text-xs font-display font-bold uppercase tracking-[0.25em] mb-3">
                <svg className="w-4 h-4 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Validação Técnica
              </label>
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                <div className="relative flex-1">
                  <input
                    value={caSearch}
                    onChange={(e) => setCaSearch(e.target.value)}
                    placeholder={'Digite o número do C.A. ou o nome do produto...'}
                    className="w-full rounded-2xl bg-slate-800/70 border border-slate-700 text-white px-5 py-4 placeholder:text-slate-500 focus:outline-none focus:border-segura-primary focus:ring-2 focus:ring-segura-primary/40 transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-segura-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
                  </div>
                </div>
                <Button
                  href={`/catalogo?busca=${encodeURIComponent(caSearch || 'ca')}`}
                  variant="primary"
                  className="px-8 py-4 whitespace-nowrap"
                >
                  Buscar CA / Produto
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <DecisionCard
                eyebrow="Atalho 01"
                title="Soluções por NR"
                description="Consultar por Norma: NR-10, NR-35, NR-18. Valide riscos e conformidade em minutos."
                icon={<svg className="w-8 h-8 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                href="/catalogo?filtro=nr"
                actionText="Ver por NR"
                className="bg-slate-900/70 text-white border-white/10 hover:border-segura-primary hover:shadow-segura-glow"
              />
              <DecisionCard
                eyebrow="Atalho 02"
                title="Cotação para Empresas"
                description="Cadastro B2B com faturamento em 24h. Agilidade para compras recorrentes e crédito."
                icon={<svg className="w-8 h-8 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-9 6h12M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg>}
                href="/chat?intent=cotacao-b2b"
                actionText="Abrir cotação"
                className="bg-slate-900/70 text-white border-white/10 hover:border-segura-primary hover:shadow-segura-glow"
              />
              <DecisionCard
                eyebrow="Atalho 03"
                title="Retirada Expressa"
                description="Onde retirar meu pedido? Consulte status e confirme retirada em 3h na unidade Cabedelo."
                icon={<svg className="w-8 h-8 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                href="/retira-em-loja"
                actionText="Ver retirada"
                className="bg-slate-900/70 text-white border-white/10 hover:border-segura-primary hover:shadow-segura-glow"
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
          <SectionTitle
            subtitle="Segmentação por dor"
            title="Soluções integradas por nicho"
            description="Escolha o cenário e veja o conjunto de EPIs e normas que eliminam suas objeções."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Construção Civil & Infra */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-segura-soft hover:shadow-segura-glow transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'grayscale(30%)' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative p-8 space-y-4 text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display font-bold uppercase tracking-[0.25em]">NR-18 • NR-35</span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Construção Civil & Infra</h3>
                <p className="text-slate-200 text-sm leading-relaxed">Sua obra não pode parar. Equipamentos testados para o rigor da NR-18 e NR-35, antiqueda e botinas de alta resistência com pronta entrega.</p>
                <p className="text-segura-primary font-display text-xs uppercase tracking-[0.25em] flex items-center gap-2">Ver Soluções para Obra <span className="w-6 h-[2px] bg-segura-primary block group-hover:w-10 transition-all"></span></p>
                <a href="/catalogo?setor=construcao" className="sr-only">Ir para catálogo de construção</a>
              </div>
            </div>

            {/* Setor Elétrico */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-segura-soft hover:shadow-segura-glow transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'grayscale(30%)' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative p-8 space-y-4 text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display font-bold uppercase tracking-[0.25em]">NR-10 • 1000V</span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Setor Elétrico</h3>
                <p className="text-slate-200 text-sm leading-relaxed">Risco zero em alta tensão. Linha Metal-Free com isolamento térmico e elétrico, proteção rigorosa conforme NR-10 para quem lida com o invisível.</p>
                <p className="text-segura-primary font-display text-xs uppercase tracking-[0.25em] flex items-center gap-2">Ver Linha Técnica <span className="w-6 h-[2px] bg-segura-primary block group-hover:w-10 transition-all"></span></p>
                <a href="/catalogo?setor=eletrico" className="sr-only">Ver linha técnica elétrica</a>
              </div>
            </div>

            {/* Alimentícia & Hospitalar */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-segura-soft hover:shadow-segura-glow transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'grayscale(30%)' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative p-8 space-y-4 text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display font-bold uppercase tracking-[0.25em]">C.A. Ativo</span>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Alimentícia & Hospitalar</h3>
                <p className="text-slate-200 text-sm leading-relaxed">Higiene e aderência absoluta. Solados Super Grip e materiais de fácil higienização para ambientes controlados, sem deslizes e sem contaminação.</p>
                <p className="text-segura-primary font-display text-xs uppercase tracking-[0.25em] flex items-center gap-2">Ver Itens Higiene <span className="w-6 h-[2px] bg-segura-primary block group-hover:w-10 transition-all"></span></p>
                <a href="/catalogo?setor=alimentar-hospitalar" className="sr-only">Ver itens para higiene</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Neo Evolution - Inovação */}
      <Section id="neo-evolution" variant="default" className="reveal">
        <Container>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 shadow-segura-hover hover:shadow-segura-glow transition-shadow duration-500">
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_70%_30%,rgba(255,155,33,0.25),transparent_35%),radial-gradient(circle_at_30%_60%,rgba(59,130,246,0.15),transparent_30%)]" />
            <div className="grid lg:grid-cols-12 gap-12 p-8 md:p-12 relative z-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Inovação Neo Evolution</p>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">Conforto de Primeiro Mundo: A Revolução Neo Evolution.</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  EPI desconfortável não é só incômodo; é perda de produtividade e risco de fadiga. Substitua o padrão pelo personalizado — conforto real, performance real.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Scanner Laser', desc: 'Moldagem precisa em apenas 3 minutos.' },
                    { title: 'Antiestática', desc: 'Segurança total para eletrônicos ou inflamáveis.' },
                    { title: 'Ergonomia Extrema', desc: 'Redução imediata de impacto e dor muscular.' },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                      <p className="font-display font-bold uppercase tracking-[0.15em] text-sm mb-2 text-segura-primary">{item.title}</p>
                      <p className="text-slate-200 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href="/chat?intent=demo-neo-evolution"
                    variant="primary"
                    className="px-10 py-4 shadow-segura-glow"
                  >
                    Agendar Demonstração Gratuita na Minha Empresa
                  </Button>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                    <div className="h-10 w-10 rounded-xl bg-segura-primary/20 border border-segura-primary/60 flex items-center justify-center">
                      <span className="text-2xl font-display font-black text-segura-primary animate-pulse">03</span>
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-300 leading-tight">
                      minutos<br />para moldar
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-4xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-segura-soft">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                  <div
                    className="h-[340px] bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508387027631-23a6441407dc?auto=format&fit=crop&w=1200&q=80')" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-64 w-[3px] bg-gradient-to-b from-transparent via-segura-primary to-transparent animate-pulse" />
                  </div>
                </div>
                <p className="mt-4 text-slate-300 text-sm">
                  Visualização conceitual da palmilha sendo escaneada a laser. Podemos substituir por vídeo curto em loop se fornecido.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Autoridade Humana - Mentoria Técnica */}
      <Section id="mentoria" variant="default" className="reveal">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center bg-slate-950 rounded-4xl border border-white/10 overflow-hidden">
            <div className="lg:col-span-5 relative h-full">
              <div className="h-full min-h-[320px] bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center grayscale-[15%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
              <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Autoridade Humana</p>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                Não apenas vendemos EPIs. Mentoramos a sua Segurança.
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur">
                <p className="text-slate-200 text-lg leading-relaxed">
                  Entendemos que por trás de cada capacete existe uma história, um sonho e uma família esperando em casa. Nossa equipe não apenas “tira pedidos”; nós validamos riscos e entregamos soluções.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    { title: 'Consultoria Ativa', desc: 'Especificamos C.A. correto para evitar multas e acidentes.' },
                    { title: 'Olhar Humano', desc: 'Empatia em cada atendimento, respeitando a responsabilidade do gestor.' },
                    { title: 'Ecossistema de Soluções', desc: 'Tecnologia (Neo Evolution) + conhecimento das NRs.' },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                      <p className="font-display font-bold uppercase tracking-[0.15em] text-sm mb-1 text-segura-primary">{item.title}</p>
                      <p className="text-slate-200 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-segura-primary italic text-sm font-sans">
                  “Conectamos tecnologia e humanidade para proteger o que mais importa: a vida.”
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/chat?intent=mentoria" variant="primary" className="px-8 py-4 shadow-segura-glow">
                  Falar com um Mentor Técnico
                </Button>
              </div>
            </div>
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
