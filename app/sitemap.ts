import { SITE_URL } from '../lib/seo/site';
import { CATEGORY_PAGES } from '../lib/catalog/categories';
import { ROUTES, SITEMAP_EXCLUDE } from '../lib/routes';

const excludedRoutes = new Set<string>(SITEMAP_EXCLUDE as readonly string[]);
const staticRoutes = Object.values(ROUTES).filter((path) => !excludedRoutes.has(path));

export default function sitemap() {
  const categoryRoutes = Object.keys(CATEGORY_PAGES).map((key) => `${ROUTES.epi}/${key}`);

  return [...staticRoutes, ...categoryRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
