import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { LEGAL_TEXTS } from '../../lib/legal';

export const metadata = {
  title: 'Politica de Privacidade | Segura EPI',
  description:
    'Saiba como a Segura EPI coleta, usa e protege dados em conformidade com a LGPD.',
};

export default function PoliticaDePrivacidadePage() {
  const { title, content, updatedAt } = LEGAL_TEXTS.privacy;

  return (
    <main className="bg-white">
      <Section id="privacy-hero" variant="offwhite" className="pt-32 pb-16">
        <Container className="max-w-4xl">
          <SectionTitle
            subtitle="Privacidade"
            title={title}
            description={`Atualizado em ${updatedAt}.`}
          />
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
