'use client';

import React from 'react';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { DecisionCard } from '../../../components/cards/DecisionCard';
import { Button } from '../../../components/actions/Button';
import { SeguraLogo } from '../../../components/brand/SeguraLogo';
import { Reveal } from '../../../components/motion/Reveal';
import { CATEGORY_ORDER, CATEGORY_PAGES } from '../../../lib/catalog/categories';
import { ROUTES, buildUrl } from '../../../lib/routes';

export default function CategoryHubClientPage() {
  const categories = CATEGORY_ORDER.map((key) => CATEGORY_PAGES[key]);

  return (
    <main id="main-content" className="min-h-screen bg-bg-surface">
      <Reveal />
      <header className="fixed top-0 left-0 right-0 z-[60] glass-header border-b border-border-muted h-20 flex items-center shadow-elevation-1">
        <Container className="w-full flex justify-between items-center">
          <a href={ROUTES.home} className="hover:opacity-80 transition-opacity">
            <SeguraLogo section="navbar" variant="light" size="md" padding="tight" />
          </a>
          <nav className="flex items-center gap-10">
            <a href={ROUTES.home} className="text-text-primary text-labelSM font-display font-bold uppercase tracking-widest hover:text-action-primaryHover transition-all">Home</a>
            <Button href={ROUTES.catalog} variant="primary" className="py-2.5 px-6 text-labelSM" motion>Ver catálogo</Button>
          </nav>
        </Container>
      </header>

      <Section id="hub-hero" variant="dark" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-action-primary/10 blur-4xl pointer-events-none" />
        <Container>
          <div className="max-w-3xl animate-slide-up">
            <span className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-labelMD mb-6 block">Hub de Proteção</span>
            <h1 className="text-displayLG md:text-displayXL font-display font-black leading-tight mb-8 uppercase">
              GUIA TÉCNICO DE <span className="text-action-primary">CATEGORIAS</span>
            </h1>
            <p className="text-text-soft text-bodyLG md:text-bodyLG font-sans leading-relaxed">
              Navegue pelos nossos guias de categoria. Cada seção foi estruturada para ajudar sua empresa a decidir pelo EPI correto com base em normas e riscos reais.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="hub-grid" variant="offwhite" className="reveal pb-32 -mt-10">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal="stagger">
            {categories.map((cat) => (
              <DecisionCard
                key={cat.key}
                className="reveal h-full"
                data-reveal-item
                title={cat.name}
                description={cat.shortDescription}
                href={`${ROUTES.epi}/${cat.key}`}
                actionText="Ver guia completo"
              />
            ))}

            <div className="reveal rounded-xl bg-bg-inverse text-text-inverse p-10 flex flex-col justify-center items-start shadow-elevation-2 border border-bg-surface/10 group hover:-translate-y-2 transition-all duration-500" data-reveal-item>
              <span className="text-action-primary font-display font-bold text-labelSM uppercase tracking-widest mb-4">Suporte inteligente</span>
              <h3 className="text-titleLG font-display font-bold mb-6">Dúvidas técnicas sobre riscos?</h3>
              <p className="text-text-soft text-bodySM mb-10 leading-relaxed font-sans">Nossos consultores utilizam dimensionamento inteligente para diagnosticar o risco do seu setor e indicar o mix ideal.</p>
              <Button href={buildUrl(ROUTES.chat, { origem: 'epi-hub' })} variant="primary" className="w-full" motion>Falar com consultor</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}



