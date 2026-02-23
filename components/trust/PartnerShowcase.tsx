import React from 'react';
import Image from 'next/image';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { SeguraIcon } from '../icons/SeguraIcon';
import { cn } from '../../lib/cn';

export type PartnerItem = {
  name: string;
  logoSrc?: string;
  href?: string;
  categoryHint?: string;
  caValidUntil?: string;
};

interface PartnerShowcaseProps {
  id?: string;
  title?: string;
  subtitle?: string;
  kpiText?: string;
  partners: PartnerItem[];
  ctaHref?: string;
  ctaLabel?: string;
}

export const PartnerShowcase: React.FC<PartnerShowcaseProps> = ({
  id = 'parceiros',
  title = 'Marcas que respeitam a vida.',
  subtitle = 'Selecionamos fabricantes com C.A. ativo, rastreabilidade e compromisso ético.',
  kpiText = '42 parceiros auditados ⬢ 100% CA válido',
  partners,
  ctaHref = '/catalogo?filtro=marca',
  ctaLabel = 'Ver todas as marcas',
}) => {
  return (
    <Section id={id} variant="offwhite" className="py-20 md:py-28">
      <Container>
        <div className="bg-white rounded-4xl border border-white/40 shadow-elevation-1 px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8">
            <div className="space-y-3 max-w-3xl">
              <p className="text-action-primary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
                Curadoria Técnica
              </p>
              <h3 className="text-3xl md:text-4xl font-display font-black text-text-primary uppercase tracking-tight">
                {title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-elevation-1">
              <span className="w-10 h-10 rounded-xl bg-action-primary/20 text-action-primary flex items-center justify-center">
                <SeguraIcon name="shield" className="w-5 h-5" />
              </span>
              <span className="text-sm font-display font-bold uppercase tracking-[0.2em]">{kpiText}</span>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href || '#'}
                  target={partner.href ? '_blank' : undefined}
                  rel={partner.href ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 text-white p-5 flex flex-col gap-3 shadow-elevation-1 transition-all duration-300 min-h-[110px]',
                    'hover:-translate-y-1 hover:shadow-glow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
                  )}
                  aria-label={`Marca ${partner.name}${partner.categoryHint ? ` - ${partner.categoryHint}` : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden">
                      {partner.logoSrc ? (
                <Image
                  src={partner.logoSrc}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                  sizes="120px"
                />
              ) : (
                <span className="text-sm font-display font-bold uppercase tracking-[0.2em] text-slate-200 group-hover:text-white transition">
                  {partner.name}
                </span>
              )}
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-slate-300 group-hover:text-white transition">
                        {partner.name}
                      </p>
                      {partner.categoryHint && (
                        <p className="text-slate-400 text-xs">{partner.categoryHint}</p>
                      )}
                    </div>
                  </div>
                  {partner.caValidUntil && (
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                      <SeguraIcon name="clock" className="w-4 h-4 text-action-primary" />
                      CA válido até {partner.caValidUntil}
                    </div>
                  )}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-action-primary/0 via-white/5 to-action-primary/0 opacity-0 group-hover:opacity-100 transition duration-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-[0.2em] text-text-primary hover:text-action-primaryHover transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

