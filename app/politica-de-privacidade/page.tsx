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
  title: 'Politica de Privacidade | Segura EPI',
  description:
    'Saiba como a Segura EPI coleta, usa e protege dados em conformidade com a LGPD.',
};

export default function PoliticaDePrivacidadePage() {
  const { title, content, updatedAt } = LEGAL_TEXTS.privacy;
  const summaryItems = [
    'Coleta de dados para cadastro, faturamento e logistica.',
    'Uso exclusivo para pedidos, credito e comunicacoes.',
    'Compartilhamento apenas com parceiros e obrigacoes legais.',
    'Direitos do titular e canal com DPO.',
  ];

  return (
    <main className="bg-white">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Politica de Privacidade', url: `${SITE_URL}${ROUTES.privacyPolicy}` },
        ])}
      />
      <Section id="privacy-hero" variant="offwhite" className="pt-nav pb-16">
        <Container className="max-w-4xl">
          <SectionTitle
            subtitle="Privacidade"
            title={title}
            description={`Atualizado em ${updatedAt}.`}
          />
          <div className="mt-8 space-y-4">
            <QuickSummary items={summaryItems} />
            <LastUpdated date={updatedAt} />
          </div>
        </Container>
      </Section>

      <Section id="privacy-content" variant="default" className="pb-24">
        <Container className="max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">{content}</div>
        </Container>
      </Section>
    </main>
  );
}
