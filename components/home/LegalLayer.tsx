'use client';

import React, { useState } from 'react';
import { CookieConsent } from '../trust/CookieConsent';
import { LegalModal } from '../layout/LegalModal';
import { LEGAL_TEXTS } from '../../lib/legal';
import { Footer } from '../layout/Footer';

export const LegalLayer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ open: boolean; type: 'privacy' | 'terms' }>({
    open: false,
    type: 'privacy',
  });

  const openPrivacy = () => setLegalModal({ open: true, type: 'privacy' });
  const openTerms = () => setLegalModal({ open: true, type: 'terms' });
  const closeModal = () => setLegalModal((prev) => ({ ...prev, open: false }));

  return (
    <>
      <CookieConsent onOpenPrivacy={openPrivacy} />
      <LegalModal
        isOpen={legalModal.open}
        onClose={closeModal}
        title={LEGAL_TEXTS[legalModal.type].title}
        content={LEGAL_TEXTS[legalModal.type].content}
        updatedAt={LEGAL_TEXTS[legalModal.type].updatedAt}
      />
      <Footer onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />
    </>
  );
};
