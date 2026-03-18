'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  PreferenceKey,
  ConsentState,
  defaultPreferences,
  persistConsent,
} from '../../lib/consent';

interface CookieConsentProps {
  onOpenPrivacy?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [preferences, setPreferences] = useState<Record<PreferenceKey, boolean>>(defaultPreferences);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      try {
        const parsed: ConsentState = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) return;
      } catch {
        /* ignore malformed */
      }
    }

    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const payload: ConsentState = {
      version: CONSENT_VERSION,
      accepted: true,
      preferences: { necessary: true, analytics: true, marketing: true },
      updatedAt: new Date().toISOString(),
    };
    persistConsent(payload);
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const payload: ConsentState = {
      version: CONSENT_VERSION,
      accepted: true,
      preferences: { ...defaultPreferences, analytics: false, marketing: false },
      updatedAt: new Date().toISOString(),
    };
    persistConsent(payload);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const payload: ConsentState = {
      version: CONSENT_VERSION,
      accepted: true,
      preferences,
      updatedAt: new Date().toISOString(),
    };
    persistConsent(payload);
    setIsVisible(false);
  };

  const togglePreference = (key: PreferenceKey) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8 animate-slide-up">
      <div className="max-w-7xl mx-auto bg-bg-inverse/95 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-elevation-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-action-primary/10 rounded-full blur-3xl -ml-16 -mt-16" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-action-primary rounded-full animate-pulse shadow-glow-brand" />
              <span className="text-action-primary font-display font-bold text-[10px] uppercase tracking-[0.3em]">
                Privacidade &amp; Governanca de Dados
              </span>
            </div>
            <h3 className="text-white font-display font-bold text-lg mb-3">Sua seguranca comeca com a transparencia</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-sans max-w-4xl">
              Utilizamos cookies para otimizar sua jornada tecnica, medir performance e personalizar ofertas de EPI.
              Ao prosseguir, voce concorda com nossa{' '}
              <button onClick={onOpenPrivacy} className="text-action-primary font-bold hover:underline underline-offset-4 transition-all">
                Politica de Privacidade
              </button>{' '}
              em conformidade com a LGPD.
            </p>

            {isManaging && (
              <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-display text-sm uppercase tracking-[0.2em]">Necessarios</p>
                    <p className="text-slate-300 text-xs">Essenciais para funcionamento seguro do site.</p>
                  </div>
                  <span className="text-action-primary font-display text-[10px] uppercase tracking-widest">Sempre ativos</span>
                </div>

                {(['analytics', 'marketing'] as PreferenceKey[]).map((key) => (
                  <label key={key} className="flex items-center justify-between gap-4 py-2 px-3 rounded-xl hover:bg-white/5 transition">
                    <div>
                      <p className="text-white font-display text-sm uppercase tracking-[0.2em]">
                        {key === 'analytics' ? 'Metricas' : 'Marketing'}
                      </p>
                      <p className="text-slate-300 text-xs">
                        {key === 'analytics'
                          ? 'Ajuda a melhorar performance e usabilidade.'
                          : 'Personaliza ofertas e remarketing responsavel.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => togglePreference(key)}
                      className={cn(
                        'w-14 h-8 rounded-full border transition-all relative flex items-center',
                        preferences[key] ? 'bg-action-primary border-action-primary' : 'bg-white/10 border-white/20'
                      )}
                      aria-pressed={preferences[key]}
                      aria-label={`Alternar ${key}`}
                    >
                      <span
                        className={cn(
                          'w-6 h-6 bg-white rounded-full shadow-elevation-1 transition-all',
                          preferences[key] ? 'translate-x-6' : 'translate-x-1'
                        )}
                      />
                    </button>
                  </label>
                ))}

                <div className="flex flex-wrap gap-3 pt-3">
                  <button
                    onClick={handleSavePreferences}
                    className="bg-white text-text-primary px-6 py-3 font-display font-bold uppercase text-[11px] tracking-widest rounded-xl hover:bg-action-primary hover:text-white transition-all"
                  >
                    Salvar preferencias
                  </button>
                  <button
                    onClick={() => setIsManaging(false)}
                    className="text-slate-300 font-display font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row flex-wrap items-center justify-end shrink-0 w-full lg:w-auto">
            {!isManaging && (
              <>
                <button
                  onClick={() => setIsManaging(true)}
                  className="text-slate-300 font-display font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors py-3"
                >
                  Gerenciar preferencias
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="bg-white/10 text-white px-8 py-4 font-display font-bold uppercase text-xs tracking-widest rounded-xl border border-white/15 hover:border-action-primary hover:text-action-primaryHover hover:bg-white transition-all active:scale-95 w-full lg:w-auto"
                >
                  Recusar nao essenciais
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="bg-action-primary text-white px-10 py-4 font-display font-bold uppercase text-xs tracking-widest rounded-xl shadow-glow-brand hover:bg-white hover:text-action-primaryHover transition-all active:scale-95 w-full lg:w-auto"
                >
                  Aceitar todos
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
