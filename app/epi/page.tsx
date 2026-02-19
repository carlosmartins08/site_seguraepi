
'use client';

import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { DecisionCard } from '../../components/cards/DecisionCard';
import { Button } from '../../components/actions/Button';
import { Footer } from '../../components/layout/Footer';
import { Logo } from '../../components/brand/Logo';
import { CATEGORY_PAGES } from '../../lib/catalog/categories';

export default function CategoryHubPage() {
  const categories = Object.values(CATEGORY_PAGES);

  return (
    <main className="min-h-screen bg-white">
      {/* Header: Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-[60] glass-header border-b border-slate-100 h-20 flex items-center shadow-segura-soft">
        <Container className="w-full flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo theme="colored" className="h-10" />
          </a>
          <nav className="flex items-center gap-10">
            <a href="/" className="text-segura-dark text-[11px] font-display font-bold uppercase tracking-widest hover:text-segura-primary transition-all">Home</a>
            <Button href="/catalogo" variant="primary" className="py-2.5 px-6 text-[10px]">Ver Catálogo</Button>
          </nav>
        </Container>
      </header>

      {/* Hero Section */}
      <Section id="hub-hero" variant="dark" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-segura-primary/5 blur-4xl pointer-events-none"></div>
        <Container>
          <div className="max-w-3xl animate-slide-up">
            <span className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Hub de Proteção</span>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-tight mb-8 uppercase">
              GUIA TÉCNICO DE <span className="text-segura-primary">CATEGORIAS</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-sans leading-relaxed">
              Navegue pelos nossos guias de categoria. Cada seção foi estruturada para ajudar sua empresa a decidir pelo EPI correto com base em normas e riscos reais.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categories Grid */}
      <Section id="hub-grid" variant="offwhite" className="pb-32 -mt-10">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <DecisionCard 
                key={cat.key}
                title={cat.name}
                description={cat.shortDescription}
                href={`/epi/${cat.key}`}
                actionText="Ver Guia Completo"
              />
            ))}
            
            {/* AI CTA Card */}
            <div className="rounded-3xl bg-segura-dark text-white p-10 flex flex-col justify-center items-start shadow-segura-hover border border-white/5 group hover:-translate-y-2 transition-all duration-500">
              <span className="text-segura-primary font-display font-bold text-[10px] uppercase tracking-widest mb-4">Suporte Inteligente</span>
              <h3 className="text-2xl font-display font-bold mb-6">Dúvidas Técnicas sobre Riscos?</h3>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed font-sans">Nossos consultores utilizam dimensionamento inteligente para diagnosticar o risco do seu setor e indicar o mix ideal.</p>
              <Button href="/chat?origem=epi-hub" variant="primary" className="w-full">Falar com Consultor</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer onOpenPrivacy={() => {}} onOpenTerms={() => {}} />
    </main>
  );
}
