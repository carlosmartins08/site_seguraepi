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

  track('chat_open_attempt', { channel: 'wbot', ...trackParams });

  if (trackEvent) {
    track(trackEvent, trackParams);
  }

  if (isWbotReady()) {
    try {
      (window as any).WBOTopenChat();
      track('chat_open_success', { channel: 'wbot', ...trackParams });
      return true;
    } catch {
      // Fallback below.
    }
  }

  if (fallbackHref) {
    track('chat_open_fallback', { channel: 'whatsapp', ...trackParams });
    window.open(fallbackHref, '_blank', 'noopener,noreferrer');
    return false;
  }

  track('chat_open_fail', { channel: 'wbot', ...trackParams });
  return false;
}

export function buildWhatsappLink(baseHref: string, text?: string): string {
  if (!text) return baseHref;

  const connector = baseHref.includes('?') ? '&' : '?';
  return `${baseHref}${connector}text=${encodeURIComponent(text)}`;
}
