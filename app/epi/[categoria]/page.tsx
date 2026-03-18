'use client';

import React from 'react';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/typography/SectionTitle';
import { Button } from '../../../components/actions/Button';
import { DecisionCard } from '../../../components/cards/DecisionCard';
import { SeguraLogo } from '../../../components/brand/SeguraLogo';
import { CATEGORY_PAGES, CategoryKey } from '../../../lib/catalog/categories';
import { ROUTES, buildUrl } from '../../../lib/routes';

export default function CategoryLandingPage({ params }: { params: { categoria: string } }) {
  const categoryKey = params.categoria as CategoryKey;
  const data = CATEGORY_PAGES[categoryKey];

  if (!data) return null;

  const chatHref = buildUrl(ROUTES.chat, { categoria: data.key });
  const indicationsSubtitle = data.indicationsSection?.subtitle ?? 'Aplicacoes Reais';
  const indicationsTitle = data.indicationsSection?.title ?? 'Quando e indicada a utilizacao?';
  const indicationsDescription = data.indicationsSection?.description;
  const spotlight = data.spotlight;
  const compliance = data.compliance;
  const highlightGridCols = spotlight && compliance ? 'md:grid-cols-2' : 'md:grid-cols-1';
  const spotlightCtaHref = spotlight?.ctaHref === ROUTES.chat ? chatHref : spotlight?.ctaHref;
  const ctaHref = data.cta?.href === ROUTES.chat ? chatHref : data.cta?.href;

  return (
    <main className="min-h-screen bg-white">
      {/* Header: Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-[60] glass-header border-b border-slate-100 h-20 flex items-center shadow-elevation-1">
        <Container className="w-full flex justify-between items-center">
          <a href={ROUTES.home} className="hover:opacity-80 transition-opacity">
            <SeguraLogo section="navbar" variant="light" size="md" padding="tight" />
          </a>
          <nav className="flex items-center gap-10">
            <a href={ROUTES.epiCategories} className="text-text-primary text-[11px] font-display font-bold uppercase tracking-widest hover:text-action-primaryHover transition-all">Todos Guias</a>
            <Button href={buildUrl(ROUTES.catalog, { categoria: data.key })} variant="primary" className="py-2.5 px-6 text-[10px]">Ver Mix</Button>
          </nav>
        </Container>
      </header>

      {/* Hero Section */}
      <Section id="category-hero" variant="dark" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-action-primary/5 pointer-events-none"></div>
        <Container className="relative z-10 animate-slide-up">
          <span className="bg-action-primary text-white px-4 py-1 rounded-full font-display font-bold text-[10px] mb-8 inline-block uppercase tracking-widest shadow-glow-brand">
            Guia de Protecao • {data.name}
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.05] mb-8 uppercase">{data.heroTitle}</h1>
          <p className="text-slate-400 text-lg md:text-xl font-sans leading-relaxed max-w-3xl mb-12">
            {data.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-6">
            <Button href={buildUrl(ROUTES.catalog, { categoria: data.key })} variant="primary">Ver Mix de Produtos</Button>
            <Button href={chatHref} variant="outline" className="border-slate-700 text-white hover:border-white">Consultoria Tecnica</Button>
          </div>
        </Container>
      </Section>

      {/* Indications */}
      <Section id="indications" variant="offwhite" className="pb-32 -mt-10">
        <Container>
          <SectionTitle
            subtitle={indicationsSubtitle}
            title={indicationsTitle}
            description={indicationsDescription}
          />
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {data.indications.map((ind, idx) => (
              <DecisionCard 
                key={idx} 
                title={ind.title} 
                description={ind.desc} 
                href={buildUrl(ROUTES.catalog, { categoria: data.key })} 
                actionText="Ver Itens Recomendados" 
              />
            ))}
          </div>
        </Container>
      </Section>

      {(spotlight || compliance) && (
        <Section id="categoria-destaques" variant="default">
          <Container>
            <div className={`grid ${highlightGridCols} gap-8`}>
              {spotlight && (
                <div className="p-8 rounded-3xl border border-action-primary/30 bg-action-primary/5 shadow-elevation-1 space-y-4">
                  {spotlight.subtitle && (
                    <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px]">
                      {spotlight.subtitle}
                    </p>
                  )}
                  <h3 className="text-2xl font-display font-black text-text-primary">{spotlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{spotlight.description}</p>
                  {spotlight.ctaLabel && (
                    <Button href={spotlightCtaHref ?? chatHref} variant="primary" className="w-full sm:w-auto">
                      {spotlight.ctaLabel}
                    </Button>
                  )}
                </div>
              )}
              {compliance && (
                <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-elevation-1 space-y-4">
                  <h3 className="text-xl font-display font-bold text-text-primary">{compliance.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{compliance.description}</p>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* Technical Knowledge */}
      <Section id="knowledge">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionTitle subtitle="Prevencao" title="Erros comuns na especificacao" />
              <div className="space-y-8">
                {data.commonMistakes.map((mistake, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-tech-risk/10 text-tech-risk flex items-center justify-center shrink-0 mt-1 font-display font-bold text-xs">!</div>
                    <p className="text-slate-600 font-sans leading-relaxed group-hover:text-text-primary transition-colors">{mistake}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-bg-inverse text-white p-12 rounded-2xl relative overflow-hidden shadow-elevation-2 border border-white/5">
              <h3 className="text-2xl font-display font-bold mb-8">FAQ - Duvidas Frequentes</h3>
              <div className="space-y-10">
                {data.faq.map((item, i) => (
                  <div key={i}>
                    <h4 className="text-action-primary font-display font-bold text-sm uppercase tracking-widest mb-3">{item.q}</h4>
                    <p className="text-slate-400 font-sans text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
              <Button href={chatHref} variant="primary" className="mt-12 w-full">Falar com Especialista</Button>
            </div>
          </div>
        </Container>
      </Section>

      {data.cta && (
        <Section id="cta-final" variant="default" className="pb-28">
          <Container className="bg-bg-inverse text-white rounded-2xl p-10 md:p-14 shadow-elevation-2 border border-white/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                {data.cta.eyebrow && (
                  <p className="text-action-primary font-display font-bold uppercase tracking-[0.25em] text-[11px]">
                    {data.cta.eyebrow}
                  </p>
                )}
                <h3 className="text-3xl md:text-4xl font-display font-black leading-tight">{data.cta.title}</h3>
                {data.cta.description && (
                  <p className="text-slate-300 text-base">{data.cta.description}</p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button href={ctaHref ?? chatHref} variant="primary" className="w-full sm:w-auto">
                  {data.cta.buttonLabel}
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      )}

    </main>
  );
}
