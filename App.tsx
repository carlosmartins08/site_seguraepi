
import React from 'react';
import HomePage from './app/page';
import { I18nProvider } from './hooks/useI18n';

/**
 * Since this is a single page application environment as per instructions,
 * App.tsx acts as the primary layout and router orchestrator.
 */
const App: React.FC = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-white">
        <HomePage />
      </div>
    </I18nProvider>
  );
};

export default App;
