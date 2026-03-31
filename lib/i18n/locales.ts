export type Locale = 'pt' | 'en' | 'es';

// I18n is intentionally scoped to avoid partially translated experiences.
// Expand this list when all pages have localized content.
export const SUPPORTED_LOCALES: Locale[] = ['pt'];

export const DEFAULT_LOCALE: Locale = SUPPORTED_LOCALES[0] ?? 'pt';

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

export const STORAGE_KEY_LOCALE = 'segura-epi-locale';
