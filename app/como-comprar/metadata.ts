import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/seo/site';

export const metadata: Metadata = {
  title: 'Como Comprar e Cadastro de Clientes',
  description:
    'Como comprar EPI na Segura EPI: cadastro B2B em até 24 horas úteis, compra à vista ou faturada, documentação necessária e política de crédito.',
  alternates: {
    canonical: `${SITE_URL}/como-comprar`,
  },
};
