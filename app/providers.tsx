'use client';

import React from 'react';
import { I18nProvider } from '../hooks/useI18n';
import { RouteTracker } from '../components/analytics/RouteTracker';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <RouteTracker />
      {children}
    </I18nProvider>
  );
}
