import { expect, test } from '@playwright/test';

type CanonicalCase = {
  route: string;
  expectedPath: string;
};

const canonicalCases: CanonicalCase[] = [
  { route: '/', expectedPath: '/' },
  { route: '/politica-de-privacidade', expectedPath: '/politica-de-privacidade' },
];

const noindexRoutes = ['/chat', '/obrigado', '/painel-funil', '/catalogo'];

const responsiveRoutes = ['/', '/como-comprar', '/centro-tecnico', '/epi', '/politica-de-privacidade'];

const viewports = [
  { width: 320, height: 740 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
];

function normalizeUrl(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

test.describe('SEO technical contract', () => {
  for (const item of canonicalCases) {
    test(`${item.route} publishes canonical`, async ({ page }) => {
      await page.goto(item.route, { waitUntil: 'domcontentloaded' });

      const canonical = page.locator('link[rel="canonical"]').first();
      await expect(canonical).toHaveCount(1);
      const href = await canonical.getAttribute('href');
      expect(href).toBeTruthy();

      const expected = new URL(item.expectedPath, 'https://seguraepi.com.br').toString();
      expect(normalizeUrl(href ?? '')).toBe(normalizeUrl(expected));
    });
  }

  for (const route of noindexRoutes) {
    test(`${route} declares noindex`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' });

      const robots = page.locator('meta[name="robots"]').first();
      await expect(robots).toHaveCount(1);
      const content = (await robots.getAttribute('content')) ?? '';
      expect(content.toLowerCase()).toContain('noindex');
    });
  }
});

test.describe('Responsive layout sanity', () => {
  for (const route of responsiveRoutes) {
    for (const viewport of viewports) {
      test(`${route} remains stable at ${viewport.width}x${viewport.height}`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto(route, { waitUntil: 'domcontentloaded' });

        await expect(page.locator('main#main-content')).toBeVisible();
        await expect(page.locator('h1')).toHaveCount(1);

        const hasHorizontalOverflow = await page.evaluate(() => {
          const root = document.documentElement;
          const body = document.body;
          const rootOverflow = root.scrollWidth - root.clientWidth;
          const bodyOverflow = body.scrollWidth - body.clientWidth;
          return rootOverflow > 8 || bodyOverflow > 8;
        });

        expect(hasHorizontalOverflow).toBeFalsy();
      });
    }
  }
});
