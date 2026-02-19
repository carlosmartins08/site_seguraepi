
'use client';

import React from 'react';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/typography/SectionTitle';
import { Button } from '../../../components/actions/Button';
import { DecisionCard } from '../../../components/cards/DecisionCard';
import { MethodStep } from '../../../components/method/MethodStep';
import { AlertList } from '../../../components/trust/AlertList';
import { Footer } from '../../../components/layout/Footer';
import { Logo } from '../../../components/brand/Logo';
import { CATEGORY_PAGES, CategoryKey } from '../../../lib/catalog/categories';

export default function CategoryLandingPage({ params }: { params: { categoria: string } }) {
  const categoryKey = params.categoria as CategoryKey;
  const data = CATEGORY_PAGES[categoryKey];

  if (!data) return null;

  return (
    <main className="min-h-screen bg-white">
      {/* Header: Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-[60] glass-header border-b border-slate-100 h-20 flex items-center shadow-segura-soft">
        <Container className="w-full flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo theme="colored" className="h-10" />
          </a>
          <nav className="flex items-center gap-10">
            <a href="/epi" className="text-segura-dark text-[11px] font-display font-bold uppercase tracking-widest hover:text-segura-primary transition-all">Todos Guias</a>
            <Button href={`/catalogo?categoria=${data.key}`} variant="primary" className="py-2.5 px-6 text-[10px]">Ver Mix</Button>
          </nav>
        </Container>
      </header>

      {/* Hero Section */}
      <Section id="category-hero" variant="dark" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-segura-primary/5 pointer-events-none"></div>
        <Container className="relative z-10 animate-slide-up">
          <span className="bg-segura-primary text-white px-4 py-1 rounded-full font-display font-bold text-[10px] mb-8 inline-block uppercase tracking-widest shadow-segura-glow">
            Guia de Proteção • {data.name}
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.05] mb-8 uppercase">{data.heroTitle}</h1>
          <p className="text-slate-400 text-lg md:text-xl font-sans leading-relaxed max-w-3xl mb-12">
            {data.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-6">
            <Button href={`/catalogo?categoria=${data.key}`} variant="primary">Ver Mix de Produtos</Button>
            <Button href={`/chat?categoria=${data.key}`} variant="outline" className="border-slate-700 text-white hover:border-white">Consultoria Técnica</Button>
          </div>
        </Container>
      </Section>

      {/* Indications */}
      <Section id="indications" variant="offwhite" className="pb-32 -mt-10">
        <Container>
          <SectionTitle subtitle="Aplicações Reais" title="Quando é indicada a utilização?" />
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {data.indications.map((ind, idx) => (
              <DecisionCard 
                key={idx} 
                title={ind.title} 
                description={ind.desc} 
                href={`/catalogo?categoria=${data.key}`} 
                actionText="Ver Itens Recomendados" 
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Knowledge */}
      <Section id="knowledge">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionTitle subtitle="Prevenção" title="Erros comuns na especificação" />
              <div className="space-y-8">
                {data.commonMistakes.map((mistake, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-segura-danger/10 text-segura-danger flex items-center justify-center shrink-0 mt-1 font-display font-bold text-xs">!</div>
                    <p className="text-slate-600 font-sans leading-relaxed group-hover:text-segura-dark transition-colors">{mistake}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-segura-dark text-white p-12 rounded-4xl relative overflow-hidden shadow-segura-hover border border-white/5">
              <h3 className="text-2xl font-display font-bold mb-8">FAQ Técnico</h3>
              <div className="space-y-10">
                {data.faq.map((item, i) => (
                  <div key={i}>
                    <h4 className="text-segura-primary font-display font-bold text-sm uppercase tracking-widest mb-3">{item.q}</h4>
                    <p className="text-slate-400 font-sans text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
              <Button href="/chat" variant="primary" className="mt-12 w-full">Falar com Especialista</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer onOpenPrivacy={() => {}} onOpenTerms={() => {}} />
    </main>
  );
}
