import React from 'react';
import { OG_IMAGE, SITE_URL } from '../lib/seo/site';
import { HomeClient } from '../components/home/HomeClient';
import { JsonLd } from '../components/seo/JsonLd';
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '../lib/seo/schema';
import { getHomeContent } from '../lib/i18n/home';

export const metadata = {
  title: 'EPI com C.A. Ativo, Consultoria Tecnica e Logistica Agil B2B | Segura EPI',
  description:
    'A Segura EPI e sua mentora em seguranca do trabalho. Distribuidor B2B focado em conformidade legal, C.A. ativo, especificacao tecnica e entrega rapida no Nordeste.',
  alternates: {
    canonical: 'https://seguraepi.com.br/',
  },
  openGraph: {
    title: 'EPI com C.A. Ativo, Consultoria Tecnica e Logistica Agil B2B | Segura EPI',
    description:
      'Distribuidor B2B com foco em conformidade legal, C.A. ativo, especificacao tecnica e entrega rapida no Nordeste.',
    url: 'https://seguraepi.com.br/',
    siteName: 'Segura EPI',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  const faqItems = getHomeContent('pt').faq.items;
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: SITE_URL },
  ]);

  return (
    <>
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <JsonLd data={breadcrumb} />
      <HomeClient />
    </>
  );
}
