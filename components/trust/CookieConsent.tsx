import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';

interface CookieConsentProps {
  onOpenPrivacy?: () => void;
}

type PreferenceKey = 'necessary' | 'analytics' | 'marketing';

type ConsentState = {
  version: string;
  accepted: boolean;
  preferences: Record<PreferenceKey, boolean>;
  updatedAt: string;
};

const CONSENT_STORAGE_KEY = 'segura-epi-consent';
const CONSENT_VERSION = '2026-02';

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacy }) => {
  const defaultPreferences: Record<PreferenceKey, boolean> = useMemo(
    () => ({ necessary: true, analytics: false, marketing: false }),
    []
  );

  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [preferences, setPreferences] = useState<Record<PreferenceKey, boolean>>(defaultPreferences);

  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (!isBrowser) return;

    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      try {
        const parsed: ConsentState = JSON.parse(stored);
        // resurfacing banner when version changes forces re-consent after policy updates
        if (parsed.version === CONSENT_VERSION) return;
      } catch {
        // ignore invalid stored values
      }
    }

    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, [isBrowser]);

  const persist = (next: ConsentState) => {
    if (!isBrowser) return;
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  };

  const handleAcceptAll = () => {
    const payload: ConsentState = {
      version: CONSENT_VERSION,
      accepted: true,
      preferences: { necessary: true, analytics: true, marketing: true },
      updatedAt: new Date().toISOString(),
    };
    persist(payload);
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const payload: ConsentState = {
      version: CONSENT_VERSION,
      accepted: true,
      preferences: { ...defaultPreferences, analytics: false, marketing: false },
      updatedAt: new Date().toISOString(),
    };
    persist(payload);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const payload: ConsentState = {
      version: CONSENT_VERSION,
      accepted: true,
      preferences,
      updatedAt: new Date().toISOString(),
    };
    persist(payload);
    setIsVisible(false);
  };

  const togglePreference = (key: PreferenceKey) => {
    if (key === 'necessary') return; // cannot be disabled
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8 animate-slide-up">
      <div className="max-w-7xl mx-auto bg-segura-dark/95 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-segura-hover relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-segura-primary/10 rounded-full blur-3xl -ml-16 -mt-16"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-segura-primary rounded-full animate-pulse shadow-segura-glow"></div>
              <span className="text-segura-primary font-display font-bold text-[10px] uppercase tracking-[0.3em]">
                Privacidade & Governança de Dados
              </span>
            </div>
            <h3 className="text-white font-display font-bold text-lg mb-3">Sua segurança começa com a transparência</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans max-w-4xl">
              Utilizamos cookies e tecnologias de rastreamento para otimizar sua jornada técnica, analisar o desempenho das nossas ferramentas B2B e personalizar ofertas de EPI. Ao prosseguir, você concorda com nossa{' '}
              <button onClick={onOpenPrivacy} className="text-segura-primary font-bold hover:underline underline-offset-4 transition-all">
                Política de Privacidade
              </button>{' '}
              em conformidade com a LGPD.
            </p>

            {isManaging && (
              <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-display text-sm uppercase tracking-[0.2em]">Necessários</p>
                    <p className="text-slate-400 text-xs">Essenciais para funcionamento seguro do site.</p>
                  </div>
                  <span className="text-segura-primary font-display text-[10px] uppercase tracking-widest">Sempre ativos</span>
                </div>

                {(['analytics', 'marketing'] as PreferenceKey[]).map((key) => (
                  <label key={key} className="flex items-center justify-between gap-4 py-2 px-3 rounded-xl hover:bg-white/5 transition">
                    <div>
                      <p className="text-white font-display text-sm uppercase tracking-[0.2em]">
                        {key === 'analytics' ? 'Métricas' : 'Marketing'}
                      </p>
                      <p className="text-slate-400 text-xs">
                        {key === 'analytics'
                          ? 'Ajuda a melhorar performance e usabilidade.'
                          : 'Personaliza ofertas e remarketing responsável.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => togglePreference(key)}
                      className={cn(
                        'w-14 h-8 rounded-full border transition-all relative flex items-center',
                        preferences[key] ? 'bg-segura-primary border-segura-primary' : 'bg-white/10 border-white/20'
                      )}
                      aria-pressed={preferences[key]}
                      aria-label={`Alternar ${key}`}
                    >
                      <span
                        className={cn(
                          'w-6 h-6 bg-white rounded-full shadow-segura-soft transition-all',
                          preferences[key] ? 'translate-x-6' : 'translate-x-1'
                        )}
                      />
                    </button>
                  </label>
                ))}

                <div className="flex flex-wrap gap-3 pt-3">
                  <button
                    onClick={handleSavePreferences}
                    className="bg-white text-segura-dark px-6 py-3 font-display font-bold uppercase text-[11px] tracking-widest rounded-xl hover:bg-segura-primary hover:text-white transition-all"
                  >
                    Salvar preferências
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
                  Gerenciar preferências
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="bg-white/10 text-white px-8 py-4 font-display font-bold uppercase text-xs tracking-widest rounded-xl border border-white/15 hover:border-segura-primary hover:text-segura-primary hover:bg-white transition-all active:scale-95 w-full lg:w-auto"
                >
                  Recusar não essenciais
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="bg-segura-primary text-white px-10 py-4 font-display font-bold uppercase text-xs tracking-widest rounded-xl shadow-segura-glow hover:bg-white hover:text-segura-primary transition-all active:scale-95 w-full lg:w-auto"
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
