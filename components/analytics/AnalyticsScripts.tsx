'use client';

import React from 'react';
import { ConsentScriptGate } from './ConsentScriptGate';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const AnalyticsScripts: React.FC = () => {
  if (!GA_ID && !GTM_ID) return null;

  return (
    <>
      {GTM_ID && (
        <ConsentScriptGate
          preference="analytics"
          id="gtm-loader"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
      )}

      {GA_ID && (
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
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `,
            }}
          />
        </>
      )}
    </>
  );
};
