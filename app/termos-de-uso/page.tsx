import React from 'react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { LEGAL_TEXTS } from '../../lib/legal';

export const metadata = {
  title: 'Termos de Uso | Segura EPI',
  description:
    'Termos e condicoes para uso do site da Segura EPI.',
};

export default function TermosDeUsoPage() {
  const { title, content, updatedAt } = LEGAL_TEXTS.terms;

  return (
    <main className="bg-white">
      <Section id="terms-hero" variant="offwhite" className="pt-32 pb-16">
        <Container className="max-w-4xl">
          <SectionTitle
            subtitle="Termos"
            title={title}
            description={`Atualizado em ${updatedAt}.`}
          />
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
