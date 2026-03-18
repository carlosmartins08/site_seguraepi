export type ChatContext = {
  path?: string;
  query?: string;
  intent?: string;
  origem?: string;
  timestamp?: string;
};

export const CHAT_CONTEXT_KEY = 'chat_context';

export function storeChatContext(partial: Partial<ChatContext> = {}): void {
  if (typeof window === 'undefined') return;

  const path = partial.path ?? window.location.pathname;
  const query = partial.query ?? window.location.search;
  const payload: ChatContext = {
    path,
    query,
    intent: partial.intent,
    origem: partial.origem,
    timestamp: partial.timestamp ?? new Date().toISOString(),
  };

  window.sessionStorage.setItem(CHAT_CONTEXT_KEY, JSON.stringify(payload));
}

export function getChatContext(): ChatContext | null {
  if (typeof window === 'undefined') return null;
  const raw = window.sessionStorage.getItem(CHAT_CONTEXT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ChatContext;
  } catch {
    return null;
  }
}

export function clearChatContext(): void {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(CHAT_CONTEXT_KEY);
}

export function buildChatContextMessage(context?: ChatContext | null): string | null {
  if (!context) return null;

  const lines: string[] = [];
  if (context.path) {
    const query = context.query ? context.query : '';
    lines.push(`Pagina: ${context.path}${query}`);
  }
  if (context.intent) lines.push(`Intent: ${context.intent}`);
  if (context.origem) lines.push(`Origem: ${context.origem}`);
  if (context.timestamp) lines.push(`Timestamp: ${context.timestamp}`);

  return lines.length ? lines.join('\n') : null;
}
