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

const heroBadges = [
  { label: 'Seguranca com proposito', color: 'bg-action-primary/15 text-action-primary' },
  { label: 'Protecao com alma', color: 'bg-slate-900 text-white' },
  { label: 'Tecnologia + humanidade', color: 'bg-emerald-100 text-emerald-700' },
];

const valores = [
  { title: 'Humanidade', desc: 'Pessoas em primeiro lugar. A empatia guia nossas decisoes.', icon: 'heart' },
  { title: 'Excelencia Tecnica', desc: 'O conhecimento e nossa principal ferramenta de transformacao e protecao.', icon: 'shield' },
  { title: 'Confiabilidade', desc: 'Etica, compromisso e respeito sao a base de cada entrega que fazemos.', icon: 'check' },
  { title: 'Educacao', desc: 'Formamos clientes e equipes mais conscientes, preparados e seguros.', icon: 'book' },
  { title: 'Inovacao', desc: 'Buscamos continuamente tecnologias (como a Neo Evolution) e praticas mais eficazes.', icon: 'spark' },
  { title: 'Colaboracao', desc: 'Trabalhamos lado a lado com clientes, parceiros e colaboradores.', icon: 'users' },
];

const motivos = [
  {
    title: 'Autoridade Tecnica',
    desc: 'Somos especialistas. Nossa equipe atua como mentora tecnica para garantir a escolha correta do EPI.',
    icon: 'shield',
  },
  {
    title: 'Olhar Humano',
    desc: 'Entendemos a dor do trabalhador e a responsabilidade do gestor. Somos uma rede de seguranca para ambos.',
    icon: 'heart',
  },
  {
    title: 'Inovacao Constante',
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
  <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
    <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-action-primary">{label}</p>
    <h4 className="text-xl font-display font-bold text-text-primary">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
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
    <main className="bg-white min-h-screen">
      <Navbar variant="light" />

      <Section id="hero-sobre" variant="offwhite" className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80"
            alt="Equipe de seguranca em obra"
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
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Sobre a Segura EPI
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-text-primary leading-tight">
                Seguranca com Proposito, Protecao com Alma
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Cada trabalhador carrega sonhos, historias e o desejo de voltar para casa em seguranca. Nas ruas, nas
                obras, nas alturas ou no chao de fabrica, entregamos confianca, conhecimento e cuidado.
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
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-glow-brand">
                Falar com um consultor tecnico
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
                Ver catalogo
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="essencia" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Nossa Essencia"
            title="Seguranca e um valor inegociavel"
            description="Cada trabalhador carrega sonhos, historias e a responsabilidade de voltar para casa em seguranca."
          />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Nao vendemos apenas capacete, luva ou cinto. Entregamos confianca, conhecimento e cuidado para quem esta
                na obra, na altura ou no chao de fabrica.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-action-primary/30 bg-action-primary/5 shadow-elevation-1 space-y-3">
              <h3 className="text-xl font-display font-bold text-text-primary">Nossa Historia</h3>
              <p className="text-slate-600 leading-relaxed">
                A Segura EPI nasceu da observacao de uma falha e da coragem de preenche-la. Transformamos nossa
                experiencia na construcao civil e no comercio em uma missao clara: proteger pessoas com inteligencia e
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
            title="Nao vendemos apenas equipamentos. Entregamos seguranca com inteligencia, cuidado e compromisso."
            description="Somos mais do que uma distribuidora; somos um ecossistema de solucoes. Orientamos, ensinamos e caminhamos juntos."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <DiretrizCard
              label="Proposito"
              title="Proteger vidas com consciencia"
              desc="Transformar a seguranca do trabalho em algo humano e estrategico, cuidando das pessoas que constroem o pais."
            />
            <DiretrizCard
              label="Missao"
              title="Solucoes completas em SST"
              desc="Produtos de alta performance, consultoria tecnica e gestao com foco no bem-estar das pessoas e na eficiencia das empresas."
            />
            <DiretrizCard
              label="Visao"
              title="Referencia nacional em protecao"
              desc="Ser referencia nacional em solucoes integradas de protecao individual e coletiva, reconhecida pela excelencia no atendimento, inovacao tecnica e compromisso absoluto com a vida."
            />
          </div>
        </Container>
      </Section>

      <Section id="valores" variant="default">
        <Container className="max-w-6xl">
          <SectionTitle
            subtitle="Valores"
            title="O DNA da Segura EPI"
            description="Principios que guiam cada decisao e entrega."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <IconBullet icon={valor.icon} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-display font-bold text-text-primary">{valor.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{valor.desc}</p>
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
            title="Autoridade tecnica, olhar humano e inovacao constante"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {motivos.map((motivo) => (
              <div key={motivo.title} className="p-6 rounded-3xl border border-slate-100 shadow-elevation-1 bg-white space-y-3">
                <div className="w-11 h-11 rounded-xl bg-action-primary/15 text-action-primary flex items-center justify-center">
                  <IconBullet icon={motivo.icon} />
                </div>
                <h4 className="text-lg font-display font-bold text-text-primary">{motivo.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{motivo.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="compromisso" variant="default">
        <Container className="max-w-5xl">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-elevation-2 border border-white/10 space-y-6">
            <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Nosso compromisso final</p>
            <h3 className="text-2xl md:text-4xl font-display font-black leading-tight">
              &quot;Conectamos tecnologia e humanidade para proteger o que mais importa: a vida.&quot;
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-glow-brand">
                Falar com um mentor tecnico
              </Button>
              <ContextLink href="/catalogo" className="text-sm text-white">
                Explorar catalogo de EPIs
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

    </main>
  );
}
