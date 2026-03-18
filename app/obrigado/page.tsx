import React from 'react';
import ClientPage from './ClientPage';

export const metadata = {
  title: 'Solicitacao Recebida com Sucesso | Segura EPI',
  description:
    'Recebemos sua solicitacao. Nossa equipe tecnica ja iniciou a analise e entrara em contato rapidamente.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoPage() {
  return <ClientPage />;
}
