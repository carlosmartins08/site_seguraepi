export type ChatPrefillPayload = {
  name?: string;
  company?: string;
  whatsapp?: string;
  subject?: string;
  createdAt?: string;
  consentAt?: string;
};

export const CHAT_PREFILL_KEY = 'chat_prefill';

export function storeChatPrefill(payload: ChatPrefillPayload): void {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(CHAT_PREFILL_KEY, JSON.stringify(payload));
}

export function getChatPrefill(): ChatPrefillPayload | null {
  if (typeof window === 'undefined') return null;
  const raw = window.sessionStorage.getItem(CHAT_PREFILL_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ChatPrefillPayload;
  } catch {
    return null;
  }
}

export function clearChatPrefill(): void {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(CHAT_PREFILL_KEY);
}

export function buildChatPrefillMessage(payload: ChatPrefillPayload): string {
  const lines: string[] = ['Mensagem enviada fora do horario'];

  if (payload.name) lines.push(`Nome: ${payload.name}`);
  if (payload.company) lines.push(`Empresa: ${payload.company}`);
  if (payload.whatsapp) lines.push(`WhatsApp: ${payload.whatsapp}`);
  if (payload.subject) lines.push(`Assunto: ${payload.subject}`);
  if (payload.consentAt) lines.push(`Consentimento LGPD: Sim (${payload.consentAt})`);

  return lines.join('\n');
}
