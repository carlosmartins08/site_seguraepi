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
import { SeguraIcon } from '../../components/icons/SeguraIcon';

const heroBadges = [
  { label: 'Etica inegociavel', color: 'bg-action-primary/15 text-action-primary' },
  { label: 'Alta performance', color: 'bg-slate-900 text-white' },
  { label: 'Compromisso com a vida', color: 'bg-emerald-100 text-emerald-700' },
];

const cultura: { title: string; desc: string; icon: 'shield' | 'heart' | 'book' | 'spark' }[] = [
  { title: 'Etica inegociavel', desc: 'A transparencia guia todas as nossas decisoes, do estoque a venda.', icon: 'shield' },
  { title: 'Foco no cliente', desc: 'Nao vendemos apenas produtos, entregamos solucoes que salvam vidas.', icon: 'heart' },
  { title: 'Crenca e humildade', desc: 'Trabalho duro, aprendizado continuo e respeito as pessoas.', icon: 'book' },
  { title: 'Alta performance', desc: 'Metas, dados e resultados. Aqui, o merito e reconhecido.', icon: 'spark' },
];

const areas: { title: string; desc: string; icon: 'bolt' | 'truck' | 'check' }[] = [
  {
    title: 'Comercial e Vendas',
    desc: 'Consultores e SDRs (pre-vendas) com perfil consultivo, resiliente e negociacao B2B para abrir portas e fechar contratos.',
    icon: 'bolt',
  },
  {
    title: 'Logistica e Operacoes',
    desc: 'Profissionais organizados para garantir prazo, conferencia rigorosa e processos eficientes que sustentam a operacao.',
    icon: 'truck',
  },
  {
    title: 'Administrativo e Financeiro',
    desc: 'Compras, Fiscal, RH e Financeiro com perfis analiticos, eticos e detalhistas, guardioes da conformidade.',
    icon: 'check',
  },
];

const beneficios = [
  'Salario compativel com o mercado + variavel (para cargos elegiveis).',
  'Plano de Saude e Odontologico (apos experiencia).',
  'Vale-Refeicao.',
  'Seguro de Vida.',
  'Plano de Carreira Estruturado.',
];

export default function ClientPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="light" />

      <Section id="hero-trabalhe" variant="offwhite" className="pt-nav pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Equipe profissional em ambiente corporativo"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/92 to-white/78" />
        </div>
        <Container className="relative max-w-6xl">
          <div className="space-y-8">
            <div>
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Trabalhe Conosco | Segura EPI
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
                Construa sua carreira protegendo vidas.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Somos a Segura EPI. Uma empresa lider em distribuicao, movida por etica, alta performance e o compromisso
                de levar seguranca para quem constroi o futuro. Se voce busca crescimento e proposito, seu lugar e aqui.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-4 py-2 rounded-full text-[11px] font-display font-bold uppercase tracking-[0.2em] border ${badge.color} border-black/5`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="mailto:rh@seguraepi.com.br" variant="primary" className="px-8 py-4 text-sm shadow-glow-brand">
                Ver Vagas Abertas
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Conhecer a Segura EPI
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cultura" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Nossa Cultura"
            title="Por que trabalhar aqui?"
            description="Baseado nos valores inegociaveis do nosso Codigo de Conduta."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cultura.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white flex gap-4 items-start hover:-translate-y-1 hover:shadow-glow-brand transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <SeguraIcon name={item.icon as any} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-display font-bold text-text-primary uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="areas" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Areas de atuacao"
            title="Perfis que buscamos"
            description="Para atrair os perfis especificos dos nossos ICPs e manter o padrao de excelencia."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white flex flex-col gap-3 hover:-translate-y-1 hover:shadow-glow-brand transition-all h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <SeguraIcon name={area.icon as any} />
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary uppercase tracking-tight">{area.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="beneficios" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="O que oferecemos"
            title="Beneficios e crescimento estruturado"
            description="Valorizamos quem caminha conosco e entregamos estrutura para evoluir."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {beneficios.map((beneficio) => (
              <div key={beneficio} className="p-5 rounded-2xl border border-slate-100 shadow-elevation-1 bg-white flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <SeguraIcon name="check" />
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">{beneficio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="candidatar" variant="offwhite">
        <Container className="max-w-5xl">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-elevation-2 border border-white/10 space-y-6">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Como se candidatar</p>
            <h3 className="text-2xl md:text-4xl font-display font-black leading-tight">Quer fazer parte do time Segura EPI?</h3>
            <ul className="space-y-3 text-slate-200 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                Envie seu curriculo para <a className="underline hover:text-action-primaryHover" href="mailto:rh@seguraepi.com.br">rh@seguraepi.com.br</a>.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                Assunto do e-mail: coloque o nome da vaga de interesse (ex: "Vaga Vendedor B2B").
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                Mantenha o LinkedIn atualizado e acompanhe nossas redes sociais para novas oportunidades.
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:rh@seguraepi.com.br" variant="primary" className="px-8 py-4 text-sm shadow-glow-brand">
                Enviar curriculo
              </Button>
              <ContextLink href="/catalogo" className="text-sm text-white">
                Conhecer nossas solucoes
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}
