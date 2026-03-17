import { ImageResponse } from 'next/og';
import { DEFAULT_TITLE, SITE_NAME } from '../lib/seo/site';

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#FF9B21',
              fontWeight: 700,
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05 }}>
            {DEFAULT_TITLE}
          </div>
          <div style={{ fontSize: 24, color: '#CBD5F5', maxWidth: 900 }}>
            EPI para empresas com orientação técnica, validação de C.A. e atendimento consultivo.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ fontSize: 18, color: '#94A3B8' }}>
            seguraepi.com.br
          </div>
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 26,
              backgroundColor: '#FF9B21',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F172A',
              fontSize: 44,
              fontWeight: 900,
            }}
          >
            SE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
