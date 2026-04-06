import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Button } from '../components/actions/Button';
import { fieldBase } from '../components/forms/Field';
import { ROUTES, buildUrl } from '../lib/routes';
import { cn } from '../lib/cn';

export default function NotFoundPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-surface">
      <Navbar variant="light" />

      <Section id="not-found" variant="offwhite" className="pt-nav pb-20">
        <Container size="default" className="max-w-5xl space-y-10">
          <div className="space-y-4">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-labelSM">
              Erro 404
            </p>
            <h1 className="text-titleXL md:text-displayXL font-display font-black text-text-primary leading-tight">
              Ops! Parece que você saiu da área segura.
            </h1>
            <p className="text-text-body text-bodyLG leading-relaxed">
              A página que você procura não foi encontrada ou mudou de endereço. Assim como em uma obra ou indústria,
              seguir a rota correta é fundamental. Vamos te colocar de volta no caminho certo.
            </p>
          </div>

          <form action={ROUTES.catalog} method="get" className="bg-bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 shadow-elevation-1">
            <label htmlFor="search-404" className="text-labelMD font-semibold text-text-muted">
              Vamos encontrar o que você precisa
            </label>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <input
                id="search-404"
                name="busca"
                type="search"
                placeholder="Digite o nome do produto (ex: Bota Bracol, Luva Nitrílica) ou o CA..."
                className={cn('flex-1', fieldBase)}
              />
              <Button type="submit" variant="primary" size="lg" className="shadow-glow-brand">
                Buscar no catálogo
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            <p className="text-text-primary font-display font-bold uppercase tracking-[0.2em] text-labelMD">
              Atalhos rápidos
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={`/epi/${'calcados'}`} variant="outline" size="sm">
                Proteção dos Pés
              </Button>
              <Button href={`/epi/${'protecao-maos'}`} variant="outline" size="sm">
                Proteção das Mãos
              </Button>
              <Button href={`/epi/${'trabalho-em-altura'}`} variant="outline" size="sm">
                Trabalho em Altura
              </Button>
              <Button href={ROUTES.home} variant="ghost" size="sm">
                Voltar para a Home
              </Button>
            </div>
          </div>

          <div className="bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-elevation-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-text-primary font-display font-semibold uppercase tracking-[0.18em] text-labelMD">
                Precisa de ajuda humana?
              </p>
              <p className="text-text-body text-bodySM">Nosso time pode te ajudar agora mesmo.</p>
            </div>
            <Button
              href={buildUrl(ROUTES.chat, { intent: 'suporte-404' })}
              variant="primary"
              size="lg"
              className="shadow-glow-brand"
              trackEvent="cta_404_chat"
            >
              Chamar no WhatsApp
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}



