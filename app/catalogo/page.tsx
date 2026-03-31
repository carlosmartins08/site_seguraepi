import React from 'react';
import ClientPage from './ClientPage';

const TARGET_URL = 'https://catalogo.seguraepi.com.br';

export const metadata = {
  title: 'Catalogo B2B | Segura EPI',
  description: 'Ponte para o catalogo B2B oficial da Segura EPI.',
  alternates: {
    canonical: TARGET_URL,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CatalogoRedirectPage() {
  return <ClientPage />;
}
