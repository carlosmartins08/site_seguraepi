import { expect, test } from '@playwright/test';

const criticalRoutes = [
  '/',
  '/como-comprar',
  '/centro-tecnico',
  '/epi',
  '/politica-de-privacidade',
];

for (const route of criticalRoutes) {
  test(`smoke ${route} renders a single H1 and visible main`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main#main-content')).toBeVisible();

    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });
}
