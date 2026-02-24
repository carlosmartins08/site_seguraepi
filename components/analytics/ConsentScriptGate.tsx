/* Client-side loader for scripts that depend on cookie consent */
'use client';

import React, { useEffect, useState } from 'react';
import Script, { ScriptProps } from 'next/script';
import { CONSENT_EVENT, PreferenceKey, readStoredConsent } from '../../lib/consent';

type ConsentScriptGateProps = {
  preference: PreferenceKey;
} & ScriptProps;

export const ConsentScriptGate: React.FC<ConsentScriptGateProps> = ({
  preference,
  strategy = 'afterInteractive',
  ...scriptProps
}) => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const evaluate = () => {
      const consent = readStoredConsent();
      setAllowed(Boolean(consent?.preferences?.[preference]));
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

  return <Script strategy={strategy} {...scriptProps} />;
};
