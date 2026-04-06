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

const heroBadges = [
  { label: 'Segurança com propósito', color: 'bg-action-primary/10 text-action-primary' },
  { label: 'Proteção com alma', color: 'bg-bg-inverse text-text-inverse' },
  { label: 'Tecnologia + humanidade', color: 'bg-status-successSoft text-status-successStrong' },
];

const valores = [
  { title: 'Humanidade', desc: 'Pessoas em primeiro lugar. A empatia guia nossas decisões.', icon: 'heart' },
  { title: 'Excelência Técnica', desc: 'O conhecimento é nossa principal ferramenta de transformação e proteção.', icon: 'shield' },
  { title: 'Confiabilidade', desc: 'Ética, compromisso e respeito são a base de cada entrega que fazemos.', icon: 'check' },
  { title: 'Educação', desc: 'Formamos clientes e equipes mais conscientes, preparados e seguros.', icon: 'book' },
  { title: 'Inovação', desc: 'Buscamos continuamente tecnologias (como a Neo Evolution) e práticas mais eficazes.', icon: 'spark' },
  { title: 'Colaboração', desc: 'Trabalhamos lado a lado com clientes, parceiros e colaboradores.', icon: 'users' },
];

const motivos = [
  {
    title: 'Autoridade Técnica',
    desc: 'Somos especialistas. Nossa equipe atua como mentora técnica para garantir a escolha correta do EPI.',
    icon: 'shield',
  },
  {
    title: 'Olhar Humano',
    desc: 'Entendemos a dor do trabalhador e a responsabilidade do gestor. Somos uma rede de segurança para ambos.',
    icon: 'heart',
  },
  {
    title: 'Inovação Constante',
    desc: 'Conectamos tecnologia e humanidade para oferecer o melhor do mercado.',
    icon: 'spark',
  },
];

const DiretrizCard = ({
  label,
  title,
  desc,
}: {
  label: string;
  title: string;
  desc: string;
}) => (
  <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surface space-y-3">
    <p className="text-labelMD font-display font-bold uppercase tracking-[0.25em] text-action-primary">{label}</p>
    <h4 className="text-titleMD font-display font-bold text-text-primary">{title}</h4>
    <p className="text-text-body text-bodyMD leading-relaxed">{desc}</p>
  </div>
);

const IconBullet = ({ icon }: { icon: string }) => {
  if (icon === 'heart') return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
  if (icon === 'shield') return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
  if (icon === 'check') return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={2.5} /></svg>;
  if (icon === 'book') return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-7 0h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
  if (icon === 'spark') return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v4m0 10v4m9-9h-4M7 12H3m12.364 5.364l-2.828-2.828m0-4.072l2.828-2.828M8.464 8.464l-2.828 2.828m0 4.072l2.828 2.828" /></svg>;
  if (icon === 'users') return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-3-3.87M9 21v-2a4 4 0 013-3.87M12 7a4 4 0 110 8 4 4 0 010-8z" /></svg>;
  return null;
};

export default function ClientPage() {
  return (
    <main id="main-content" className="bg-bg-surface min-h-screen">
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Sobre a Segura EPI', url: `${SITE_URL}${ROUTES.about}` },
      ])} />
      <Navbar variant="light" />

      <Section id="hero-sobre" variant="offwhite" className="pt-nav pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80"
            alt="Equipe de segurança em obra"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/92 to-white/78" />
        </div>
        <Container className="relative max-w-5xl">
          <div className="space-y-8">
            <div>
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-labelSM mb-3">
                Sobre a Segura EPI
              </p>
              <h1 className="text-titleXL md:text-displayXL font-display font-black text-text-primary leading-tight">
                Segurança com Propósito, Proteção com Alma
              </h1>
              <p className="text-text-body text-bodyLG leading-relaxed mt-4 max-w-3xl">
                Cada trabalhador carrega sonhos, histórias e o desejo de voltar para casa em segurança. Nas ruas, nas
                obras, nas alturas ou no chão de fábrica, entregamos confiança, conhecimento e cuidado.
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
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-bodySM shadow-glow-brand">
                Falar com um consultor técnico
              </Button>
              <ContextLink href="/catalogo" className="text-bodySM">
                Ver catálogo
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="essencia" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Nossa Essência"
            title="Segurança é um valor inegociável"
            description="Cada trabalhador carrega sonhos, histórias e a responsabilidade de voltar para casa em segurança."
          />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surface space-y-4">
              <p className="text-text-body text-bodyMD leading-relaxed">
                Não vendemos apenas capacete, luva ou cinto. Entregamos confiança, conhecimento e cuidado para quem está
                na obra, na altura ou no chão de fábrica.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-action-primary/20 bg-action-primary/10 shadow-elevation-1 space-y-3">
              <h3 className="text-titleMD font-display font-bold text-text-primary">Nossa História</h3>
              <p className="text-text-body text-bodyMD leading-relaxed">
                A Segura EPI nasceu da observação de uma falha e da coragem de preenchê-la. Transformamos nossa
                experiência na construção civil e no comércio em uma missão clara: proteger pessoas com inteligência e
                empatia.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="posicionamento" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Nosso Posicionamento"
            title="Não vendemos apenas equipamentos. Entregamos segurança com inteligência, cuidado e compromisso."
            description="Somos mais do que uma distribuidora; somos um ecossistema de soluções. Orientamos, ensinamos e caminhamos juntos."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <DiretrizCard
              label="Propósito"
              title="Proteger vidas com consciência"
              desc="Transformar a segurança do trabalho em algo humano e estratégico, cuidando das pessoas que constroem o país."
            />
            <DiretrizCard
              label="Missão"
              title="Soluções completas em SST"
              desc="Produtos de alta performance, consultoria técnica e gestão com foco no bem-estar das pessoas e na eficiência das empresas."
            />
            <DiretrizCard
              label="Visão"
              title="Referência nacional em proteção"
              desc="Ser referência nacional em soluções integradas de proteção individual e coletiva, reconhecida pela excelência no atendimento, inovação técnica e compromisso absoluto com a vida."
            />
          </div>
        </Container>
      </Section>

      <Section id="valores" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Valores"
            title="O DNA da Segura EPI"
            description="Princípios que guiam cada decisão e entrega."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surface flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-action-primary/10 text-action-primary flex items-center justify-center">
                  <IconBullet icon={valor.icon} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-titleMD font-display font-bold text-text-primary">{valor.title}</h4>
                  <p className="text-text-body text-bodySM leading-relaxed">{valor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="confiar" variant="offwhite">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Por que confiar na Segura EPI?"
            title="Autoridade técnica, olhar humano e inovação constante"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {motivos.map((motivo) => (
              <div key={motivo.title} className="p-6 rounded-xl border border-border-muted shadow-elevation-1 bg-bg-surface space-y-3">
                <div className="w-11 h-11 rounded-xl bg-action-primary/10 text-action-primary flex items-center justify-center">
                  <IconBullet icon={motivo.icon} />
                </div>
                <h4 className="text-titleMD font-display font-bold text-text-primary">{motivo.title}</h4>
                <p className="text-text-body text-bodySM leading-relaxed">{motivo.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="compromisso" variant="default">
        <Container className="max-w-5xl">
          <div className="bg-bg-inverse text-text-inverse rounded-2xl p-8 md:p-12 shadow-elevation-2 border border-bg-surface/10 space-y-6">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-labelSM">Nosso compromisso final</p>
            <h3 className="text-titleLG md:text-displayXL font-display font-black leading-tight">
              &quot;Conectamos tecnologia e humanidade para proteger o que mais importa: a vida.&quot;
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-bodySM shadow-glow-brand">
                Falar com um mentor técnico
              </Button>
              <ContextLink href="/catalogo" className="text-bodySM text-text-inverse">
                Explorar catálogo de EPIs
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}






