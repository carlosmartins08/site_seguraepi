export type Locale = 'pt' | 'en' | 'es';

export const DEFAULT_LOCALE: Locale = 'pt';

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

export const STORAGE_KEY_LOCALE = 'segura-epi-locale';
