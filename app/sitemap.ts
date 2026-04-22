import { SITE_URL } from '../lib/seo/site';
import { CATEGORY_PAGES } from '../lib/catalog/categories';
import { ROUTES, SITEMAP_EXCLUDE } from '../lib/routes';

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const excludedRoutes = new Set<string>(SITEMAP_EXCLUDE as readonly string[]);

const ROUTE_CONFIG: Record<string, { lastModified: string; changeFrequency: SitemapEntry['changeFrequency']; priority: number }> = {
  [ROUTES.home]:          { lastModified: '2025-11-01', changeFrequency: 'weekly',  priority: 1.0 },
  [ROUTES.epi]:           { lastModified: '2025-10-01', changeFrequency: 'monthly', priority: 0.9 },
  [ROUTES.epiCategories]: { lastModified: '2025-10-01', changeFrequency: 'monthly', priority: 0.8 },
  [ROUTES.center]:        { lastModified: '2025-10-01', changeFrequency: 'monthly', priority: 0.8 },
  [ROUTES.howToBuy]:      { lastModified: '2025-10-01', changeFrequency: 'monthly', priority: 0.8 },
  [ROUTES.about]:         { lastModified: '2025-10-01', changeFrequency: 'monthly', priority: 0.7 },
  [ROUTES.pickupExpress]: { lastModified: '2025-10-01', changeFrequency: 'monthly', priority: 0.7 },
  [ROUTES.careers]:       { lastModified: '2025-10-01', changeFrequency: 'monthly', priority: 0.6 },
  [ROUTES.policyDelivery]:  { lastModified: '2025-10-01', changeFrequency: 'yearly', priority: 0.3 },
  [ROUTES.policyReturns]:   { lastModified: '2025-10-01', changeFrequency: 'yearly', priority: 0.3 },
  [ROUTES.privacyPolicy]:   { lastModified: '2025-10-01', changeFrequency: 'yearly', priority: 0.3 },
  [ROUTES.termsOfUse]:      { lastModified: '2025-10-01', changeFrequency: 'yearly', priority: 0.3 },
};

export default function sitemap(): SitemapEntry[] {
  const staticEntries = Object.values(ROUTES)
    .filter((path) => !excludedRoutes.has(path))
    .map((path) => {
      const config = ROUTE_CONFIG[path] ?? { lastModified: '2025-10-01', changeFrequency: 'monthly' as const, priority: 0.5 };
      return {
        url: `${SITE_URL}${path}`,
        lastModified: new Date(config.lastModified),
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      };
    });

  const categoryEntries = Object.keys(CATEGORY_PAGES).map((key) => ({
    url: `${SITE_URL}${ROUTES.epi}/${key}`,
    lastModified: new Date('2025-11-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...categoryEntries];
}
