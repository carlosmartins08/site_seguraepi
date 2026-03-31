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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs,
});

export const buildWebSiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `https://catalogo.seguraepi.com.br?busca={search_term_string}`,
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

export const buildSpeakableJsonLd = (url: string, cssSelectors: string[] = ['h1', '.speakable']) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: cssSelectors,
  },
});

export const buildTechArticleJsonLd = ({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/brand/logo-icon-color.png`,
    },
  },
});
