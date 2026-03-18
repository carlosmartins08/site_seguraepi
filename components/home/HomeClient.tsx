'use client';

import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionTitle } from '../typography/SectionTitle';
import { Button } from '../actions/Button';
import { DecisionCard } from '../cards/DecisionCard';
import { MethodStep } from '../method/MethodStep';
import { ScrollReveal } from './ScrollReveal';
import { FaqList, FaqItem } from './FaqList';
import { LeadForm } from './LeadForm';
import { ROUTES, buildUrl } from '../../lib/routes';
import { useI18n } from '../../hooks/useI18n';
import { getHomeContent } from '../../lib/i18n/home';
import { AuthorityPanel } from '../trust/AuthorityPanel';

export const HomeClient: React.FC = () => {
  const { locale } = useI18n();
  const content = getHomeContent(locale);

  return (
    <main className="relative" id="main-content">
      <Navbar variant="dark" />
      <ScrollReveal />

      {/* Hero */}
      <Section id="hero" variant="dark" className="pt-nav pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-bg-inverse to-slate-900 opacity-85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_35%)]" />
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-8">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
              {content.hero.eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight text-white uppercase tracking-tight">
              {content.hero.title}
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'orcamento-rapido', origem: 'home-hero' })}
                variant="primary"
                className="px-10 py-5 shadow-glow-brand"
                trackEvent="cta_home_hero_orcamento"
              >
                {content.hero.ctas.primary}
              </Button>
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'validar-especificacao', origem: 'home-hero' })}
                variant="outline"
                className="px-10 py-5 text-white border-white/30 hover:border-action-primary hover:text-action-primaryHover"
                trackEvent="cta_home_hero_validar"
              >
                {content.hero.ctas.secondary}
              </Button>
              <Button
                href={buildUrl(ROUTES.catalog, { origem: 'home-hero' })}
                variant="ghost"
                className="px-10 py-5 text-white border border-white/10 hover:border-action-primary"
                trackEvent="cta_home_hero_catalogo"
              >
                {content.hero.ctas.tertiary}
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {content.microProofs.map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-xs uppercase tracking-[0.2em] text-slate-200 font-display font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Bloco de clareza */}
      <Section id="clareza" variant="offwhite" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle={content.clarity.subtitle}
            title={content.clarity.title}
            description={content.clarity.description}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {content.clarity.points.map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
                <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-action-primary">{item.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              href={buildUrl(ROUTES.center, { origem: 'home-clareza' })}
              variant="primary"
              className="px-8 py-4"
              trackEvent="cta_home_centro_tecnico"
            >
              {content.clarity.cta}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Setores atendidos */}
      <Section id="segmentos" variant="default" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle={content.sectors.subtitle}
            title={content.sectors.title}
            description={content.sectors.description}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {content.sectors.items.map((sector) => (
              <div key={sector.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-action-primary">{sector.focus}</p>
                <h3 className="text-xl font-display font-black uppercase tracking-tight text-text-primary mt-3">{sector.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{sector.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categorias */}
      <Section id="categorias" variant="default" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle={content.categories.subtitle}
            title={content.categories.title}
            description={content.categories.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.categories.items.map((item) => (
              <DecisionCard
                key={item.title}
                title={item.title}
                description={item.description}
                href={buildUrl(ROUTES.catalog, { origem: 'home-categorias', categoria: item.slug })}
                actionText={content.categories.cardAction}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button
              href={buildUrl(ROUTES.catalog, { origem: 'home-categorias-cta' })}
              variant="primary"
              className="px-8 py-4"
              trackEvent="cta_home_catalogo"
            >
              {content.categories.ctaPrimary}
            </Button>
            <Button
              href={buildUrl(ROUTES.chat, { intent: 'cotar-itens', origem: 'home-categorias-cta' })}
              variant="outline"
              className="px-8 py-4"
              trackEvent="cta_home_lista_itens"
            >
              {content.categories.ctaSecondary}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Diferencial operacional */}
      <Section id="processo" variant="offwhite" className="pt-16 pb-16 reveal">
        <Container>
          <SectionTitle
            subtitle={content.process.subtitle}
            title={content.process.title}
            description={content.process.description}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {content.process.steps.map((step) => (
              <MethodStep key={step.number} number={step.number} title={step.title} description={step.description} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Centro tecnico */}
      <Section id="centro-tecnico" variant="dark" className="pt-16 pb-16 reveal">
        <Container>
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-12">
            <SectionTitle
              subtitle={content.center.subtitle}
              title={content.center.title}
              description={content.center.description}
              alignment="left"
            />
            <Button
              href={buildUrl(ROUTES.center, { origem: 'home-centro-tecnico' })}
              variant="primary"
              className="px-8 py-4 mt-8"
              trackEvent="cta_home_centro_tecnico_2"
            >
              {content.center.cta}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Prova social */}
      <Section id="cases" variant="default" className="pt-16 pb-16 reveal cv-auto">
        <Container>
          <SectionTitle
            subtitle={content.cases.subtitle}
            title={content.cases.title}
            description={content.cases.description}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {content.cases.items.map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
                <h3 className="text-lg font-display font-black uppercase tracking-tight text-text-primary">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="autoridade" variant="default" className="pt-16 pb-16 reveal cv-auto">
        <Container>
          <AuthorityPanel
            subtitle={content.authority.subtitle}
            title={content.authority.title}
            description={content.authority.description}
            leadLabel={content.authority.leadLabel}
            sourcesLabel={content.authority.sourcesLabel}
            updatedLabel={content.authority.updatedLabel}
          />
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" variant="offwhite" className="pt-16 pb-16 reveal cv-auto">
        <Container>
          <SectionTitle subtitle={content.faq.subtitle} title={content.faq.title} />
          <FaqList items={content.faq.items as FaqItem[]} />
        </Container>
      </Section>

      {/* Orcamento rapido */}
      <Section id="orcamento" variant="default" className="pt-16 pb-16 reveal cv-auto">
        <Container>
          <SectionTitle
            subtitle={content.budget.subtitle}
            title={content.budget.title}
            description={content.budget.description}
          />
          <div className="mt-10">
            <LeadForm />
          </div>
        </Container>
      </Section>

      {/* Expansao */}
      <Section id="expansao" variant="dark" className="pt-16 pb-16 reveal cv-auto">
        <Container>
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-12">
            <SectionTitle
              subtitle={content.expansion.subtitle}
              title={content.expansion.title}
              description={content.expansion.description}
              alignment="left"
            />
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'representante', origem: 'home-expansao' })}
                variant="primary"
                className="px-8 py-4"
                trackEvent="cta_home_parceiro"
              >
                {content.expansion.ctaPrimary}
              </Button>
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'representante', origem: 'home-expansao' })}
                variant="outline"
                className="px-8 py-4 text-white border-white/30 hover:border-action-primary hover:text-action-primaryHover"
                trackEvent="cta_home_modelo"
              >
                {content.expansion.ctaSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};
