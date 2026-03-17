import { SITE_URL } from '../lib/seo/site';
import { CATEGORY_PAGES } from '../lib/catalog/categories';

const staticRoutes = [
  '',
  '/catalogo',
  '/centro-tecnico',
  '/como-comprar',
  '/epi',
  '/epi/categorias',
  '/politica-de-entrega-e-frete',
  '/politica-de-trocas-e-devolucoes',
  '/retira',
  '/retira-em-loja',
  '/retirada-expressa',
  '/sobre-segura-epi',
  '/trabalhe-conosco',
];

export default function sitemap() {
  const categoryRoutes = Object.keys(CATEGORY_PAGES).map((key) => `/epi/${key}`);

  return [...staticRoutes, ...categoryRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
