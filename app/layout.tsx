
import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import '../styles/globals.css';
import { SITE_NAME, SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION, OG_IMAGE } from '../lib/seo/site';
import { buildLocalBusinessJsonLd, buildOrganizationJsonLd, buildWebSiteJsonLd } from '../lib/seo/schema';
import { Providers } from './providers';
import { ConsentScriptGate } from '../components/analytics/ConsentScriptGate';
import { AnalyticsScripts } from '../components/analytics/AnalyticsScripts';
import { LegalLayer } from '../components/home/LegalLayer';
import { FloatingChatButton } from '../components/actions/FloatingChatButton';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
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
  const wbotToken = process.env.NEXT_PUBLIC_WBOT_TOKEN;

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <a href="#main-content" className="skip-link">Pular para o conteudo principal</a>
        <Providers>
          {children}
          <FloatingChatButton />
          <LegalLayer />
        </Providers>
        <Script
          id="wbot-jquery-each-polyfill"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (typeof window === 'undefined') return;
                var w = window;
                if (!w.$) w.$ = {};
                if (!w.$.each) {
                  w.$.each = function (obj, cb) {
                    if (!obj || !cb) return;
                    if (Array.isArray(obj)) {
                      for (var i = 0; i < obj.length; i++) cb(i, obj[i]);
                      return;
                    }
                    for (var k in obj) {
                      if (Object.prototype.hasOwnProperty.call(obj, k)) cb(k, obj[k]);
                    }
                  };
                }
              })();
            `,
          }}
        />
        {wbotToken ? (
          <ConsentScriptGate
            preference="necessary"
            id="wbot-chat-script"
            src="https://wbot.chat/index.js"
            token={wbotToken}
          />
        ) : null}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
