
import React from 'react';
import Script from 'next/script';
import '../styles/globals.css';
import { SITE_NAME, SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION, OG_IMAGE } from '../lib/seo/site';
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from '../lib/seo/jsonld';
import { Providers } from './providers';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script
          src="https://wbot.chat/index.js"
          strategy="afterInteractive"
          data-token="4cdc9640da67dbd6e38fa5ef324befd6"
        />
      </body>
    </html>
  );
}
