'use client';

import React from 'react';
import Script from 'next/script';
import { ConsentScriptGate } from './ConsentScriptGate';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const AnalyticsScripts: React.FC = () => {
  const pipeline: 'gtm' | 'ga' | null = GTM_ID ? 'gtm' : GA_ID ? 'ga' : null;
  if (!pipeline) return null;

  return (
    <>
      <Script
        id="analytics-bootstrap"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html:
            pipeline === 'gtm'
              ? `
                window.__SEGURA_ANALYTICS_PIPELINE = 'gtm';
                window.dataLayer = window.dataLayer || [];
              `
              : `
                window.__SEGURA_ANALYTICS_PIPELINE = 'ga';
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
              `,
        }}
      />

      {pipeline === 'gtm' && GTM_ID && (
        <>
          <ConsentScriptGate
            preference="analytics"
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
              `,
            }}
          />
          <ConsentScriptGate
            preference="analytics"
            id="gtm-loader"
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {pipeline === 'ga' && GA_ID && (
        <>
          <ConsentScriptGate
            preference="analytics"
            id="ga-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <ConsentScriptGate
            preference="analytics"
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){ window.dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  anonymize_ip: true,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
};
