
import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../styles/globals.css';
import { SITE_NAME, SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION, OG_IMAGE } from '../lib/seo/site';
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from '../lib/seo/jsonld';
import { Providers } from './providers';
import { ConsentScriptGate } from '../components/analytics/ConsentScriptGate';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <a href="#main-content" className="skip-link">Pular para o conteudo principal</a>
        <Providers>{children}</Providers>
        <ConsentScriptGate
          preference="marketing"
          src="https://wbot.chat/index.js"
          data-token="4cdc9640da67dbd6e38fa5ef324befd6"
        />
      </body>
    </html>
  );
}
