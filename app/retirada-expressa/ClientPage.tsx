'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { LegalModal } from '../../components/layout/LegalModal';
import { CONTACT_INFO } from '../../lib/constants';
import { LEGAL_TEXTS } from '../../lib/legal';

const badges = [
  { label: 'Compra 100% pelo WhatsApp', color: 'bg-segura-primary/15 text-segura-primary' },
  { label: 'Retirada sem filas', color: 'bg-slate-900 text-white' },
  { label: 'Horários de corte claros', color: 'bg-emerald-100 text-emerald-700' },
];

const cortes = [
  { pedido: 'Até 12:00 (manhã)', retirada: 'Mesmo dia, a partir das 14:00' },
  { pedido: 'Após 12:00 (tarde)', retirada: 'Dia seguinte, a partir das 09:00' },
];

const fluxo = [
  'Compra via WhatsApp com o consultor oficial.',
  'Separação e conferência do pedido no estoque.',
  'Notificação: status muda para “Disponível para Retirada”.',
  'Retirada rápida na recepção informando o número do pedido.',
];

export default function ClientPage() {
  const [legalModal, setLegalModal] = useState<{ open: boolean; type: 'privacy' | 'terms' }>({
    open: false,
    type: 'privacy',
  });

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
              <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Retirada Expressa na Loja
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-segura-dark leading-tight">
                Chegue, retire e volte para a operação. Sem filas, sem espera.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Toda a compra acontece antes da sua chegada. A recepção é apenas o ponto de entrega já conferido.
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
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-segura-glow">
                Fechar pedido no WhatsApp
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Ver catálogo de EPIs
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="fluxo" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="1. Fluxo do Pedido à Retirada"
            title="Recepção é só entrega — todo o resto acontece antes"
            description="Siga o passo a passo para garantir que seu pedido esteja pronto quando chegar."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-600">
              {fluxo.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-segura-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-segura-offwhite">
              <h3 className="text-xl font-display font-bold text-segura-dark mb-3">Por que funciona?</h3>
              <p className="text-slate-600 leading-relaxed">
                A fila some porque a conferência é feita antes. Quando você chega, o pedido já está lacrado e checado.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cortes" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="2. Horários de Corte (Liberação)"
            title="Organização para não ter espera"
            description="Disponibilizamos seu pedido conforme o horário em que foi emitido."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cortes.map((corte) => (
              <div key={corte.pedido} className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-segura-primary/15 text-segura-primary flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-segura-primary">
                      Horário do pedido
                    </p>
                    <h4 className="text-lg font-display font-bold text-segura-dark">{corte.pedido}</h4>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-display font-bold text-segura-dark">Disponibilidade: </span>
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
            title="Reserva de 24h após o aviso"
            description="Após notificação de disponível, mantemos separado por 24h."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white">
              <p className="text-slate-600 leading-relaxed">
                Se não for retirado dentro de 24h, os itens podem voltar ao estoque ou ser realocados. Será necessário
                novo alinhamento com o vendedor.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
              Importante: a reserva garante disponibilidade e evita fila. Avise se precisar reagendar para manter o
              fluxo.
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq-retirada" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle subtitle="4. Dúvidas Frequentes" title="Retirada sem atrito" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-segura-primary/15 text-segura-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 5l9 5 9-5m-9 5v5" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-segura-dark">Posso comprar e retirar na hora?</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Não. A recepção é exclusiva para entrega de pedidos prontos. Novas compras e orçamentos são via WhatsApp
                com os especialistas, garantindo zero fila.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-segura-dark">Posso enviar um portador (Uber/Moto)?</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Sim. Com status “Disponível”, basta o portador apresentar o número do pedido e nome do cliente/empresa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Footer
        onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
      />

      <LegalModal
        isOpen={legalModal.open}
        onClose={() => setLegalModal({ ...legalModal, open: false })}
        title={LEGAL_TEXTS[legalModal.type].title}
        content={LEGAL_TEXTS[legalModal.type].content}
        updatedAt={LEGAL_TEXTS[legalModal.type].updatedAt}
      />
    </main>
  );
}
