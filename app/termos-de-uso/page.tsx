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
  title: 'Termos de Uso | Segura EPI',
  description:
    'Termos e condições para uso do site da Segura EPI.',
  alternates: {
    canonical: `${SITE_URL}${ROUTES.termsOfUse}`,
  },
};

export default function TermosDeUsoPage() {
  const { title, content, updatedAt } = LEGAL_TEXTS.terms;
  const summaryItems = [
    'Site B2B para catálogo e contato comercial.',
    'Cadastro com informações verdadeiras e documentos.',
    'Conteúdo e marca protegidos por propriedade intelectual.',
    'Termos podem ser alterados; foro Cabedelo/PB.',
  ];

  return (
    <main className="bg-white">
      <Navbar variant="light" />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Termos de Uso', url: `${SITE_URL}${ROUTES.termsOfUse}` },
        ])}
      />
      <Section id="terms-hero" variant="offwhite" className="pt-nav pb-14">
        <Container size="narrow">
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
        <Container size="narrow">
          <div className="prose prose-slate prose-lg max-w-none">{content}</div>
        </Container>
      </Section>

      <Section id="terms-cta" variant="dark" className="pb-20">
        <Container>
          <div className="bg-bg-deep border border-border-inverse rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-display font-semibold text-text-inverse">Precisa de esclarecimento?</h3>
            <p className="text-text-faint mt-2">Estamos disponíveis para orientar sobre prazos, pedidos e responsabilidades.</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg">Falar no WhatsApp</Button>
              <Button href={mailtoHref(CONTACT_INFO.email)} variant="outline-inverse" size="lg">
                Enviar e-mail
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
