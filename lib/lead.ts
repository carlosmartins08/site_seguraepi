export type LeadPayload = {
  name?: string;
  company?: string;
  cnpj?: string;
  segment?: string;
  whatsapp?: string;
  items?: string;
  source?: string;
  createdAt?: string;
  consentAt?: string;
};

export const LEAD_STORAGE_KEY = 'lead_orcamento';

export function getStoredLead(): LeadPayload | null {
  if (typeof window === 'undefined') return null;
  const raw = window.sessionStorage.getItem(LEAD_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as LeadPayload;
  } catch {
    return null;
  }
}

export function clearStoredLead(): void {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(LEAD_STORAGE_KEY);
}

export function buildLeadMessage(payload: LeadPayload): string {
  const lines: string[] = ['Solicitacao de orcamento B2B'];

  if (payload.name) lines.push(`Nome: ${payload.name}`);
  if (payload.company) lines.push(`Empresa: ${payload.company}`);
  if (payload.cnpj) lines.push(`CNPJ: ${payload.cnpj}`);
  if (payload.segment) lines.push(`Segmento: ${payload.segment}`);
  if (payload.whatsapp) lines.push(`WhatsApp: ${payload.whatsapp}`);
  if (payload.items) lines.push(`Itens: ${payload.items}`);
  if (payload.source) lines.push(`Origem: ${payload.source}`);
  if (payload.consentAt) lines.push(`Consentimento LGPD: Sim (${payload.consentAt})`);

  return lines.join('\n');
}
