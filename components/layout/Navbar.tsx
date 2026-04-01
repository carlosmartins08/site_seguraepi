'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { Route } from 'next';
import Link from 'next/link';
import { Container } from './Container';
import { SeguraLogo, LOGO_RULES } from '../brand/SeguraLogo';
import { Button } from '../actions/Button';
import { cn } from '../../lib/cn';
import { CONTACT_INFO } from '../../lib/constants';
import { phoneHref } from '../../lib/contact';
import { useBusinessStatus } from '../../hooks/useBusinessStatus';
import { useI18n } from '../../hooks/useI18n';
import { openWbotChat } from '../../lib/wbot';
import { LocaleSwitcher } from '../actions/LocaleSwitcher';
import { ROUTES } from '../../lib/routes';
import { storeChatContext } from '../../lib/chat-context';

interface NavbarProps {
  variant?: 'light' | 'dark';
}

export const Navbar: React.FC<NavbarProps> = ({ variant = 'light' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { isOpen: isOnline, message: statusMessage } = useBusinessStatus();
  const { t } = useI18n();

  const logoRule = LOGO_RULES.navbar;
  const logoVariant = !isScrolled && variant === 'dark' ? 'dark' : 'light';
  const logoSize = isScrolled ? 'sm' : 'md';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // A11y focus trap + escape for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const focusables = overlayRef.current?.querySelectorAll<HTMLElement>(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables?.[0];
    const last = focusables?.[focusables.length - 1];
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
      if (e.key === 'Tab' && focusables && focusables.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks: Array<{ name: string; href: Route; showDesktop?: boolean }> = [
    { name: t('nav.home', 'Início'), href: ROUTES.home, showDesktop: false },
    { name: t('nav.catalog', 'Catálogo'), href: ROUTES.catalog },
    { name: t('nav.epiCategories', 'EPI por Categoria'), href: ROUTES.epiCategories },
    { name: t('nav.center', 'Centro Técnico'), href: ROUTES.center },
    { name: t('nav.howToBuy', 'Como Comprar'), href: ROUTES.howToBuy },
    { name: t('nav.about', 'Quem Somos'), href: ROUTES.about },
  ];

  const supportLabel = t('nav.support', 'Suporte B2B');
  const priorityLabel = t('nav.priorityLogistics', 'Logística prioritária em');
  const directoryLabel = t('nav.directory', 'Diretório de Navegação');
  const chatLabel = t('nav.chat', 'Atendimento online');
  const teamOnlineLabel = t('nav.teamOnlineNow', 'Time comercial online agora');
  const supportBlockLabel = t('nav.supportBlock', 'Suporte Industrial');

  return (
    <>
      {/* Top Utility Bar - Desaparece no Scroll */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-[80] bg-bg-inverse/95 border-b border-border-inverse transition-all duration-500 hidden lg:block",
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      )}>
        <Container className="h-10 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={CONTACT_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-text-soft hover:text-action-primaryHover transition-colors group"
            >
              <svg className="w-3 h-3 text-action-primary group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {CONTACT_INFO.address}
            </a>
            <div className="w-[1px] h-3 bg-white/10" />
            <a
              href={phoneHref(CONTACT_INFO.phone)}
              className="flex items-center gap-2 text-xs font-medium text-text-soft hover:text-action-primaryHover transition-colors"
            >
              <svg className="w-3 h-3 text-action-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {supportLabel}: {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LocaleSwitcher compact />
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 transition-all duration-700">
              <span className="w-1.5 h-1.5 bg-action-primary rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-text-soft">
                {priorityLabel} <span className="text-white">{CONTACT_INFO.priorityRegion}</span>
              </span>
            </div>
          </div>
        </Container>
      </div>

      <header className={cn(
        "fixed left-0 right-0 z-[70] transition-all duration-500 ease-in-out",
        isScrolled
          ? "top-0 h-16 glass-header border-b border-border-default/50 shadow-elevation-1"
          : "top-0 lg:top-10 h-24 bg-transparent border-b border-transparent"
      )}>
        {/* Scroll Progress Bar with Technical Glow */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-action-primary transition-all duration-150 z-[80] shadow-glow-brand"
          style={{ width: `${scrollProgress}%` }}
        />

        <Container className="h-full flex items-center justify-between">
          <Link href={ROUTES.home} className="hover:scale-105 transition-transform duration-500 relative z-10">
            <SeguraLogo
              section="navbar"
              variant={logoVariant}
              size={logoSize}
              padding="tight"
              className="transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation Center */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks
              .filter((link) => link.showDesktop !== false)
              .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-all group",
                  isScrolled || variant === 'light' ? "text-text-primary hover:text-action-primaryHover" : "text-white hover:text-action-primaryHover"
                )}
              >
                {link.name}
                {/* Magnetic Technical Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-action-primary transition-all duration-500 group-hover:w-full shadow-glow-brand" />
              </Link>
              ))}
          </nav>

          {/* Status & CTA Cluster */}
          <div className="hidden lg:flex items-center gap-8">
            <div className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-700 group cursor-default relative overflow-hidden",
              isOnline
                ? "bg-bg-surfaceMuted/50 border-border-default/50 hover:border-tech-compliance/30"
                : "bg-bg-inverse/5 border-border-subtle/20"
            )}>
              {!isOnline && <div className="absolute inset-0 bg-action-primary/5 animate-pulse"></div>}

              <span className="flex h-2 w-2 relative z-10">
                {isOnline && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-compliance opacity-40"></span>}
                <span className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  isOnline ? "bg-tech-compliance" : "bg-text-subtle"
                )}></span>
              </span>
              <span
                aria-live="polite"
                className={cn(
                  "text-xs font-medium transition-colors relative z-10 whitespace-nowrap",
                  isOnline
                    ? (isScrolled || variant === 'light' ? "text-text-soft group-hover:text-tech-compliance" : "text-text-soft group-hover:text-tech-compliance")
                    : "text-text-soft italic"
                )}
              >
                {statusMessage}
              </span>
            </div>

            <Button
              variant="primary"
              size="sm"
              className={cn(
                "shadow-elevation-2 transition-[transform,box-shadow,background-color] duration-base ease-standard",
                isScrolled ? "scale-95" : "scale-100"
              )}
              onClick={() => {
                storeChatContext({ intent: 'nav-chat', origem: 'navbar' });
                openWbotChat({
                  fallbackHref: CONTACT_INFO.whatsapp,
                  trackEvent: 'cta_nav_chat',
                  trackParams: { surface: 'navbar' },
                });
              }}
            >
              {chatLabel}
            </Button>
          </div>

          {/* Mobile Menu Trigger - Industrial Styled */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-all rounded-2xl",
              isScrolled || variant === 'light'
                ? "bg-bg-surfaceMuted text-text-primary"
                : "bg-white/5 text-white border border-white/10"
            )}
            aria-label="Abrir Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="w-6 h-[2.5px] bg-current rounded-full" />
            <span className="w-4 h-[2.5px] bg-current rounded-full self-end" />
            <span className="w-6 h-[2.5px] bg-current rounded-full" />
          </button>
        </Container>
      </header>

      {/* Immersive Mobile Command Center Overlay */}
      <div
        ref={overlayRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        className={cn(
          "fixed inset-0 z-[100] bg-bg-inverse transition-all duration-700 ease-in-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-action-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-action-primary/5 rounded-full blur-[80px] -ml-32 -mb-32" />

        <Container className="h-full flex flex-col py-10 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <SeguraLogo section="navbar" variant="dark" size="md" padding="tight" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-14 h-14 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-action-primary transition-all duration-500"
              aria-label="Fechar menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-grow">
            <p className="text-action-primary font-display font-semibold uppercase tracking-[0.22em] text-xs mb-8 opacity-70">
              {directoryLabel}
            </p>

            <div className="mb-8">
              <LocaleSwitcher />
            </div>

            <nav className="flex flex-col gap-6 md:gap-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl md:text-4xl font-display font-semibold text-white tracking-tight hover:text-action-primaryHover transition-all duration-500 flex items-center group relative"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="mr-3 opacity-20 group-hover:opacity-100 group-hover:mr-6 transition-all duration-500 text-2xl md:text-4xl">0{i + 1}</span>
                  {link.name}
                  <span className="ml-6 w-0 h-1 bg-action-primary transition-all duration-700 group-hover:w-24 shadow-glow-brand" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto pt-10 border-t border-white/10 grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-xs">{supportBlockLabel}</p>
              <a
                href={phoneHref(CONTACT_INFO.phone)}
                className="text-white text-3xl font-display font-black tracking-tight leading-none hover:text-action-primaryHover transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
              <p className="text-text-soft text-xs font-sans">{CONTACT_INFO.supportTime}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                variant="primary"
                className="w-full py-5 text-xs shadow-glow-brand"
                onClick={() => {
                  storeChatContext({ intent: 'mobile-chat', origem: 'mobile_menu' });
                  openWbotChat({
                    fallbackHref: CONTACT_INFO.whatsapp,
                    trackEvent: 'cta_mobile_chat',
                    trackParams: { surface: 'mobile_menu' },
                  });
                }}
              >
                {chatLabel}
              </Button>
              <div className="flex items-center justify-center gap-2 py-4 border border-white/5 rounded-2xl bg-white/5">
                <span className={cn(
                  "h-2 w-2 rounded-full",
                  isOnline ? "bg-tech-compliance animate-pulse" : "bg-bg-canvas"
                )}></span>
                <span className="text-xs font-medium text-text-soft" aria-live="polite">
                  {isOnline ? teamOnlineLabel : statusMessage}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};







