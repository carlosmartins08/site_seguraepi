import type { Route } from 'next';

type QueryValue = string | number | boolean | null | undefined;

export const ROUTES = {
  home: '/',
  catalog: '/catalogo',
  center: '/centro-tecnico',
  howToBuy: '/como-comprar',
  epi: '/epi',
  epiCategories: '/epi/categorias',
  policyDelivery: '/politica-de-entrega-e-frete',
  policyReturns: '/politica-de-trocas-e-devolucoes',
  privacyPolicy: '/politica-de-privacidade',
  termsOfUse: '/termos-de-uso',
  thanks: '/obrigado',
  pickupExpress: '/retirada-expressa',
  about: '/sobre-segura-epi',
  careers: '/trabalhe-conosco',
  chat: '/chat',
} as const satisfies Record<string, Route>;

export const LEGACY_ROUTES = ['/retira', '/retira-em-loja'] as const;

export const SITEMAP_EXCLUDE = [...LEGACY_ROUTES, ROUTES.chat, ROUTES.thanks] as const;

export const DYNAMIC_ROUTE_PREFIXES = ['/epi/'] as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
export type LegacyRoute = (typeof LEGACY_ROUTES)[number];

export function buildUrl(path: string, params?: Record<string, QueryValue>): string {
  if (!params) return path;

  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    search.set(key, String(value));
  }

  const query = search.toString();
  if (!query) return path;

  return `${path}?${query}`;
}
