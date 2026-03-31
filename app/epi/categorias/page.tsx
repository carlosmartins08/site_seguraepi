import { SITE_URL } from '../../../lib/seo/site';
import { ROUTES } from '../../../lib/routes';
import { JsonLd } from '../../../components/seo/JsonLd';
import { buildBreadcrumbJsonLd } from '../../../lib/seo/schema';
import ClientPage from './ClientPage';

export const metadata = {
  title: 'Categorias de EPI | Guia Técnico por Área de Proteção | Segura EPI',
  description:
    'Explore todas as categorias de EPI por área do corpo: proteção para cabeça, olhos, mãos, pés e mais. Guias técnicos com base na NR-06.',
  alternates: {
    canonical: `${SITE_URL}${ROUTES.epiCategories}`,
  },
};

export default function CategoryHubPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Guia de EPI', url: `${SITE_URL}${ROUTES.epi}` },
        { name: 'Categorias', url: `${SITE_URL}${ROUTES.epiCategories}` },
      ])} />
      <ClientPage />
    </>
  );
}
