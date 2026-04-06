'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '../../components/layout/Navbar';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { JsonLd } from '../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd } from '../../lib/seo/schema';
import { SITE_URL } from '../../lib/seo/site';
import { ROUTES } from '../../lib/routes';
import { CONTACT_INFO } from '../../lib/constants';
import { SeguraIcon } from '../../components/icons/SeguraIcon';

const heroBadges = [
  { label: 'Ética inegociável', color: 'bg-action-primary/10 text-action-primary' },
  { label: 'Alta performance', color: 'bg-bg-inverse text-text-inverse' },
  { label: 'Compromisso com a vida', color: 'bg-status-successSoft text-status-successStrong' },
];

const cultura: { title: string; desc: string; icon: 'shield' | 'heart' | 'book' | 'spark' }[] = [
  { title: 'Ética inegociável', desc: 'A transparência guia todas as nossas decisões, do estoque à venda.', icon: 'shield' },
  { title: 'Foco no cliente', desc: 'Não vendemos apenas produtos, entregamos soluções que salvam vidas.', icon: 'heart' },
  { title: 'Crença e humildade', desc: 'Trabalho duro, aprendizado contínuo e respeito às pessoas.', icon: 'book' },
  { title: 'Alta performance', desc: 'Metas, dados e resultados. Aqui, o mérito é reconhecido.', icon: 'spark' },
];

const areas: { title: string; desc: string; icon: 'bolt' | 'truck' | 'check' }[] = [
  {
    title: 'Comercial e Vendas',
    desc: 'Consultores e SDRs (pré-vendas) com perfil consultivo, resiliente e negociação B2B para abrir portas e fechar contratos.',
    icon: 'bolt',
  },
  {
    title: 'Logística e Operações',
    desc: 'Profissionais organizados para garantir prazo, conferência rigorosa e processos eficientes que sustentam a operação.',
    icon: 'truck',
  },
  {
    title: 'Administrativo e Financeiro',
    desc: 'Compras, Fiscal, RH e Financeiro com perfis analíticos, éticos e detalhistas, guardiões da conformidade.',
    icon: 'check',
  },
];

const beneficios = [
  'Salário compatível com o mercado + variável (para cargos elegíveis).',
  'Plano de Saúde e Odontológico (após experiência).',
  'Vale-Refeição.',
  'Seguro de Vida.',
  'Plano de Carreira Estruturado.',
];

export default function ClientPage() {
  return (
    <main id="main-content" className="bg-bg-surface min-h-screen">
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Trabalhe Conosco', url: `${SITE_URL}${ROUTES.careers}` },
      ])} />
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
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-labelSM mb-3">
                Trabalhe Conosco | Segura EPI
              </p>
              <h1 className="text-titleXL md:text-displayXL font-display font-black text-text-primary leading-tight">
                Construa sua carreira protegendo vidas.
              </h1>
              <p className="text-text-body text-bodyLG leading-relaxed mt-4 max-w-3xl">
                Somos a Segura EPI. Uma empresa líder em distribuição, movida por ética, alta performance e o compromisso
                de levar segurança para quem constrói o futuro. Se você busca crescimento e propósito, seu lugar é aqui.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-4 py-2 rounded-full text-labelSM font-display font-bold uppercase tracking-[0.2em] border ${badge.color} border-black/10`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="mailto:rh@seguraepi.com.br" variant="primary" size="lg" className="shadow-glow-brand">
                Ver Vagas Abertas
              </Button>
              <ContextLink href="/catalogo" className="text-bodySM">
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
            description="Baseado nos valores inegociáveis do nosso Código de Conduta."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cultura.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surface flex gap-4 items-start hover:-translate-y-1 hover:shadow-glow-brand transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-action-primary/10 text-action-primary flex items-center justify-center">
                  <SeguraIcon name={item.icon as any} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-titleMD font-display font-bold text-text-primary uppercase tracking-tight">{item.title}</h4>
                  <p className="text-text-body text-bodySM leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="areas" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Áreas de atuação"
            title="Perfis que buscamos"
            description="Para atrair os perfis específicos dos nossos ICPs e manter o padrão de excelência."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surface flex flex-col gap-3 hover:-translate-y-1 hover:shadow-glow-brand transition-all h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-action-primary/10 text-action-primary flex items-center justify-center">
                  <SeguraIcon name={area.icon as any} />
                </div>
                <h4 className="text-titleMD font-display font-bold text-text-primary uppercase tracking-tight">{area.title}</h4>
                <p className="text-text-body text-bodySM leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="beneficios" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="O que oferecemos"
            title="Benefícios e crescimento estruturado"
            description="Valorizamos quem caminha conosco e entregamos estrutura para evoluir."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {beneficios.map((beneficio) => (
              <div key={beneficio} className="p-5 rounded-2xl border border-border-muted shadow-elevation-1 bg-bg-surface flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-action-primary/10 text-action-primary flex items-center justify-center">
                  <SeguraIcon name="check" />
                </div>
                <p className="text-text-body text-bodySM leading-relaxed">{beneficio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="candidatar" variant="offwhite">
        <Container className="max-w-5xl">
          <div className="bg-bg-inverse text-text-inverse rounded-2xl p-8 md:p-12 shadow-elevation-2 border border-bg-surface/10 space-y-6">
            <p className="text-action-primary font-display font-semibold uppercase tracking-[0.18em] text-labelSM">Como se candidatar</p>
            <h3 className="text-titleLG md:text-titleXL font-display font-semibold leading-tight">Quer fazer parte do time Segura EPI?</h3>
            <ul className="space-y-3 text-text-faint text-bodySM leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-action-primary mt-2" />
                Envie seu currículo para <a className="underline hover:text-action-primaryHover" href="mailto:rh@seguraepi.com.br">rh@seguraepi.com.br</a>.
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
              <Button href="mailto:rh@seguraepi.com.br" variant="primary" size="lg" className="shadow-glow-brand">
                Enviar currículo
              </Button>
              <ContextLink href="/catalogo" className="text-bodySM text-text-inverse">
                Conhecer nossas soluções
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}




