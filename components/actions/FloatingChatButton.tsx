'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/cn';
import { CONTACT_INFO } from '../../lib/constants';
import { useBusinessStatus } from '../../hooks/useBusinessStatus';
import { buildWhatsappLink, openWbotChat } from '../../lib/wbot';
import { ROUTES } from '../../lib/routes';
import { buildChatContextMessage, clearChatContext, getChatContext, storeChatContext } from '../../lib/chat-context';
import { buildChatPrefillMessage, storeChatPrefill } from '../../lib/chat-prefill';
import { Field, fieldBase } from '../forms/Field';
import { Button } from './Button';

type PrefillState = {
  name: string;
  company: string;
  whatsapp: string;
  subject: string;
};

const DEFAULT_PREFILL: PrefillState = {
  name: '',
  company: '',
  whatsapp: '',
  subject: '',
};

export const FloatingChatButton: React.FC = () => {
  const { isOpen: isOnline, message: statusMessage } = useBusinessStatus();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [prefill, setPrefill] = useState<PrefillState>(DEFAULT_PREFILL);
  const [prefillConsent, setPrefillConsent] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isPanelOpen) return;
    firstFieldRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsPanelOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isPanelOpen]);

  useEffect(() => {
    if (!isIdle) return;

    const stopIdle = () => setIsIdle(false);

    window.addEventListener('scroll', stopIdle, { passive: true });
    window.addEventListener('pointerdown', stopIdle);
    window.addEventListener('keydown', stopIdle);

    return () => {
      window.removeEventListener('scroll', stopIdle);
      window.removeEventListener('pointerdown', stopIdle);
      window.removeEventListener('keydown', stopIdle);
    };
  }, [isIdle]);

  const handleOpenChat = () => {
    setIsIdle(false);
    storeChatContext({ intent: 'chat-fab', origem: 'fab' });

    if (isOnline) {
      const contextMessage = buildChatContextMessage(getChatContext());
      const fallbackHref = contextMessage
        ? buildWhatsappLink(CONTACT_INFO.whatsapp, contextMessage)
        : CONTACT_INFO.whatsapp;

      const didOpen = openWbotChat({
        fallbackHref,
        trackEvent: 'fab_chat_open',
        trackParams: { status: 'online' },
      });
      if (didOpen) clearChatContext();
      return;
    }

    setIsPanelOpen(true);
  };

  const handlePrefillChange =
    (field: keyof PrefillState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPrefill((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handlePrefillSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setIsIdle(false);
    setIsSending(true);

    const payload = {
      ...prefill,
      createdAt: new Date().toISOString(),
      consentAt: prefillConsent ? new Date().toISOString() : undefined,
    };

    storeChatPrefill(payload);

    const contextMessage = buildChatContextMessage(getChatContext());
    const prefillMessage = buildChatPrefillMessage(payload);
    const message = [prefillMessage, contextMessage].filter(Boolean).join('\n\n');

    clearChatContext();

    const href = buildWhatsappLink(CONTACT_INFO.whatsapp, message);

    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsPanelOpen(false);
      setIsSending(false);
    }, 360);
  };

  return (
    <div
      className={cn(
        'fixed z-[90] flex flex-col items-end gap-3',
        'right-6 bottom-6 md:right-8 md:bottom-8'
      )}
      style={{
        right: 'calc(1.5rem + env(safe-area-inset-right))',
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom))',
      }}
    >
      {isPanelOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pre-chat offline"
          className="w-[320px] max-w-[90vw] bg-bg-surface border border-border-subtle rounded-2xl shadow-elevation-2 p-5 md:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-[11px]">
                Atendimento offline
              </p>
              <h4 className="text-lg font-display font-semibold text-text-primary mt-2">Deixe sua mensagem</h4>
              <p className="text-text-body text-xs mt-2" aria-live="polite">
                {statusMessage}. Assim que voltarmos, nossa equipe responde pelo WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsPanelOpen(false)}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Fechar pre-chat"
            >
              x
            </button>
          </div>

          <form onSubmit={handlePrefillSubmit} className="mt-4 space-y-3">
            <Field id="fab-name" label="Nome" required>
              <input
                ref={firstFieldRef}
                id="fab-name"
                name="fab_name"
                value={prefill.name}
                onChange={handlePrefillChange('name')}
                required
                placeholder="Digite seu nome"
                className={fieldBase}
              />
            </Field>
            <Field id="fab-company" label="Empresa">
              <input
                id="fab-company"
                name="fab_company"
                value={prefill.company}
                onChange={handlePrefillChange('company')}
                placeholder="Nome da empresa"
                className={fieldBase}
              />
            </Field>
            <Field id="fab-whatsapp" label="WhatsApp" required>
              <input
                id="fab-whatsapp"
                name="fab_whatsapp"
                value={prefill.whatsapp}
                onChange={handlePrefillChange('whatsapp')}
                required
                placeholder="(00) 00000-0000"
                type="tel"
                inputMode="tel"
                className={fieldBase}
              />
            </Field>
            <Field id="fab-subject" label="Assunto">
              <textarea
                id="fab-subject"
                name="fab_subject"
                value={prefill.subject}
                onChange={handlePrefillChange('subject')}
                rows={3}
                placeholder="Ex: Preciso de cotacao de botas NR-35"
                className={fieldBase}
              />
            </Field>

            <label className="flex items-start gap-3 text-[11px] text-text-muted">
              <input
                type="checkbox"
                checked={prefillConsent}
                onChange={(event) => setPrefillConsent(event.target.checked)}
                required
                className="mt-0.5 h-4 w-4 rounded border-border-default text-action-primary focus:ring-focus-ring"
              />
              <span>
                Concordo com a{' '}
                <a className="underline hover:text-action-primary" href={ROUTES.privacyPolicy}>
                  Politica de Privacidade
                </a>.
              </span>
            </label>

            <div className="flex items-center justify-between gap-3 pt-2">
              <a
                href={ROUTES.privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-text-muted hover:text-action-primary transition-colors"
              >
                Politica de Privacidade
              </a>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="shadow-elevation-1"
                disabled={isSending}
              >
                <span className={cn('flex items-center justify-center', isSending ? 'send-check' : '')}>
                  {isSending ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12l4 4L19 6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span>Enviar</span>
              </Button>
              {isSending && (
                <span className="sr-only" aria-live="polite">
                  Mensagem enviada
                </span>
              )}
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={handleOpenChat}
        className="group flex items-center gap-3 bg-action-primary text-text-onBrand px-4 py-3 rounded-2xl shadow-elevation-2 transition-all duration-300 hover:-translate-y-1 active:scale-95"
        aria-label={isOnline ? 'Abrir chat com consultor' : 'Deixar mensagem no WhatsApp'}
      >
        <div className="relative">
          <svg className={cn('w-6 h-6', isIdle ? 'fab-idle' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span
            className={cn(
              'absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-action-primary',
              isOnline ? 'bg-tech-compliance animate-pulse' : 'bg-text-subtle'
            )}
          />
        </div>
        <div className="text-left">
          <p className="text-xs font-semibold">
            {isOnline ? 'Consultoria online' : 'Deixe sua mensagem'}
          </p>
          <p className="text-[11px] text-text-inverse/80 font-sans">
            {isOnline ? 'Atendemos em tempo real' : 'Retornamos em horario comercial'}
          </p>
        </div>
      </button>
    </div>
  );
};
