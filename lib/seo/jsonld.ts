
import { SITE_NAME, SITE_URL } from './site';

export const buildOrganizationJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-colored.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Santa Isabel, 96 - Renascer",
      "addressLocality": "Cabedelo",
      "addressRegion": "PB",
      "postalCode": "58108-096",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-83-3248-1190",
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/seguraepi/",
      "https://www.facebook.com/seguraepi"
    ]
  };
};

export const buildWebSiteJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/catalogo?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
};
