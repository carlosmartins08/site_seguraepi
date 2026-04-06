'use client';

import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionTitle } from '../typography/SectionTitle';
import { Button } from '../actions/Button';
import { DecisionCard } from '../cards/DecisionCard';
import { MethodStep } from '../method/MethodStep';
import { Reveal } from '../motion/Reveal';
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
      <Reveal />

      <Section id="hero" variant="dark" className="pt-nav pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-deep via-bg-inverse to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,33,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_40%)]" />
        <Container className="relative z-10 max-w-5xl">
          <div className="space-y-7">
            <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-labelSM">
              {content.hero.eyebrow}
            </p>
            <h1 className="text-displayLG md:text-displayXL font-display font-bold leading-tight text-text-inverse">
              {content.hero.title}
            </h1>
            <p className="text-text-faint text-bodyLG leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'orcamento-rapido', origem: 'home-hero' })}
                variant="primary"
                size="lg"
                className="shadow-glow-brand"
                trackEvent="cta_home_hero_orcamento"
                motion
              >
                {content.hero.ctas.primary}
              </Button>
              <Button
                href={buildUrl(ROUTES.catalog, { origem: 'home-hero' })}
                variant="outline-inverse"
                size="lg"
                trackEvent="cta_home_hero_catalogo"
                motion
              >
                {content.hero.ctas.tertiary}
              </Button>
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'validar-especificacao', origem: 'home-hero' })}
                variant="ghost-inverse"
                size="lg"
                trackEvent="cta_home_hero_validar"
                motion
              >
                {content.hero.ctas.secondary}
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {content.microProofs.map((item) => (
                <div key={item} className="bg-bg-surface/10 border border-bg-surface/10 rounded-xl px-4 py-3 text-labelMD font-semibold text-text-faint">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="autoridade" variant="default" className="reveal">
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

      <Section id="centro-tecnico" variant="dark" className="reveal">
        <Container>
          <div className="bg-bg-deep border border-bg-surface/10 rounded-2xl p-8 md:p-12">
            <SectionTitle
              subtitle={content.center.subtitle}
              title={content.center.title}
              description={content.center.description}
              alignment="left"
              light
            />
            <Button
              href={buildUrl(ROUTES.center, { origem: 'home-centro-tecnico' })}
              variant="primary"
              size="lg"
              className="mt-6"
              trackEvent="cta_home_centro_tecnico_2"
              motion
            >
              {content.center.cta}
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="processo" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle
            subtitle={content.process.subtitle}
            title={content.process.title}
            description={content.process.description}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" data-reveal="stagger">
            {content.process.steps.map((step) => (
              <div key={step.number} className="reveal" data-reveal-item>
                <MethodStep number={step.number} title={step.title} description={step.description} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="categorias" variant="default" className="reveal">
        <Container>
          <SectionTitle
            subtitle={content.categories.subtitle}
            title={content.categories.title}
            description={content.categories.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10" data-reveal="stagger">
            {content.categories.items.map((item) => (
              <DecisionCard
                key={item.title}
                className="reveal h-full"
                data-reveal-item
                title={item.title}
                description={item.description}
                href={buildUrl(ROUTES.catalog, { origem: 'home-categorias', categoria: item.slug })}
                actionText={content.categories.cardAction}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              href={buildUrl(ROUTES.catalog, { origem: 'home-categorias-cta' })}
              variant="primary"
              size="lg"
              trackEvent="cta_home_catalogo"
              motion
            >
              {content.categories.ctaPrimary}
            </Button>
            <Button
              href={buildUrl(ROUTES.chat, { intent: 'cotar-itens', origem: 'home-categorias-cta' })}
              variant="outline"
              size="lg"
              trackEvent="cta_home_lista_itens"
              motion
            >
              {content.categories.ctaSecondary}
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="segmentos" variant="offwhite" className="reveal">
        <Container>
          <SectionTitle
            subtitle={content.sectors.subtitle}
            title={content.sectors.title}
            description={content.sectors.description}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" data-reveal="stagger">
            {content.sectors.items.map((sector) => (
              <div
                key={sector.title}
                className="reveal bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-elevation-1"
                data-reveal-item
              >
                <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-labelSM">{sector.focus}</p>
                <h3 className="text-titleMD font-display font-semibold text-text-primary mt-3">{sector.title}</h3>
                <p className="text-text-body text-bodySM leading-relaxed mt-3">{sector.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="clareza" variant="default" className="reveal">
        <Container>
          <SectionTitle
            subtitle={content.clarity.subtitle}
            title={content.clarity.title}
            description={content.clarity.description}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10" data-reveal="stagger">
            {content.clarity.points.map((item) => (
              <div
                key={item.title}
                className="reveal bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-elevation-1"
                data-reveal-item
              >
                <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-labelSM">{item.title}</p>
                <p className="text-text-body text-bodySM leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button
              href={buildUrl(ROUTES.center, { origem: 'home-clareza' })}
              variant="primary"
              size="lg"
              trackEvent="cta_home_centro_tecnico"
              motion
            >
              {content.clarity.cta}
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="orcamento" variant="default" className="reveal">
        <Container>
          <SectionTitle
            subtitle={content.budget.subtitle}
            title={content.budget.title}
            description={content.budget.description}
          />
          <div className="mt-8">
            <LeadForm />
          </div>
        </Container>
      </Section>

      <Section id="cases" variant="offwhite" className="reveal cv-auto">
        <Container>
          <SectionTitle
            subtitle={content.cases.subtitle}
            title={content.cases.title}
            description={content.cases.description}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10" data-reveal="stagger">
            {content.cases.items.map((item) => (
              <div
                key={item.title}
                className="reveal bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-elevation-1"
                data-reveal-item
              >
                <h3 className="text-titleMD font-display font-semibold text-text-primary">{item.title}</h3>
                <p className="text-text-body text-bodySM leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="faq" variant="default" className="reveal cv-auto">
        <Container>
          <SectionTitle subtitle={content.faq.subtitle} title={content.faq.title} />
          <FaqList items={content.faq.items as FaqItem[]} />
        </Container>
      </Section>

      <Section id="expansao" variant="dark" className="reveal cv-auto">
        <Container>
          <div className="bg-bg-deep border border-bg-surface/10 rounded-2xl p-8 md:p-12">
            <SectionTitle
              subtitle={content.expansion.subtitle}
              title={content.expansion.title}
              description={content.expansion.description}
              alignment="left"
              light
            />
            <div className="flex flex-wrap gap-4 mt-6">
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'representante', origem: 'home-expansao' })}
                variant="primary"
                size="lg"
                trackEvent="cta_home_parceiro"
                motion
              >
                {content.expansion.ctaPrimary}
              </Button>
              <Button
                href={buildUrl(ROUTES.chat, { intent: 'representante', origem: 'home-expansao' })}
                variant="outline-inverse"
                size="lg"
                trackEvent="cta_home_modelo"
                motion
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

