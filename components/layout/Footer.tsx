'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { SeguraLogo } from '../brand/SeguraLogo';
import { CONTACT_INFO } from '../../lib/constants';
import { ROUTES } from '../../lib/routes';
import { useI18n } from '../../hooks/useI18n';
import { mailtoHref, phoneHref } from '../../lib/contact';
import { openConsentPreferences } from '../../lib/consent';
import { Icon, type IconName } from '../icons/Icon';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const { t } = useI18n();
  const socialLinks: Array<{ name: string; href: string; icon: IconName }> = [
    { name: 'Instagram', href: CONTACT_INFO.instagram, icon: 'instagram' },
    { name: 'LinkedIn', href: CONTACT_INFO.linkedin, icon: 'linkedin' },
    { name: 'Facebook', href: CONTACT_INFO.facebook, icon: 'facebook' },
    { name: 'YouTube', href: CONTACT_INFO.youtube, icon: 'youtube' },
    { name: 'WhatsApp', href: CONTACT_INFO.whatsapp, icon: 'whatsapp' },
  ];

  return (
    <footer className="bg-bg-inverse text-text-inverse py-20 border-t border-border-inverse">
      <Container>
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <SeguraLogo section="footer" variant="mono-white" size="lg" padding="relaxed" className="mb-8" />
            <p className="text-text-faint text-bodySM leading-relaxed font-sans mb-8">
              Especialistas em proteção industrial e serviços técnicos B2B. Consultoria baseada em risco e conformidade.
            </p>
            <div className="space-y-4">
              <a
                href={mailtoHref(CONTACT_INFO.email)}
                className="text-text-faint text-bodySM font-medium flex items-center gap-3 hover:text-action-primaryHover transition-colors"
              >
                <Icon name="mail" className="w-4 h-4 text-action-primary" aria-hidden />
                {CONTACT_INFO.email}
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                className="text-text-faint text-bodySM font-medium flex items-center gap-3 hover:text-action-primaryHover transition-colors"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-action-primary" aria-hidden />
                WhatsApp Comercial
              </a>
              <a
                href={phoneHref(CONTACT_INFO.phone)}
                className="text-text-faint text-bodySM font-medium flex items-center gap-3 hover:text-action-primaryHover transition-colors"
              >
                <Icon name="phone" className="w-4 h-4 text-action-primary" aria-hidden />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-faint text-bodySM font-medium flex items-center gap-3 hover:text-action-primaryHover transition-colors group"
              >
                <Icon name="map-pin" className="w-4 h-4 text-action-primary" aria-hidden />
                <span className="max-w-[180px] leading-tight group-hover:underline underline-offset-4">{CONTACT_INFO.fullAddress}</span>
              </a>
            </div>
            <div className="mt-10">
              <h4 className="font-display font-semibold text-labelMD uppercase tracking-[0.18em] mb-4 text-action-primary">
                {t('footer.certificationsTitle', 'Certificações')}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-bg-surface/10 p-3 rounded-xl text-center text-labelMD font-semibold uppercase tracking-wide text-text-inverse/60">NR-06</div>
                <div className="border border-bg-surface/10 p-3 rounded-xl text-center text-labelMD font-semibold uppercase tracking-wide text-text-inverse/60">ISO 9001</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-labelMD uppercase tracking-[0.18em] mb-6 text-action-primary">
              {t('footer.solutionsTitle', 'Soluções')}
            </h4>
            <ul className="space-y-4 text-bodySM text-text-faint font-sans">
              <li><Link href={ROUTES.catalog} className="hover:text-action-primaryHover transition-colors">{t('footer.catalog', 'Catálogo completo B2B')}</Link></li>
              <li><Link href={ROUTES.epiCategories} className="hover:text-action-primaryHover transition-colors">{t('footer.epiCategories', 'EPI por categoria')}</Link></li>
              <li><Link href="/#segmentos" className="hover:text-action-primaryHover transition-colors">{t('footer.sectors', 'Segmentos atendidos')}</Link></li>
              <li><Link href={ROUTES.center} className="hover:text-action-primaryHover transition-colors">{t('footer.center', 'Centro técnico')}</Link></li>
              <li><Link href="/#faq" className="hover:text-action-primaryHover transition-colors">{t('footer.faq', 'FAQ')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-labelMD uppercase tracking-[0.18em] mb-6 text-action-primary">
              {t('footer.purchaseTitle', 'Compra & Logística')}
            </h4>
            <ul className="space-y-4 text-bodySM text-text-faint font-sans">
              <li><Link href={ROUTES.howToBuy} className="hover:text-action-primaryHover transition-colors">{t('footer.howToBuy', 'Como comprar')}</Link></li>
              <li><Link href={ROUTES.pickupExpress} className="hover:text-action-primaryHover transition-colors">{t('footer.pickup', 'Retirada expressa')}</Link></li>
              <li><Link href={ROUTES.policyDelivery} className="hover:text-action-primaryHover transition-colors">{t('footer.policyDelivery', 'Política de entrega e frete')}</Link></li>
              <li><Link href={ROUTES.policyReturns} className="hover:text-action-primaryHover transition-colors">{t('footer.policyReturns', 'Política de trocas e devoluções')}</Link></li>
              <li><Link href={ROUTES.chat} className="hover:text-action-primaryHover transition-colors">{t('footer.chat', 'Atendimento online')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-labelMD uppercase tracking-[0.18em] mb-6 text-action-primary">
              {t('footer.institutionalTitle', 'Institucional & Legal')}
            </h4>
            <ul className="space-y-4 text-bodySM text-text-faint font-sans">
              <li><Link href={ROUTES.about} className="hover:text-action-primaryHover transition-colors">{t('footer.about', 'Quem somos')}</Link></li>
              <li><Link href={ROUTES.careers} className="hover:text-action-primaryHover transition-colors">{t('footer.careers', 'Trabalhe conosco')}</Link></li>
              <li><Link href={ROUTES.privacyPolicy} className="hover:text-action-primaryHover transition-colors">{t('footer.privacy', 'Política de privacidade')}</Link></li>
              <li><Link href={ROUTES.termsOfUse} className="hover:text-action-primaryHover transition-colors">{t('footer.terms', 'Termos de uso')}</Link></li>
              <li>
                <button
                  onClick={() => openConsentPreferences(true)}
                  className="hover:text-action-primaryHover transition-colors text-left"
                >
                  {t('footer.cookies', 'Preferências de cookies')}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-bg-surface/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-text-faint text-bodySM font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} Segura EPI & Serviços. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-soft hover:text-action-primaryHover transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2 group"
                title={social.name}
              >
                <div className="p-2 rounded-lg bg-bg-surface/10 border border-bg-surface/10 group-hover:border-action-primary/20 transition-colors">
                  <Icon name={social.icon} className="w-4 h-4" aria-hidden />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};





