import { track } from './analytics/track';

export type OpenWbotChatOptions = {
  fallbackHref?: string;
  trackEvent?: string;
  trackParams?: Record<string, any>;
};

export function isWbotReady(): boolean {
  return typeof window !== 'undefined' && typeof (window as any).WBOTopenChat === 'function';
}

export function openWbotChat(options: OpenWbotChatOptions = {}): boolean {
  const { fallbackHref, trackEvent, trackParams } = options;

  if (trackEvent) {
    track(trackEvent, trackParams);
  }

  if (isWbotReady()) {
    try {
      (window as any).WBOTopenChat();
      return true;
    } catch {
      // Fallback below.
    }
  }

  if (fallbackHref) {
    window.open(fallbackHref, '_blank', 'noopener,noreferrer');
  }

  return false;
}

export function buildWhatsappLink(baseHref: string, text?: string): string {
  if (!text) return baseHref;

  const connector = baseHref.includes('?') ? '&' : '?';
  return `${baseHref}${connector}text=${encodeURIComponent(text)}`;
}
