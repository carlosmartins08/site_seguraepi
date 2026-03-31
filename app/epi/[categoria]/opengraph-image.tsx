import { ImageResponse } from 'next/og';
import { CATEGORY_PAGES, CategoryKey } from '../../../lib/catalog/categories';
import { SITE_NAME } from '../../../lib/seo/site';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type Props = {
  params: { categoria: string };
};

const CATEGORY_ACCENT: Record<CategoryKey, string> = {
  'protecao-maos':         '#FF9B21',
  'protecao-respiratoria': '#3B82F6',
  'protecao-auditiva':     '#8B5CF6',
  'protecao-ocular':       '#10B981',
  'trabalho-em-altura':    '#EF4444',
  'calcados':              '#F59E0B',
  'sinalizacao':           '#06B6D4',
};

export default function OpenGraphImage({ params }: Props) {
  const data = CATEGORY_PAGES[params.categoria as CategoryKey];

  const title = data?.heroTitle ?? 'Guia de EPI';
  const description = data?.shortDescription ?? 'Especificação técnica de equipamentos de proteção individual.';
  const badges = data?.badges?.slice(0, 3) ?? [];
  const accent = data ? (CATEGORY_ACCENT[data.key] ?? '#FF9B21') : '#FF9B21';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent bar top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6px',
            backgroundColor: accent,
          }}
        />

        {/* Decorative circle */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: accent,
            opacity: 0.06,
          }}
        />

        {/* Top: brand label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F172A',
              fontSize: '16px',
              fontWeight: 900,
            }}
          >
            SE
          </div>
          <div
            style={{
              fontSize: '16px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: accent,
              fontWeight: 700,
            }}
          >
            {SITE_NAME} · Guia Técnico
          </div>
        </div>

        {/* Center: title + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              lineHeight: 1.0,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: '22px', color: '#94A3B8', lineHeight: 1.4 }}>
            {description}
          </div>

          {/* Badges */}
          {badges.length > 0 && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {badges.map((badge) => (
                <div
                  key={badge}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '999px',
                    border: `1px solid ${accent}40`,
                    backgroundColor: `${accent}15`,
                    color: accent,
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '16px', color: '#475569' }}>seguraepi.com.br/epi/{params.categoria}</div>
          <div style={{ fontSize: '14px', color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            EPI com C.A. Ativo
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
