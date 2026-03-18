import { SITE_URL } from '../lib/seo/site';
import { CATEGORY_PAGES } from '../lib/catalog/categories';
import { ROUTES, SITEMAP_EXCLUDE } from '../lib/routes';

const staticRoutes = Object.values(ROUTES).filter((path) => !SITEMAP_EXCLUDE.includes(path));

export default function sitemap() {
  const categoryRoutes = Object.keys(CATEGORY_PAGES).map((key) => `${ROUTES.epi}/${key}`);

  return [...staticRoutes, ...categoryRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}