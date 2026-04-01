'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { CONTACT_INFO } from '../../lib/constants';
import { ROUTES } from '../../lib/routes';
import { QuickSummary } from '../../components/content/QuickSummary';
import { LastUpdated } from '../../components/content/LastUpdated';
import { AUTHORITY_INFO } from '../../lib/content/authority';
import { JsonLd } from '../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '../../lib/seo/schema';
import { SITE_URL } from '../../lib/seo/site';

const badges = [
  { label: 'Retirada expressa', color: 'bg-action-primary/15 text-action-primary' },
  { label: 'Sem filas no balcão', color: 'bg-bg-inverse text-white' },
  { label: 'Cortes de liberação claros', color: 'bg-status-successSoft text-status-successStrong' },
];

const cortes = [
  { pedido: 'Até 12:00 (manhã)', retirada: 'Mesmo dia, a partir das 14:00' },
  { pedido: 'Após 12:00 (tarde)', retirada: 'Dia seguinte, a partir das 09:00' },
];

const fluxo = [
  'Compra via WhatsApp: você fecha o pedido com seu consultor pelo canal oficial.',
  'Notificação de disponibilidade: você recebe a confirmação de que o pedido está disponível para retirada.',
  'Separação logística: nossa equipe prepara e confere o pedido no estoque.',
  'Retirada rápida: dirija-se à recepção, informe o número do pedido e retire a caixa conferida.',
];

const faqItems = [
  {
    q: 'Posso comprar e retirar na hora direto no balcão?',
    a: 'Nossa recepção física é dedicada exclusivamente à entrega de pedidos prontos. Compras, orçamentos e dúvidas devem ser tratados previamente pelo WhatsApp com nossos especialistas.',
  },
  {
    q: 'Posso enviar um portador (Uber/Motoqueiro)?',
    a: 'Sim. Basta que o pedido esteja com status "Disponível para Retirada" e que o portador tenha o número do pedido e nome do cliente em mãos.',
  },
];

export default function ClientPage() {
  return (
    <main className="bg-white min-h-screen">
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Retirada Expressa', url: `${SITE_URL}${ROUTES.pickupExpress}` },
        ])}
      />
      <Navbar variant="light" />

      <Section id="hero-retirada" variant="offwhite" className="pt-nav pb-14 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
            alt="Recepção organizada para retirada de pedidos"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/75" />
        </div>
        <Container size="default" className="relative max-w-5xl">
          <div className="space-y-8">
            <div>
              <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-[11px] mb-3">
                Retirada Expressa na Loja | Segura EPI
              </p>
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-text-primary leading-tight">
                Retire sem filas e sem espera no balcão.
              </h1>
              <p className="text-text-body text-base md:text-lg leading-relaxed mt-4 max-w-3xl">
                Nosso objetivo é que você passe na loja apenas para pegar sua mercadoria. O processo segue regras claras de
                horário e fluxo para garantir agilidade.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-4 py-2 rounded-full text-[11px] font-semibold border ${badge.color} border-black/5`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" size="lg" className="shadow-glow-brand">
                Fechar pedido no WhatsApp
              </Button>
              <ContextLink href={ROUTES.catalog} className="text-sm">
                Ver catálogo de EPIs
              </ContextLink>
            </div>

            <QuickSummary
              items={[
                'Pedido via WhatsApp e confirmação de disponibilidade.',
                'Cortes claros: até 12h retira 14h; após 12h retira 9h.',
                'Reserva por 24h após confirmação.',
              ]}
            />
            <LastUpdated date={AUTHORITY_INFO.updatedAt} />
          </div>
        </Container>
      </Section>

      <Section id="fluxo" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="1. O Fluxo: Do Pedido a Retirada"
            title="Recepção exclusiva para entrega rápida"
            description="Todo o processo acontece antes da sua chegada."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-text-body">
              {fluxo.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surfaceMuted">
              <h3 className="text-xl font-display font-bold text-text-primary mb-3">Por que funciona?</h3>
              <p className="text-text-body leading-relaxed">
                A separação e conferência acontecem antes da sua chegada. Quando você chega, o pedido já está pronto.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cortes" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="2. Prazos de Liberação (Corte Logístico)"
            title="Programação clara para retirada"
            description="Disponibilidade conforme o horário do pedido."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cortes.map((corte) => (
              <div key={corte.pedido} className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-action-primary">
                      Horário do pedido
                    </p>
                    <h4 className="text-lg font-display font-bold text-text-primary">{corte.pedido}</h4>
                  </div>
                </div>
                <p className="text-text-body leading-relaxed">
                  <span className="font-display font-bold text-text-primary">Disponibilidade: </span>
                  {corte.retirada}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="prazo-limite" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="3. Prazo Limite para Retirada"
            title="Reserva por 24 horas"
            description="Aguarde a confirmação do vendedor antes de se deslocar."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white">
              <p className="text-text-body leading-relaxed">
                Após a notificação de disponibilidade, o pedido fica reservado por 24 horas. Se não houver retirada, os
                itens podem retornar ao estoque e será necessário novo alinhamento com seu vendedor.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-status-warningBorder bg-status-warningSoft text-status-warningStrong text-sm">
              Importante: aguarde sempre a confirmação de disponibilidade antes de ir à loja.
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq-retirada" variant="offwhite" className="cv-auto">
        <Container className="max-w-6xl">
          <SectionTitle subtitle="4. Dúvidas Frequentes sobre Retirada" title="Retirada sem atrito" />
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item) => (
              <div key={item.q} className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-white space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 5l9 5 9-5m-9 5v5" /></svg>
                  </div>
                  <h4 className="text-lg font-display font-bold text-text-primary">{item.q}</h4>
                </div>
                <p className="text-text-body leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </main>
  );
}





