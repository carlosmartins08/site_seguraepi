export type Locale = 'pt' | 'en';

export const DEFAULT_LOCALE: Locale = 'pt';

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
};

export const STORAGE_KEY_LOCALE = 'segura-epi-locale';
