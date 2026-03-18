import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '../../../components/layout/Navbar';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/typography/SectionTitle';
import { Button } from '../../../components/actions/Button';
import { FaqList, FaqItem } from '../../../components/home/FaqList';
import { QuickSummary } from '../../../components/content/QuickSummary';
import { LastUpdated } from '../../../components/content/LastUpdated';
import { CATEGORY_PAGES, CategoryKey } from '../../../lib/catalog/categories';
import { ROUTES, buildUrl } from '../../../lib/routes';
import { AUTHORITY_INFO } from '../../../lib/content/authority';
import { JsonLd } from '../../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '../../../lib/seo/schema';
import { SITE_URL } from '../../../lib/seo/site';
import { AuthorityPanel } from '../../../components/trust/AuthorityPanel';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CATEGORY_PAGES).map((categoria) => ({ categoria }));
}

type CategoryPageProps = {
  params: { categoria: string };
};

export function generateMetadata({ params }: CategoryPageProps) {
  const data = CATEGORY_PAGES[params.categoria as CategoryKey];
  if (!data) return {};

  return {
    title: `${data.heroTitle} | Segura EPI`,
    description: data.shortDescription,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const data = CATEGORY_PAGES[params.categoria as CategoryKey];
  if (!data) return notFound();

  const indicationsSubtitle = data.indicationsSection?.subtitle ?? 'Indicacoes tecnicas';
  const indicationsTitle = data.indicationsSection?.title ?? 'Onde este EPI se aplica';
  const indicationsDescription = data.indicationsSection?.description;
  const faqItems: FaqItem[] = data.faq.map((item) => ({ q: item.q, a: item.a }));
  const summaryItems = [
    `Indicacoes: ${data.indications.map((item) => item.title).slice(0, 2).join(', ')}.`,
    data.compliance?.title ?? 'Itens com CA ativo e rastreavel.',
    'Aplicacoes comuns e erros evitados para reduzir risco.',
    'FAQ com suporte consultivo por categoria.',
  ];

  const spotlightHref = data.spotlight?.ctaLabel
    ? buildUrl(ROUTES.chat, { categoria: data.key, intent: 'spotlight' })
    : undefined;
  const ctaHref = data.cta ? buildUrl(ROUTES.chat, { categoria: data.key, intent: 'categoria' }) : undefined;

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: data.name, url: `${SITE_URL}${ROUTES.epi}/${data.key}` },
        ])}
      />
      <Navbar variant="light" />

      <Section id="hero" variant="offwhite" className="pt-nav pb-20">
        <Container className="max-w-5xl space-y-6">
          <div className="space-y-4">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
              Categoria tecnica
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight uppercase tracking-tight">
              {data.heroTitle}
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">{data.heroSubtitle}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {data.badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-[10px] font-display font-bold uppercase tracking-[0.25em] text-slate-600"
              >
                {badge}
              </span>
            ))}
          </div>

          <QuickSummary items={summaryItems} />
          <LastUpdated date={AUTHORITY_INFO.updatedAt} />
        </Container>
      </Section>

      <Section id="indicacoes" variant="default" className="pt-16 pb-16">
        <Container className="max-w-6xl">
          <SectionTitle subtitle={indicationsSubtitle} title={indicationsTitle} description={indicationsDescription} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.indications.map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
                <h3 className="text-lg font-display font-bold text-text-primary">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {data.spotlight && (
        <Section id="spotlight" variant="dark" className="pt-16 pb-16">
          <Container className="max-w-5xl">
            <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 text-white">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
                {data.spotlight.subtitle ?? 'Destaque tecnico'}
              </p>
              <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight mt-4">
                {data.spotlight.title}
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed mt-4">{data.spotlight.description}</p>
              {data.spotlight.ctaLabel && spotlightHref && (
                <Button
                  href={spotlightHref}
                  variant="primary"
                  className="px-8 py-4 mt-8"
                  trackEvent="cta_categoria_spotlight"
                >
                  {data.spotlight.ctaLabel}
                </Button>
              )}
            </div>
          </Container>
        </Section>
      )}

      {data.compliance && (
        <Section id="compliance" variant="offwhite" className="pt-10 pb-10">
          <Container className="max-w-5xl">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
              <h3 className="text-lg font-display font-bold text-text-primary">{data.compliance.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">{data.compliance.description}</p>
            </div>
          </Container>
        </Section>
      )}

      <Section id="orientacoes" variant="default" className="pt-16 pb-16">
        <Container className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
              <h3 className="text-lg font-display font-bold text-text-primary">Aplicacoes comuns</h3>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {data.commonUses.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
              <h3 className="text-lg font-display font-bold text-text-primary">Erros comuns</h3>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {data.commonMistakes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="segmentos" variant="offwhite" className="pt-16 pb-16">
        <Container className="max-w-6xl">
          <SectionTitle subtitle="Segmentos atendidos" title="Onde esta categoria e mais aplicada" />
          <div className="flex flex-wrap gap-3 mt-8">
            {data.segments.map((segment) => (
              <span
                key={segment}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-[11px] font-display font-bold uppercase tracking-[0.25em] text-slate-600"
              >
                {segment}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="autoridade" variant="default" className="pt-16 pb-16 cv-auto">
        <Container className="max-w-6xl">
          <AuthorityPanel
            subtitle="Autoridade tecnica"
            title="Conteudo revisado por especialistas em EPI"
            description="Orientacoes alinhadas as normas vigentes e boas praticas de seguranca do trabalho."
            leadLabel="Responsavel tecnico"
            sourcesLabel="Fontes consultadas"
            updatedLabel="Ultima atualizacao"
          />
        </Container>
      </Section>

      <Section id="faq" variant="default" className="pt-16 pb-16 cv-auto">
        <Container className="max-w-5xl">
          <SectionTitle subtitle="FAQ" title="FAQ - Duvidas Frequentes" />
          <FaqList items={faqItems} />
        </Container>
      </Section>

      {data.cta && ctaHref && (
        <Section id="cta" variant="dark" className="pt-16 pb-16 cv-auto">
          <Container className="max-w-5xl">
            <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 text-white">
              {data.cta.eyebrow && (
                <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
                  {data.cta.eyebrow}
                </p>
              )}
              <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight mt-4">
                {data.cta.title}
              </h2>
              {data.cta.description && (
                <p className="text-slate-200 text-lg leading-relaxed mt-4">{data.cta.description}</p>
              )}
              <Button
                href={ctaHref}
                variant="primary"
                className="px-8 py-4 mt-8"
                trackEvent="cta_categoria_final"
              >
                {data.cta.buttonLabel}
              </Button>
            </div>
          </Container>
        </Section>
      )}
    </main>
  );
}
