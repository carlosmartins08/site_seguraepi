import React from 'react';
import ClientPage from './ClientPage';

export const metadata = {
  title: 'Solicitação Recebida com Sucesso | Segura EPI',
  description:
    'Recebemos sua solicitação. Nossa equipe técnica já iniciou a análise e entrará em contato rapidamente.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoPage() {
  return <ClientPage />;
}
