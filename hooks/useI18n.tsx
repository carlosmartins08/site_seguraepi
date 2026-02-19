import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, LOCALE_LABELS, Locale, STORAGE_KEY_LOCALE } from '../lib/i18n/locales';
import { getResource } from '../lib/i18n/resources';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string, vars?: Record<string, string | number>) => string;
  formatDate: (date: string | number | Date, opts?: Intl.DateTimeFormatOptions) => string;
  labels: typeof LOCALE_LABELS;
  availableLocales: Locale[];
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY_LOCALE) as Locale | null) : null;
    if (stored === 'pt' || stored === 'en') {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_LOCALE, next);
    }
  }, []);

  const t = useCallback(
    (key: string, fallback?: string, vars?: Record<string, string | number>) => {
      const [ns, k] = key.split('.');
      const res = getResource(locale);
      const value = (res as any)?.[ns]?.[k] ?? fallback ?? key;
      if (!vars) return value;
      return Object.entries(vars).reduce((acc, [token, val]) => acc.replace(`{${token}}`, String(val)), value);
    },
    [locale]
  );

  const formatDate = useCallback(
    (date: string | number | Date, opts?: Intl.DateTimeFormatOptions) => {
      return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', opts).format(new Date(date));
    },
    [locale]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      formatDate,
      labels: LOCALE_LABELS,
      availableLocales: ['pt', 'en'],
    }),
    [locale, setLocale, t, formatDate]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
