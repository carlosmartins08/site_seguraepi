import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import { cn } from '../../lib/cn';

interface LocaleSwitcherProps {
  compact?: boolean;
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ compact = false }) => {
  const { locale, setLocale, labels, availableLocales } = useI18n();

  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1',
        compact ? 'text-[10px]' : 'text-xs font-display'
      )}
      aria-label="Selecionar idioma"
    >
      {availableLocales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={cn(
            'px-2 py-1 rounded-full transition-all duration-200 uppercase tracking-[0.15em]',
            locale === loc
              ? 'bg-white text-segura-dark font-bold shadow-segura-soft'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          )}
          aria-pressed={locale === loc}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
};
