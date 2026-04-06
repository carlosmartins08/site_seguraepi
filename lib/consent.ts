export type PreferenceKey = 'necessary' | 'analytics' | 'marketing';

export type ConsentState = {
  version: string;
  accepted: boolean;
  preferences: Record<PreferenceKey, boolean>;
  updatedAt: string;
};

export const CONSENT_STORAGE_KEY = 'segura-epi-consent';
export const CONSENT_VERSION = '2026-02';
export const CONSENT_EVENT = 'segura:consent-changed';
export const CONSENT_OPEN_EVENT = 'segura:consent-open';

export const defaultPreferences: Record<PreferenceKey, boolean> = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function readStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;

  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function persistConsent(next: ConsentState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openConsentPreferences(manage = false) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT, { detail: { manage } }));
}
