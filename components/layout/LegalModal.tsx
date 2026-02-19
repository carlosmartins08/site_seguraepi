import React from 'react';
import { Logo } from '../brand/Logo';
import { CONTACT_INFO } from '../../lib/constants';
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
        className="absolute inset-0 bg-segura-dark/95 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl md:rounded-4xl shadow-segura-hover animate-pop overflow-hidden flex flex-col border border-white/10">
        {/* Header Section */}
        <div className="p-8 md:p-10 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-3 bg-segura-offwhite rounded-2xl">
              <Logo variant="icon" className="h-10 w-10" />
            </div>
            <div>
              <span className="text-segura-primary font-display font-bold text-[10px] uppercase tracking-[0.3em] block mb-1">
                Portal de Conformidade
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-black text-segura-dark uppercase tracking-tight leading-none">
                {title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-segura-offwhite transition-all duration-300 group"
            aria-label="Fechar"
          >
            <svg
              className="w-6 h-6 text-segura-dark group-hover:rotate-90 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-grow bg-white text-slate-600">
          <div className="max-w-3xl mx-auto font-sans leading-relaxed text-base md:text-lg">
            <div className="prose prose-slate prose-lg max-w-none">{content}</div>

            <div className="mt-12 pt-12 border-t border-slate-100 italic text-sm text-slate-400">
              * Última atualização em {lastUpdateLabel}. Segura EPI e Serviços segue rigorosamente a Lei Geral de
              Proteção de Dados (13.709/2018). Dúvidas sobre seus dados? Contate {CONTACT_INFO.email}.
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-8 md:p-10 bg-segura-offwhite border-t border-slate-100 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
            Sua aceitação confirma a leitura integral destes termos.
          </p>
          <button
            onClick={onClose}
            className="bg-segura-dark text-white px-12 py-5 font-display font-bold uppercase text-xs tracking-[0.2em] rounded-2xl shadow-segura-soft hover:bg-segura-primary hover:shadow-segura-glow transition-all active:scale-95 w-full sm:w-auto"
          >
            Compreendi e Aceito
          </button>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #FF9B21; }
      `,
        }}
      />
    </div>
  );
};
