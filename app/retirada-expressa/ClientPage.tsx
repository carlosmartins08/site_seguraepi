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
import { ROUTES, buildUrl } from '../../lib/routes';

const badges = [
  { label: 'Logistica robusta e rapida', color: 'bg-action-primary/15 text-action-primary' },
  { label: 'Retirada expressa sem filas', color: 'bg-slate-900 text-white' },
  { label: 'Cortes de liberacao claros', color: 'bg-emerald-100 text-emerald-700' },
];

const cortes = [
  { pedido: 'Até 12:00 (manhã)', retirada: 'Mesmo dia, a partir das 14:00' },
  { pedido: 'Após 12:00 (tarde)', retirada: 'Dia seguinte, a partir das 09:00' },
];

const fluxo = [
  'Pedido via WhatsApp: voce realiza seu pedido e cadastro com nossos consultores.',
  'Confirmacao de disponibilidade: avisamos quando o pedido estiver separado.',
  'Retirada rapida: voce vai ate a recepcao apenas para pegar a mercadoria conferida.',
];

const oQueLevar = [
  {
    title: 'Retirada na Loja (Cliente Retira)',
    items: [
      'Pedido via WhatsApp com consultores oficiais.',
      'Confirmacao de disponibilidade antes do deslocamento.',
      'Retirada rapida com pedido ja separado e conferido.',
    ],
    href: buildUrl(ROUTES.chat, { intent: 'retirada' }),
  },
  {
    title: 'Prazos de Liberacao',
    items: [
      'Pedidos ate 12:00: retirada no mesmo dia a partir das 14:00.',
      'Pedidos apos 12:00: retirada no dia seguinte a partir das 09:00.',
      'Pedido disponivel por 24 horas apos confirmacao.',
    ],
    href: buildUrl(ROUTES.chat, { intent: 'prazos-retirada' }),
  },
  {
    title: 'Atencao',
    items: [
      'Aguarde a confirmacao do vendedor antes de se deslocar.',
      'Itens podem retornar ao estoque apos 24 horas.',
    ],
    href: buildUrl(ROUTES.chat, { intent: 'retirada-duvidas' }),
  },
];

const faqExtra = [
  {
    q: 'Posso ir a loja comprar no balcao sem pedir antes?',
    a: 'Nosso canal oficial para orcamentos e novas compras e o WhatsApp. A recepcao fisica e exclusiva para entregas rapidas de pedidos ja processados.',
  },
  {
    q: 'Posso mandar um Uber/Motoqueiro retirar?',
    a: 'Sim, desde que o pedido esteja com status “Disponivel para Retirada”. Informe o nome do portador ou a placa ao vendedor para autorizacao.',
  },
];

export default function ClientPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="light" />

      <Section id="hero-retirada" variant="offwhite" className="pt-32 pb-16 relative overflow-hidden">
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
        <Container className="relative max-w-5xl">
          <div className="space-y-8">
            <div>
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
              Politica de Entregas e Retirada na Loja
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
              Entrega no prazo ou retirada expressa com maxima agilidade.
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
              Nossa estrutura logistica garante que seus EPIs cheguem no prazo ou estejam prontos para retirada sem filas.
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
                Ver catálogo de EPIs
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="fluxo" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="1. Retirada na Loja (Cliente Retira)"
            title="Fluxo otimizado para nao perder tempo em filas"
            description="Entenda como funciona a retirada expressa."
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
                A conferencia e feita antes. Quando voce chega, o pedido ja esta separado e conferido.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cortes" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Prazos de Liberacao"
            title="Cortes logisticos para sua programacao"
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

      {/* Conteúdo consolidado do fluxo Retira em Loja */}
      <Section id="o-que-levar" variant="default">
        <Container className="max-w-6xl space-y-12">
          <SectionTitle
            subtitle="Modalidades de Frete (CIF e FOB)"
            title="Entrega externa conforme sua necessidade"
            description="Modalidades negociadas no momento da cotacao."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {oQueLevar.map((card) => (
              <div key={card.title} className="rounded-3xl bg-white p-8 border border-slate-100 shadow-elevation-1 flex flex-col gap-4">
                <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-tight">{card.title}</h3>
                <ul className="space-y-3 text-sm text-slate-600 flex-grow">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-action-primary rounded-full mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ContextLink href={card.href}>Tirar duvida</ContextLink>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-bg-surfaceMuted p-8 rounded-3xl border border-slate-100 shadow-elevation-1">
              <h4 className="text-lg font-display font-bold text-text-primary mb-3 uppercase tracking-tight">Recebimento e conferencia</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'Conferencia no ato: verifique integridade e quantidade.',
                  'Divergencias devem ser comunicadas imediatamente.',
                  'Para retirada na loja, conferir no balcao antes da saida.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-action-primary rounded-full mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-elevation-1 space-y-4">
              <h4 className="text-lg font-display font-bold text-text-primary mb-2 uppercase tracking-tight">Modalidades de frete</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Frete CIF: disponivel para rotas especificas e pedidos que atingem valor minimo (ex.: acima de R$ 500,00 em GJP).
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="p-4 rounded-xl border border-slate-200 bg-bg-surfaceMuted/60">
                  <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-action-primary mb-1">CIF</p>
                  <p>Entrega sem custo adicional quando aplicavel.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-action-primary mb-1">FOB</p>
                  <p>Cliente indica transportadora para coleta no CD.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="prazo-limite" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Atenção"
            title="Retirada disponivel por 24 horas"
            description="Aguarde a confirmacao do vendedor antes de se deslocar."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <p className="text-slate-600 leading-relaxed">
                Se nao for retirado dentro de 24h, os itens podem retornar ao estoque. Pode ser necessario novo
                alinhamento com o vendedor.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
              Importante: aguarde sempre a confirmacao de disponibilidade antes de ir a loja.
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq-retirada" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle subtitle="FAQ - Retirada" title="Retirada sem atrito" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 5l9 5 9-5m-9 5v5" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary">Posso ir a loja comprar no balcao sem pedir antes?</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Nosso canal oficial para orcamentos e novas compras e o WhatsApp. A recepcao e dedicada a entregas
                rapidas de pedidos ja processados.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary">Posso mandar um Uber/Motoqueiro retirar?</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Sim, desde que o pedido esteja com status “Disponivel para Retirada”. Informe o nome do portador ou a
                placa ao vendedor para autorizacao. Trocas e devolucoes nao podem ser feitas via aplicativo.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mt-12 space-y-4">
            {faqExtra.map((item, index) => (
              <div key={item.q} className="bg-white rounded-2xl border border-slate-100 shadow-elevation-1 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-action-primary/10 text-action-primary flex items-center justify-center font-display font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold text-text-primary mb-1">{item.q}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </main>
  );
}

