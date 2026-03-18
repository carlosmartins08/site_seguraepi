'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/actions/Button';
import { OnlineChatButton } from '../../components/chat/OnlineChatButton';
import { buildWhatsappLink, openWbotChat } from '../../lib/wbot';
import { CONTACT_INFO } from '../../lib/constants';
import { ROUTES } from '../../lib/routes';
import { buildLeadMessage, clearStoredLead, getStoredLead } from '../../lib/lead';
import { buildChatContextMessage, clearChatContext, getChatContext } from '../../lib/chat-context';
import { buildChatPrefillMessage, clearChatPrefill, getChatPrefill } from '../../lib/chat-prefill';

export default function ClientPage() {
  const [attempted, setAttempted] = useState(false);
  const [opened, setOpened] = useState<boolean | null>(null);
  const didTrigger = useRef(false);
  useEffect(() => {
    if (didTrigger.current) return;
    didTrigger.current = true;

    let fallbackHref = CONTACT_INFO.whatsapp;
    const payload = getStoredLead();
    const prefill = getChatPrefill();
    const context = getChatContext();
    const contextMessage = buildChatContextMessage(context);
    if (payload) {
      const message = buildLeadMessage(payload);
      const enriched = contextMessage ? `${message}\n\n${contextMessage}` : message;
      fallbackHref = buildWhatsappLink(CONTACT_INFO.whatsapp, enriched);
      clearStoredLead();
      clearChatContext();
      clearChatPrefill();
    } else if (prefill) {
      const message = buildChatPrefillMessage(prefill);
      const enriched = contextMessage ? `${message}\n\n${contextMessage}` : message;
      fallbackHref = buildWhatsappLink(CONTACT_INFO.whatsapp, enriched);
      clearChatPrefill();
      clearChatContext();
    } else if (contextMessage) {
      fallbackHref = buildWhatsappLink(CONTACT_INFO.whatsapp, contextMessage);
      clearChatContext();
    }

    const didOpen = openWbotChat({
      trackEvent: 'route_chat_autostart',
      trackParams: { surface: 'chat_route' },
    });

    if (!didOpen && fallbackHref) {
      window.location.assign(fallbackHref);
    }

    setAttempted(true);
    setOpened(didOpen);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      <Section id="chat-bridge" variant="offwhite" className="pt-32 pb-20">
        <Container className="max-w-3xl">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-elevation-1 text-center space-y-6">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
              Atendimento online
            </p>
            <h1 className="text-2xl md:text-4xl font-display font-black text-text-primary uppercase tracking-tight">
              {attempted && opened ? 'Abrindo o chat agora' : 'Preparando seu atendimento'}
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {attempted
                ? 'Se o chat nao abriu automaticamente, use uma das opcoes abaixo.'
                : 'Aguarde um instante enquanto conectamos voce ao especialista.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <OnlineChatButton
                variant="primary"
                className="px-8 py-4 shadow-glow-brand"
                trackEvent="cta_chat_manual"
                trackParams={{ surface: 'chat_route' }}
                intent="chat-route"
                origem="chat-route"
              >
                Abrir atendimento online
              </OnlineChatButton>
              <Button
                href={CONTACT_INFO.whatsapp}
                variant="outline"
                className="px-8 py-4"
                trackEvent="cta_chat_whatsapp"
                trackParams={{ surface: 'chat_route' }}
              >
                Ir para WhatsApp
              </Button>
            </div>

            <div className="pt-4">
              <Button href={ROUTES.home} variant="ghost" className="px-6">
                Voltar para a home
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
