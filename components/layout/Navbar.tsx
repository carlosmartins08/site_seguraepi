
import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Logo } from '../brand/Logo';
import { Button } from '../actions/Button';
import { cn } from '../../lib/cn';
import { CONTACT_INFO } from '../../lib/constants';
import { useBusinessStatus } from '../../hooks/useBusinessStatus';
import { useLocation } from '../../hooks/useLocation';
import { useI18n } from '../../hooks/useI18n';
import { LocaleSwitcher } from '../actions/LocaleSwitcher';

interface NavbarProps {
  variant?: 'light' | 'dark';
}

export const Navbar: React.FC<NavbarProps> = ({ variant = 'light' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isOpen: isOnline, message: statusMessage } = useBusinessStatus();
  const { region, loading: locationLoading } = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home', 'Início'), href: '/' },
    { name: t('nav.epiCategories', 'EPI por Categoria'), href: '/epi' },
    { name: t('nav.catalog', 'Catálogo'), href: '/catalogo' },
    { name: t('nav.pickup', 'Retira em Loja'), href: '/retira' },
  ];

  return (
    <>
      {/* Top Utility Bar - Desaparece no Scroll */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-[80] bg-segura-dark border-b border-white/5 transition-all duration-500 hidden lg:block",
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      )}>
        <Container className="h-10 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={CONTACT_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[9px] font-display font-bold uppercase tracking-widest text-slate-400 hover:text-segura-primary transition-colors group"
            >
              <svg className="w-3 h-3 text-segura-primary group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {CONTACT_INFO.address}
            </a>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-2 text-[9px] font-display font-bold uppercase tracking-widest text-slate-400">
              <svg className="w-3 h-3 text-segura-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Suporte B2B: {CONTACT_INFO.phone}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LocaleSwitcher compact />
            <div className={cn(
              "flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 transition-all duration-700",
              locationLoading ? "opacity-0 invisible" : "opacity-100 visible"
            )}>
              <span className="w-1.5 h-1.5 bg-segura-primary rounded-full animate-pulse"></span>
              <span className="text-[9px] font-display font-bold uppercase tracking-widest text-slate-300">
                Logística Prioritária em <span className="text-white">{region}</span>
              </span>
            </div>
          </div>
        </Container>
      </div>

      <header className={cn(
        "fixed left-0 right-0 z-[70] transition-all duration-500 ease-in-out",
        isScrolled
          ? "top-0 h-16 glass-header border-b border-slate-200/50 shadow-segura-soft"
          : "top-0 lg:top-10 h-24 bg-transparent border-b border-transparent"
      )}>
        {/* Scroll Progress Bar with Technical Glow */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-segura-primary transition-all duration-150 z-[80] shadow-[0_0_10px_#FF9B21]"
          style={{ width: `${scrollProgress}%` }}
        />

        <Container className="h-full flex items-center justify-between">
          <a href="/" className="hover:scale-105 transition-transform duration-500 relative z-10">
            <Logo
              theme={variant === 'dark' && !isScrolled ? 'white' : 'colored'}
              className={cn("transition-all duration-500", isScrolled ? "h-8" : "h-10")}
            />
          </a>

          {/* Desktop Navigation Center */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-2 text-[10px] font-display font-bold uppercase tracking-[0.25em] transition-all group",
                  isScrolled || variant === 'light' ? "text-segura-dark hover:text-segura-primary" : "text-white hover:text-segura-primary"
                )}
              >
                {link.name}
                {/* Magnetic Technical Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-segura-primary transition-all duration-500 group-hover:w-full shadow-segura-glow" />
              </a>
            ))}
          </nav>

          {/* Status & CTA Cluster */}
          <div className="hidden lg:flex items-center gap-8">
            <div className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-700 group cursor-default relative overflow-hidden",
              isOnline
                ? "bg-slate-100/50 border-slate-200/50 hover:border-segura-success/30"
                : "bg-segura-dark/5 border-slate-300/20"
            )}>
              {!isOnline && <div className="absolute inset-0 bg-segura-primary/5 animate-pulse"></div>}

              <span className="flex h-2 w-2 relative z-10">
                {isOnline && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-segura-success opacity-40"></span>}
                <span className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  isOnline ? "bg-segura-success" : "bg-slate-400"
                )}></span>
              </span>
              <span className={cn(
                "text-[9px] font-display font-bold uppercase tracking-widest transition-colors relative z-10 whitespace-nowrap",
                isOnline
                  ? (isScrolled || variant === 'light' ? "text-slate-400 group-hover:text-segura-success" : "text-slate-300 group-hover:text-segura-success")
                  : "text-slate-500 italic"
              )}>
                {statusMessage}
              </span>
            </div>

            <LocaleSwitcher />

            <Button
              href={CONTACT_INFO.whatsapp}
              variant="primary"
              className={cn(
                "text-[10px] py-2.5 px-8 shadow-segura-glow rounded-xl transition-all duration-500",
                isScrolled ? "scale-95" : "scale-100"
              )}
            >
              Cotação B2B
            </Button>
          </div>

          {/* Mobile Menu Trigger - Industrial Styled */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-all rounded-2xl",
              isScrolled || variant === 'light'
                ? "bg-slate-100 text-segura-dark"
                : "bg-white/5 text-white border border-white/10"
            )}
            aria-label="Abrir Menu"
          >
            <span className="w-6 h-[2.5px] bg-current rounded-full" />
            <span className="w-4 h-[2.5px] bg-current rounded-full self-end" />
            <span className="w-6 h-[2.5px] bg-current rounded-full" />
          </button>
        </Container>
      </header>

      {/* Immersive Mobile Command Center Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-segura-dark transition-all duration-700 ease-in-out",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
      )}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-segura-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-segura-primary/5 rounded-full blur-[80px] -ml-32 -mb-32" />

        <Container className="h-full flex flex-col py-10 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <Logo theme="white" className="h-10" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-14 h-14 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-segura-primary transition-all duration-500"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-grow">
            <p className="text-segura-primary font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-12 opacity-60">
              Diretório de Navegação
            </p>

            <div className="mb-8">
              <LocaleSwitcher />
            </div>

            <nav className="flex flex-col gap-6 md:gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter hover:text-segura-primary transition-all duration-500 flex items-center group relative"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="opacity-10 group-hover:opacity-100 group-hover:mr-6 transition-all duration-500 text-2xl md:text-4xl">0{i + 1}</span>
                  {link.name}
                  <span className="ml-6 w-0 h-1 bg-segura-primary transition-all duration-700 group-hover:w-24 shadow-segura-glow" />
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-auto pt-10 border-t border-white/10 grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Suporte Industrial</p>
              <p className="text-white text-3xl font-display font-black tracking-tight leading-none">{CONTACT_INFO.phone}</p>
              <p className="text-slate-500 text-xs font-sans">{CONTACT_INFO.supportTime}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                href={CONTACT_INFO.whatsapp}
                variant="primary"
                className="w-full py-5 text-xs shadow-segura-glow"
              >
                Falar com um Consultor Técnico
              </Button>
              <div className="flex items-center justify-center gap-2 py-4 border border-white/5 rounded-2xl bg-white/5">
                <span className={cn(
                  "h-2 w-2 rounded-full",
                  isOnline ? "bg-segura-success animate-pulse" : "bg-slate-500"
                )}></span>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-slate-400">
                  {isOnline ? 'Time comercial online agora' : statusMessage}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
