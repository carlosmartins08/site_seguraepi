import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Button } from '../components/actions/Button';
import { ROUTES, buildUrl } from '../lib/routes';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="light" />

      <Section id="not-found" variant="offwhite" className="pt-32 pb-20">
        <Container className="max-w-5xl space-y-10">
          <div className="space-y-4">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
              Erro 404
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
              Ops! Parece que voce saiu da area segura.
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              A pagina que voce procura nao foi encontrada ou mudou de endereco. Assim como em uma obra ou industria,
              seguir a rota correta e fundamental. Vamos te colocar de volta no caminho certo.
            </p>
          </div>

          <form action={ROUTES.catalog} method="get" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-elevation-1">
            <label htmlFor="search-404" className="text-xs font-display font-bold uppercase tracking-[0.2em] text-slate-500">
              Vamos encontrar o que voce precisa
            </label>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <input
                id="search-404"
                name="busca"
                type="search"
                placeholder="Digite o nome do produto (ex: Bota Bracol, Luva Nitrilica) ou o CA..."
                className="flex-1 rounded-2xl border border-slate-200 px-5 py-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-action-primary/40 focus:border-action-primary"
              />
              <Button type="submit" variant="primary" className="px-8 py-4 shadow-glow-brand">
                Buscar no catalogo
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            <p className="text-text-primary font-display font-bold uppercase tracking-[0.2em] text-xs">
              Atalhos rapidos
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={`/epi/${'calcados'}`} variant="outline" className="px-6 py-3">
                Protecao dos Pes
              </Button>
              <Button href={`/epi/${'protecao-maos'}`} variant="outline" className="px-6 py-3">
                Protecao das Maos
              </Button>
              <Button href={`/epi/${'trabalho-em-altura'}`} variant="outline" className="px-6 py-3">
                Trabalho em Altura
              </Button>
              <Button href={ROUTES.home} variant="ghost" className="px-6 py-3">
                Voltar para a Home
              </Button>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-elevation-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-text-primary font-display font-bold uppercase tracking-[0.2em] text-xs">
                Precisa de ajuda humana?
              </p>
              <p className="text-slate-600 text-sm">Nosso time pode te ajudar agora mesmo.</p>
            </div>
            <Button
              href={buildUrl(ROUTES.chat, { intent: 'suporte-404' })}
              variant="primary"
              className="px-8 py-4 shadow-glow-brand"
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
