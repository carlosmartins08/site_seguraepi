'use client';

/* Client-side loader for scripts that depend on cookie consent */

import React, { useEffect, useState } from 'react';
import Script, { ScriptProps } from 'next/script';
import { CONSENT_EVENT, PreferenceKey, defaultPreferences, readStoredConsent } from '../../lib/consent';

type ConsentScriptGateProps = {
  preference: PreferenceKey;
  token?: string;
} & ScriptProps;

export const ConsentScriptGate: React.FC<ConsentScriptGateProps> = ({
  preference,
  token,
  strategy = 'afterInteractive',
  ...scriptProps
}) => {
  // Default to DS-consistent consent defaults (ex.: "necessary" scripts can load without a prior choice).
  const [allowed, setAllowed] = useState<boolean>(() => defaultPreferences[preference]);

  useEffect(() => {
    const evaluate = () => {
      const consent = readStoredConsent();
      const stored = consent?.preferences?.[preference];
      setAllowed(typeof stored === 'boolean' ? stored : defaultPreferences[preference]);
    };

    evaluate();
    window.addEventListener('storage', evaluate);
    window.addEventListener(CONSENT_EVENT, evaluate);
    return () => {
      window.removeEventListener('storage', evaluate);
      window.removeEventListener(CONSENT_EVENT, evaluate);
    };
  }, [preference]);

  if (!allowed) return null;

  // WBOT reads the site token from the literal `token` attribute on the script tag.
  return <Script strategy={strategy} {...(scriptProps as any)} {...(token ? ({ token } as any) : {})} />;
};
