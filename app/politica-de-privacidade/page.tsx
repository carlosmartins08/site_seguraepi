import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { LEGAL_TEXTS } from '../../lib/legal';
import { QuickSummary } from '../../components/content/QuickSummary';
import { LastUpdated } from '../../components/content/LastUpdated';
import { Button } from '../../components/actions/Button';
import { CONTACT_INFO } from '../../lib/constants';
import { mailtoHref } from '../../lib/contact';
import { JsonLd } from '../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd } from '../../lib/seo/schema';
import { SITE_URL } from '../../lib/seo/site';
import { ROUTES } from '../../lib/routes';

export const metadata = {
  title: 'Politica de Privacidade | Segura EPI',
  description:
    'Saiba como a Segura EPI coleta, usa e protege dados em conformidade com a LGPD.',
  alternates: {
    canonical: `${SITE_URL}${ROUTES.privacyPolicy}`,
  },
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
      <Navbar variant="light" />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Politica de Privacidade', url: `${SITE_URL}${ROUTES.privacyPolicy}` },
        ])}
      />
      <Section id="privacy-hero" variant="offwhite" className="pt-nav pb-14">
        <Container size="narrow">
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
        <Container size="narrow">
          <div className="prose prose-slate prose-lg max-w-none">{content}</div>
        </Container>
      </Section>

      <Section id="privacy-cta" variant="dark" className="pb-20">
        <Container>
          <div className="bg-bg-deep border border-border-inverse rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-display font-semibold text-text-inverse">Precisa falar sobre dados?</h3>
            <p className="text-text-faint mt-2">
              Nosso time responde rapidamente sobre LGPD, uso e armazenamento de dados.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg">Falar no WhatsApp</Button>
              <Button href={mailtoHref(CONTACT_INFO.email)} variant="outline" size="lg" className="text-text-inverse border-white/40">
                Enviar email
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
