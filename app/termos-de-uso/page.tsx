import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { LEGAL_TEXTS } from '../../lib/legal';
import { QuickSummary } from '../../components/content/QuickSummary';
import { LastUpdated } from '../../components/content/LastUpdated';
import { JsonLd } from '../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd } from '../../lib/seo/schema';
import { SITE_URL } from '../../lib/seo/site';
import { ROUTES } from '../../lib/routes';

export const metadata = {
  title: 'Termos de Uso | Segura EPI',
  description:
    'Termos e condicoes para uso do site da Segura EPI.',
};

export default function TermosDeUsoPage() {
  const { title, content, updatedAt } = LEGAL_TEXTS.terms;
  const summaryItems = [
    'Site B2B para catalogo e contato comercial.',
    'Cadastro com informacoes verdadeiras e documentos.',
    'Conteudo e marca protegidos por propriedade intelectual.',
    'Termos podem ser alterados; foro Cabedelo/PB.',
  ];

  return (
    <main className="bg-white">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Termos de Uso', url: `${SITE_URL}${ROUTES.termsOfUse}` },
        ])}
      />
      <Section id="terms-hero" variant="offwhite" className="pt-nav pb-16">
        <Container className="max-w-4xl">
          <SectionTitle
            subtitle="Termos"
            title={title}
            description={`Atualizado em ${updatedAt}.`}
          />
          <div className="mt-8 space-y-4">
            <QuickSummary items={summaryItems} />
            <LastUpdated date={updatedAt} />
          </div>
        </Container>
      </Section>

      <Section id="terms-content" variant="default" className="pb-24">
        <Container className="max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">{content}</div>
        </Container>
      </Section>
    </main>
  );
}
