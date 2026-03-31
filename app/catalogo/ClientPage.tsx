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

      <Section id="catalog-bridge-hero" variant="offwhite" className="pt-nav pb-16">
        <Container size="default" className="max-w-5xl">
          <SectionTitle
            subtitle="Catalogo B2B"
            title="Estamos redirecionando para catalogo.seguraepi.com.br"
            description="O catalogo digital agora vive em um subdominio dedicado, otimizado para compras B2B com login, lista tecnica e SLA de atendimento."
          />

          <div className="space-y-6 bg-bg-surface p-8 md:p-10 rounded-2xl border border-border-subtle shadow-elevation-1">
            <div className="flex flex-wrap gap-3">
              <Button href={targetUrl} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                Acessar catalogo B2B
              </Button>
              <Button href="/centro-tecnico" variant="outline" size="lg">
                Ir para Centro Tecnico
              </Button>
              <Button href={CONTACT_INFO.whatsapp} variant="ghost" size="lg">
                Falar com consultor
              </Button>
            </div>

            <div className="text-sm text-text-body space-y-3">
              <p>Esta pagina e apenas uma ponte estrategica. O catalogo completo e a emissao de pedidos ficam no subdominio dedicado.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Compra B2B com orientacao tecnica.</li>
                <li>Sem vitrine de varejo; nao usamos /catalogo como loja.</li>
                <li>Login e precos podem variar por perfil de cliente.</li>
              </ul>
              <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
                <span className="h-2 w-2 rounded-full bg-action-primary animate-pulse" />
                {autoRedirect
                  ? `Redirecionando em ${seconds}s...`
                  : 'Redirecionamento automatico pausado'}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs">
              <Button
                onClick={() => setAutoRedirect(true)}
                variant="primary"
                size="sm"
                disabled={autoRedirect}
              >
                Retomar auto-redirect
              </Button>
              <Button
                onClick={() => setAutoRedirect(false)}
                variant="outline"
                size="sm"
                disabled={!autoRedirect}
              >
                Pausar
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="catalog-bridge-info" variant="default" className="pb-24">
        <Container className="grid md:grid-cols-3 gap-6 max-w-6xl">
          <div className="p-6 rounded-2xl border border-border-subtle bg-bg-surface shadow-elevation-1">
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">Por que subdominio?</h3>
            <p className="text-text-body text-sm leading-relaxed">Isolamos performance, login e seguranca do catalogo B2B em infraestrutura propria.</p>
          </div>
          <div className="p-6 rounded-2xl border border-border-subtle bg-bg-surface shadow-elevation-1">
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">Sem vitrine de varejo</h3>
            <p className="text-text-body text-sm leading-relaxed">Aqui nao exibimos precos avulsos; toda compra passa por curadoria tecnica.</p>
          </div>
          <div className="p-6 rounded-2xl border border-border-subtle bg-bg-surface shadow-elevation-1">
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">Centro Tecnico</h3>
            <p className="text-text-body text-sm leading-relaxed">Precisa validar CA, norma ou aplicacao? Use o Centro Tecnico antes de comprar.</p>
            <ContextLink href="/centro-tecnico" className="mt-2">Abrir Centro Tecnico</ContextLink>
          </div>
        </Container>
      </Section>

    </main>
  );
}
