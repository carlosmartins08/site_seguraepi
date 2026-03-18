'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { CONTACT_INFO } from '../../lib/constants';

const badges = [
  { label: 'Logistica GJP + Nordeste', color: 'bg-action-primary/15 text-action-primary' },
  { label: 'CIF ou FOB conforme sua operacao', color: 'bg-slate-900 text-white' },
  { label: 'Conferencia no recebimento', color: 'bg-emerald-100 text-emerald-700' },
];

export default function ClientPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="light" />

      <Section id="hero-entrega" variant="offwhite" className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1600&q=80"
            alt="Centro de distribuição e frota"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/80" />
        </div>
        <Container className="relative max-w-5xl">
          <div className="space-y-8">
            <div>
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Política de Entrega e Frete
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
                Logistica estruturada para entregar com integridade e prazo.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Atendemos desde demandas locais na Grande Joao Pessoa ate grandes pedidos industriais no Nordeste.
                Nosso compromisso e que o EPI chegue dentro do prazo acordado e em perfeito estado.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-4 py-2 rounded-full text-[11px] font-display font-bold uppercase tracking-[0.2em] border ${badge.color} border-black/5`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-glow-brand">
                Consultar frete agora
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Ver catálogo
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="frete-gratis" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="1. Frete Grátis e Condições Especiais"
            title="Custo-beneficio para sua operacao"
            description="Condicoes especiais para Grande Joao Pessoa e demais regioes."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-bg-surfaceMuted">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5-9-5-9 5zm0 5l9 5 9-5m-9 5v5" /></svg>
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary">Grande João Pessoa</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Para pedidos acima de R$ 500,00, oferecemos entrega gratuita via rota propria. Consulte seu vendedor
                para verificar a disponibilidade de rota para o seu bairro.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l1 3h11l1-3h2m-2-5h2l2 5v6a1 1 0 01-1 1h-3m-4 0H9m-4 0H4a1 1 0 01-1-1v-6l2-5h2" /></svg>
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary">Demais Regiões</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Trabalhamos com transportadoras parceiras que garantem prazos competitivos e rastreabilidade da carga.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="modalidades" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="2. Modalidades de Envio (CIF e FOB)"
            title="Definicao no momento da cotacao"
            description="Escolha a modalidade que melhor atende sua necessidade."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary">Frete CIF</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Pago pela Segura EPI em negociacoes especificas ou rotas promocionais. Assumimos pagamento e gestao da
                entrega ate sua porta.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l1 3h11l1-3h2m-2-5h2l2 5v6a1 1 0 01-1 1h-3m-4 0H9m-4 0H4a1 1 0 01-1-1v-6l2-5h2" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary">Frete FOB</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Pago pelo cliente. Voce indica a transportadora de confianca para coletar no nosso CD. Nossa equipe
                deixa a carga paletizada ou embalada, pronta para coleta.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="recebimento" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="3. Protocolo de Recebimento Seguro"
            title="Conferencia no ato da entrega"
            description="A verificacao na hora e a maior garantia de seguranca."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-slate-600">
              {[
                'Conte os volumes e compare com a Nota Fiscal e o Conhecimento de Transporte.',
                'Avalie a embalagem: sinais de violacao, avaria ou umidade.',
                'Ressalva imediata no verso do comprovante se houver problema (item faltante ou trocado).',
                'Comunique nosso setor de Logistica no ato.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-3xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
              Nao aceitaremos reclamacoes de divergencia de volume apos a saida do entregador. A ressalva no comprovante
              e essencial para abrir o chamado.
            </div>
          </div>
        </Container>
      </Section>

      <Section id="prazos" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="4. Prazos de Entrega"
            title="Contagem a partir do faturamento"
            description="O prazo comeca a contar a partir do faturamento do pedido."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary">Rotas locais (frota própria)</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Entregas conforme cronograma da frota propria. Consulte os dias da sua regiao.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary">Transportadoras</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Prazos conforme a tabela da transportadora contratada, variando conforme a cidade de destino.
              </p>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}

