'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { CONTACT_INFO } from '../../lib/constants';

const TARGET_URL = 'https://catalogo.seguraepi.com.br';

const buildTargetUrl = (search = '') => `${TARGET_URL}${search || ''}`;

export default function CatalogoRedirectPage() {
  const [autoRedirect, setAutoRedirect] = useState(true);
  const [seconds, setSeconds] = useState(4);
  const [targetUrl, setTargetUrl] = useState(TARGET_URL);

  useEffect(() => {
    const search = window.location.search;
    const nextUrl = buildTargetUrl(search);
    setTargetUrl(nextUrl);

    if (!autoRedirect) return;
    const countdown = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    const timer = setTimeout(() => {
      window.location.href = nextUrl;
    }, seconds * 1000);
    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRedirect]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      <Section id="catalog-bridge-hero" variant="offwhite" className="pt-nav pb-20">
        <Container className="max-w-5xl">
          <SectionTitle
            subtitle="Catálogo B2B"
            title="Estamos redirecionando para catalogo.seguraepi.com.br"
            description="O catálogo digital agora vive em um subdomínio dedicado, otimizado para compras B2B com login, lista técnica e SLA de atendimento."
          />

          <div className="space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-elevation-1">
            <div className="flex flex-wrap gap-3">
              <Button href={targetUrl} variant="primary" className="px-8" target="_blank" rel="noopener noreferrer">
                Acessar catálogo B2B
              </Button>
              <Button href="/centro-tecnico" variant="outline" className="px-8">
                Ir para Centro Técnico
              </Button>
              <Button href={CONTACT_INFO.whatsapp} variant="ghost" className="px-6">
                Falar com consultor
              </Button>
            </div>

            <div className="text-sm text-slate-600 space-y-3">
              <p>Esta página é apenas uma ponte estratégica. O catálogo completo e a emissão de pedidos ficam no subdomínio dedicado.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Compra B2B com orientação técnica.</li>
                <li>Sem vitrine de varejo; não usamos /catalogo como loja.</li>
                <li>Login e preços podem variar por perfil de cliente.</li>
              </ul>
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-action-primary animate-pulse" />
                {autoRedirect
                  ? `Redirecionando em ${seconds}s...`
                  : 'Redirecionamento automático pausado'}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs">
              <button
                onClick={() => setAutoRedirect(true)}
                className="px-4 py-2 rounded-lg border border-action-primary text-action-primary font-display font-bold uppercase tracking-[0.2em] hover:bg-action-primary hover:text-white transition-colors"
                disabled={autoRedirect}
              >
                Retomar auto-redirect
              </button>
              <button
                onClick={() => setAutoRedirect(false)}
                className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 font-display font-bold uppercase tracking-[0.2em] hover:border-slate-400 transition-colors"
                disabled={!autoRedirect}
              >
                Pausar
              </button>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="catalog-bridge-info" variant="default" className="pb-28">
        <Container className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-elevation-1">
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">Por que subdomínio?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Isolamos performance, login e segurança do catálogo B2B em infraestrutura própria.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-elevation-1">
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">Sem vitrine de varejo</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Aqui não exibimos preços avulsos; toda compra passa por curadoria técnica.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-elevation-1">
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">Centro Técnico</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Precisa validar CA, norma ou aplicação? Use o Centro Técnico antes de comprar.</p>
            <ContextLink href="/centro-tecnico" className="mt-2">Abrir Centro Técnico</ContextLink>
          </div>
        </Container>
      </Section>

    </main>
  );
}

