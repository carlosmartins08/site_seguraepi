import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/seo/site';

export const metadata: Metadata = {
  title: 'Como Comprar e Cadastro de Clientes',
  description:
    'Como comprar EPI na Segura EPI: cadastro B2B em ate 24 horas uteis, compra a vista ou faturada, documentacao necessaria e politica de credito.',
  alternates: {
    canonical: `${SITE_URL}/como-comprar`,
  },
};