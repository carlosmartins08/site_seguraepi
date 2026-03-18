'use client';

import React, { useEffect, useRef } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/actions/Button';
import { CONTACT_INFO } from '../../lib/constants';
import { ROUTES, buildUrl } from '../../lib/routes';
import { buildWhatsappLink, openWbotChat } from '../../lib/wbot';
import { buildLeadMessage, clearStoredLead, getStoredLead } from '../../lib/lead';

export default function ClientPage() {
  const didTrigger = useRef(false);

  useEffect(() => {
    if (didTrigger.current) return;
    didTrigger.current = true;

    let fallbackHref = CONTACT_INFO.whatsapp;
    const payload = getStoredLead();
    if (payload) {
      const message = buildLeadMessage(payload);
      fallbackHref = buildWhatsappLink(CONTACT_INFO.whatsapp, message);
      clearStoredLead();
    }

    openWbotChat({
      trackEvent: 'route_thanks_autostart',
      trackParams: { surface: 'thanks' },
      fallbackHref,
    });
  }, []);

  const phoneDigits = CONTACT_INFO.phone.replace(/\D/g, '');
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : `tel:${CONTACT_INFO.phone}`;

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      <Section id="thanks-hero" variant="offwhite" className="pt-32 pb-16">
        <Container className="max-w-4xl space-y-6">
          <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
            Pos-conversao
          </p>
          <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
            Solicitacao Recebida com Sucesso!
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Obrigado por escolher a Segura EPI. Seu pedido de contato ja esta com nosso time.
          </p>
        </Container>
      </Section>

      <Section id="thanks-content" variant="default" className="pt-10 pb-20">
        <Container className="max-w-5xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">
              O que acontece agora?
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Nossa equipe de especialistas ja recebeu seus dados e iniciou a analise da sua demanda. Prezamos pela
              agilidade, por isso confira abaixo os proximos passos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
              <h3 className="text-lg font-display font-bold text-text-primary">Se voce solicitou uma Cotacao</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Um consultor de solucoes entra em contato via WhatsApp ou e-mail para entender sua necessidade e enviar
                a proposta formalizada.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
              <h3 className="text-lg font-display font-bold text-text-primary">Se voce enviou dados para Cadastro</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                O departamento financeiro valida suas informacoes (CNPJ/Sintegra). O prazo maximo de analise e de ate
                24 horas uteis.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1">
              <h3 className="text-lg font-display font-bold text-text-primary">Se voce falou conosco no WhatsApp</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Aguarde um instante. Devido ao alto volume de atendimentos, um humano respondera em breve. Horario de
                atendimento: segunda a sexta, das 07h25 as 17h18.
              </p>
            </div>
          </div>

          <div className="bg-bg-inverse text-white border border-white/10 rounded-3xl p-8 md:p-10 shadow-elevation-2">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
              Inovacao Segura EPI
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-black mt-4">
              Conheca a Neo Evolution
            </h3>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mt-3">
              A unica palmilha antiestatica moldada a laser em 3 minutos. Leve essa tecnologia para sua empresa.
            </p>
            <Button
              href={buildUrl(ROUTES.chat, { intent: 'neo-evolution', origem: 'obrigado' })}
              variant="primary"
              className="px-8 py-4 mt-6"
              trackEvent="cta_thanks_neo"
            >
              Ver tecnologia
            </Button>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-text-primary font-display font-bold uppercase tracking-[0.2em] text-xs">Duvida urgente?</p>
              <p className="text-slate-600 text-sm">Ligue para nossa central agora mesmo.</p>
            </div>
            <a
              href={phoneHref}
              className="text-text-primary font-display font-bold uppercase tracking-[0.2em] text-sm hover:text-action-primaryHover transition-colors"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
