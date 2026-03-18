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
  { label: 'Sem filas no balcao', color: 'bg-slate-900 text-white' },
  { label: 'Cortes de liberacao claros', color: 'bg-emerald-100 text-emerald-700' },
];

const cortes = [
  { pedido: 'Ate 12:00 (manha)', retirada: 'Mesmo dia, a partir das 14:00' },
  { pedido: 'Apos 12:00 (tarde)', retirada: 'Dia seguinte, a partir das 09:00' },
];

const fluxo = [
  'Compra via WhatsApp: voce fecha o pedido com seu consultor pelo canal oficial.',
  'Notificacao de disponibilidade: voce recebe a confirmacao de que o pedido esta disponivel para retirada.',
  'Separacao logistica: nossa equipe prepara e confere o pedido no estoque.',
  'Retirada rapida: dirija-se a recepcao, informe o numero do pedido e retire a caixa conferida.',
];

const faqItems = [
  {
    q: 'Posso comprar e retirar na hora direto no balcao?',
    a: 'Nossa recepcao fisica e dedicada exclusivamente a entrega de pedidos prontos. Compras, orcamentos e duvidas devem ser tratados previamente pelo WhatsApp com nossos especialistas.',
  },
  {
    q: 'Posso enviar um portador (Uber/Motoqueiro)?',
    a: 'Sim. Basta que o pedido esteja com status "Disponivel para Retirada" e que o portador tenha o numero do pedido e nome do cliente em maos.',
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

      <Section id="hero-retirada" variant="offwhite" className="pt-nav pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
            alt="Recepcao organizada para retirada de pedidos"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/75" />
        </div>
        <Container className="relative max-w-5xl">
          <div className="space-y-8">
            <div>
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Retirada Expressa na Loja | Segura EPI
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
                Retire sem filas e sem espera no balcao.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Nosso objetivo e que voce passe na loja apenas para pegar sua mercadoria. O processo segue regras claras de
                horario e fluxo para garantir agilidade.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-4 py-2 rounded-full text-[11px] font-display font-bold uppercase tracking-[0.2em] border ${badge.color} border-black/5`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-glow-brand">
                Fechar pedido no WhatsApp
              </Button>
              <ContextLink href={ROUTES.catalog} className="text-sm">
                Ver catalogo de EPIs
              </ContextLink>
            </div>

            <QuickSummary
              items={[
                'Pedido via WhatsApp e confirmacao de disponibilidade.',
                'Cortes claros: ate 12h retira 14h; apos 12h retira 9h.',
                'Reserva por 24h apos confirmacao.',
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
            title="Recepcao exclusiva para entrega rapida"
            description="Todo o processo acontece antes da sua chegada."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-600">
              {fluxo.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-bg-surfaceMuted">
              <h3 className="text-xl font-display font-bold text-text-primary mb-3">Por que funciona?</h3>
              <p className="text-slate-600 leading-relaxed">
                A separacao e conferencia acontecem antes da sua chegada. Quando voce chega, o pedido ja esta pronto.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cortes" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="2. Prazos de Liberacao (Corte Logistico)"
            title="Programacao clara para retirada"
            description="Disponibilidade conforme o horario do pedido."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cortes.map((corte) => (
              <div key={corte.pedido} className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-action-primary">
                      Horario do pedido
                    </p>
                    <h4 className="text-lg font-display font-bold text-text-primary">{corte.pedido}</h4>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
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
            description="Aguarde a confirmacao do vendedor antes de se deslocar."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <p className="text-slate-600 leading-relaxed">
                Apos a notificacao de disponibilidade, o pedido fica reservado por 24 horas. Se nao houver retirada, os
                itens podem retornar ao estoque e sera necessario novo alinhamento com seu vendedor.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
              Importante: aguarde sempre a confirmacao de disponibilidade antes de ir a loja.
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq-retirada" variant="offwhite" className="cv-auto">
        <Container className="max-w-6xl">
          <SectionTitle subtitle="4. Duvidas Frequentes sobre Retirada" title="Retirada sem atrito" />
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item) => (
              <div key={item.q} className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 5l9 5 9-5m-9 5v5" /></svg>
                  </div>
                  <h4 className="text-lg font-display font-bold text-text-primary">{item.q}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </main>
  );
}
