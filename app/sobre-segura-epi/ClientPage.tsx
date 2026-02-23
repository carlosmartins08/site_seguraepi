'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { SectionTitle } from '../../components/typography/SectionTitle';
import { Button } from '../../components/actions/Button';
import { ContextLink } from '../../components/actions/ContextLink';
import { LegalModal } from '../../components/layout/LegalModal';
import { CONTACT_INFO } from '../../lib/constants';
import { LEGAL_TEXTS } from '../../lib/legal';

const heroBadges = [
  { label: 'Segurança com propósito', color: 'bg-segura-primary/15 text-segura-primary' },
  { label: 'Ecossistema de soluções', color: 'bg-slate-900 text-white' },
  { label: 'Tecnologia + humanidade', color: 'bg-emerald-100 text-emerald-700' },
];

const valores = [
  { title: 'Humanidade', desc: 'Pessoas em primeiro lugar. Empatia guia decisões.', icon: 'heart' },
  { title: 'Excelência Técnica', desc: 'Conhecimento como ferramenta de transformação.', icon: 'shield' },
  { title: 'Confiabilidade', desc: 'Ética, compromisso e respeito em cada entrega.', icon: 'check' },
  { title: 'Educação', desc: 'Formar clientes e equipes mais conscientes.', icon: 'book' },
  { title: 'Inovação', desc: 'Tecnologia (Neo Evolution) e melhores práticas.', icon: 'spark' },
  { title: 'Colaboração', desc: 'Trabalhamos lado a lado com clientes e parceiros.', icon: 'users' },
];

const motivos = [
  { title: 'Autoridade Técnica', desc: 'Mentoria para escolher o EPI certo; não apenas tirar pedido.', icon: 'shield' },
  { title: 'Olhar Humano', desc: 'Rede de segurança para gestor e trabalhador.', icon: 'heart' },
  { title: 'Inovação Constante', desc: 'Tecnologia + cuidado para entregar o melhor do mercado.', icon: 'spark' },
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
  <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
    <p className="text-xs font-display font-bold uppercase tracking-[0.25em] text-segura-primary">{label}</p>
    <h4 className="text-xl font-display font-bold text-segura-dark">{title}</h4>
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
  const [legalModal, setLegalModal] = useState<{ open: boolean; type: 'privacy' | 'terms' }>({
    open: false,
    type: 'privacy',
  });

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="light" />

      <Section id="hero-sobre" variant="offwhite" className="pt-32 pb-16 relative overflow-hidden">
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
              <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                Sobre a Segura EPI
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-black text-segura-dark leading-tight">
                Segurança com propósito, proteção com alma.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4 max-w-3xl">
                Conectamos tecnologia e humanidade para que cada trabalhador volte para casa em segurança. Somos um
                ecossistema de soluções: produtos, consultoria, educação e inovação.
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
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-segura-glow">
                Falar com um consultor
              </Button>
              <ContextLink href="/catalogo" className="text-sm">
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
            title="Segurança é valor, não protocolo"
            description="Cuidamos de quem carrega sonhos, histórias e a responsabilidade de voltar para casa em segurança."
          />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Não vendemos só capacete, luva ou cinto. Entregamos confiança, conhecimento e cuidado. Respeitamos quem
                está na obra, na altura ou no chão de fábrica — e quem espera em casa.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-segura-primary/30 bg-segura-primary/5 shadow-segura-soft space-y-3">
              <h3 className="text-xl font-display font-bold text-segura-dark">Nossa História</h3>
              <p className="text-slate-600 leading-relaxed">
                Nascemos ao enxergar uma falha e ter coragem de preenchê-la: transformar experiência em construção civil
                e comércio em missão de proteger com inteligência e empatia.
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
            description="Somos um ecossistema de soluções: orientamos, ensinamos e caminhamos junto com cada cliente."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <DiretrizCard
              label="Propósito"
              title="Proteger vidas com consciência"
              desc="Transformar a segurança do trabalho em algo humano e estratégico, cuidando de quem constrói o país."
            />
            <DiretrizCard
              label="Missão"
              title="Soluções completas em SST"
              desc="Produtos de alta performance, consultoria técnica e gestão para bem-estar e eficiência das empresas."
            />
            <DiretrizCard
              label="Visão"
              title="Referência nacional"
              desc="Excelência no atendimento, inovação técnica e compromisso absoluto com a vida."
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
                className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-segura-primary/15 text-segura-primary flex items-center justify-center">
                  <IconBullet icon={valor.icon} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-display font-bold text-segura-dark">{valor.title}</h4>
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
            title="Autoridade técnica, olhar humano e inovação constante"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {motivos.map((motivo) => (
              <div key={motivo.title} className="p-6 rounded-3xl border border-slate-100 shadow-segura-soft bg-white space-y-3">
                <div className="w-11 h-11 rounded-xl bg-segura-primary/15 text-segura-primary flex items-center justify-center">
                  <IconBullet icon={motivo.icon} />
                </div>
                <h4 className="text-lg font-display font-bold text-segura-dark">{motivo.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{motivo.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="compromisso" variant="default">
        <Container className="max-w-5xl">
          <div className="bg-slate-900 text-white rounded-4xl p-8 md:p-12 shadow-segura-hover border border-white/10 space-y-6">
            <p className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">Nosso compromisso final</p>
            <h3 className="text-2xl md:text-4xl font-display font-black leading-tight">
              “Conectamos tecnologia e humanidade para proteger o que mais importa: a vida.”
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button href={CONTACT_INFO.whatsapp} variant="primary" className="px-8 py-4 text-sm shadow-segura-glow">
                Falar com um mentor técnico
              </Button>
              <ContextLink href="/catalogo" className="text-sm text-white">
                Explorar catálogo de EPIs
              </ContextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Footer
        onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
      />

      <LegalModal
        isOpen={legalModal.open}
        onClose={() => setLegalModal({ ...legalModal, open: false })}
        title={LEGAL_TEXTS[legalModal.type].title}
        content={LEGAL_TEXTS[legalModal.type].content}
        updatedAt={LEGAL_TEXTS[legalModal.type].updatedAt}
      />
    </main>
  );
}
