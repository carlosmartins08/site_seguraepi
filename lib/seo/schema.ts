import { SITE_NAME, SITE_URL } from './site';
import { CONTACT_INFO } from '../constants';

export type FaqItem = { q: string; a: string };

const sameAs = [
  CONTACT_INFO.instagram,
  CONTACT_INFO.facebook,
  CONTACT_INFO.youtube,
  CONTACT_INFO.linkedin,
  CONTACT_INFO.linkedinIndividual,
].filter(Boolean);

export const buildOrganizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-icon-color.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Santa Isabel, 96 - Renascer',
    addressLocality: 'Cabedelo',
    addressRegion: 'PB',
    postalCode: '58108-096',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-83-3248-1190',
    contactType: 'sales',
    areaServed: 'BR',
    availableLanguage: ['pt-BR', 'en-US', 'es-ES'],
  },
  sameAs,
});

export const buildLocalBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  url: SITE_URL,
  telephone: '+55-83-3248-1190',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Santa Isabel, 96 - Renascer',
    addressLocality: 'Cabedelo',
    addressRegion: 'PB',
    postalCode: '58108-096',
    addressCountry: 'BR',
  },
  sameAs,
});

export const buildWebSiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/catalogo?busca={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const buildFaqJsonLd = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
});

export const buildBreadcrumbJsonLd = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
