'use client';

import React from 'react';
import { SeguraLogo } from '../brand/SeguraLogo';
import { Button } from '../actions/Button';
import { CONTACT_INFO } from '../../lib/constants';
import { mailtoHref } from '../../lib/contact';
import { useI18n } from '../../hooks/useI18n';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  updatedAt?: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content, updatedAt }) => {
  if (!isOpen) return null;

  const { formatDate } = useI18n();

  const lastUpdateLabel = updatedAt
    ? formatDate(updatedAt, { day: '2-digit', month: 'long', year: 'numeric' })
    : formatDate(new Date(), { month: 'long', year: 'numeric' });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Backdrop with deep blur */}
      <div
        className="absolute inset-0 bg-bg-inverse/95 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl md:rounded-2xl shadow-elevation-2 animate-pop overflow-hidden flex flex-col border border-white/10">
        {/* Header Section */}
        <div className="p-8 md:p-10 border-b border-border-muted flex items-center justify-between shrink-0 bg-white relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-3 bg-bg-surfaceMuted rounded-2xl">
              <SeguraLogo section="modal" variant="icon-only" size="sm" padding="tight" />
            </div>
            <div>
              <span className="text-action-primary font-display font-semibold text-[11px] uppercase tracking-[0.18em] block mb-1">
                Portal de Conformidade
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-text-primary leading-tight">
                {title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-bg-surfaceMuted transition-all duration-300 group"
            aria-label="Fechar"
          >
            <svg
              className="w-6 h-6 text-text-primary group-hover:rotate-90 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-grow bg-white text-text-body">
          <div className="max-w-3xl mx-auto font-sans leading-relaxed text-base md:text-lg">
            <div className="prose prose-slate prose-lg max-w-none">{content}</div>

            <div className="mt-12 pt-12 border-t border-border-muted italic text-sm text-text-subtle">
              * Ultima atualizacao em {lastUpdateLabel}. Segura EPI e Servicos segue rigorosamente a Lei Geral de
              Protecao de Dados (13.709/2018). Duvidas sobre seus dados? Contate{' '}
              <a className="underline hover:text-action-primary" href={mailtoHref(CONTACT_INFO.email)}>
                {CONTACT_INFO.email}
              </a>
              .
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-8 md:p-10 bg-bg-surfaceMuted border-t border-border-muted shrink-0 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-text-subtle text-center sm:text-left">
            Sua aceitacao confirma a leitura integral destes termos.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            Compreendi e Aceito
          </Button>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgb(226, 232, 240); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--segura-primary); }
      `,
        }}
      />
    </div>
  );
};



