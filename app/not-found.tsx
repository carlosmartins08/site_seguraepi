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
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      <Section id="not-found" variant="offwhite" className="pt-nav pb-20">
        <Container size="default" className="max-w-5xl space-y-10">
          <div className="space-y-4">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
              Erro 404
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
              Ops! Parece que voce saiu da area segura.
            </h1>
            <p className="text-text-body text-lg leading-relaxed">
              A pagina que voce procura nao foi encontrada ou mudou de endereco. Assim como em uma obra ou industria,
              seguir a rota correta e fundamental. Vamos te colocar de volta no caminho certo.
            </p>
          </div>

          <form action={ROUTES.catalog} method="get" className="bg-bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 shadow-elevation-1">
            <label htmlFor="search-404" className="text-xs font-semibold text-text-muted">
              Vamos encontrar o que voce precisa
            </label>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <input
                id="search-404"
                name="busca"
                type="search"
                placeholder="Digite o nome do produto (ex: Bota Bracol, Luva Nitrilica) ou o CA..."
                className={cn('flex-1', fieldBase)}
              />
              <Button type="submit" variant="primary" size="lg" className="shadow-glow-brand">
                Buscar no catalogo
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            <p className="text-text-primary font-display font-bold uppercase tracking-[0.2em] text-xs">
              Atalhos rapidos
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={`/epi/${'calcados'}`} variant="outline" size="sm">
                Protecao dos Pes
              </Button>
              <Button href={`/epi/${'protecao-maos'}`} variant="outline" size="sm">
                Protecao das Maos
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
              <p className="text-text-primary font-display font-semibold uppercase tracking-[0.18em] text-xs">
                Precisa de ajuda humana?
              </p>
              <p className="text-text-body text-sm">Nosso time pode te ajudar agora mesmo.</p>
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



