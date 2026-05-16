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

test('home form validates on blur, preserves draft, and keeps keyboard order', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload({ waitUntil: 'domcontentloaded' });

  const nameInput = page.locator('#lead-name');
  const companyInput = page.locator('#lead-company');
  const whatsappInput = page.locator('#lead-whatsapp');

  await expect(nameInput).toBeVisible();
  await nameInput.click();
  await page.keyboard.type('Maria Compras');
  await companyInput.click();

  await whatsappInput.click();
  await page.keyboard.type('123');
  await page.keyboard.press('Tab');
  await expect(page.getByText('Informe um WhatsApp valido.')).toBeVisible();

  await nameInput.focus();
  await page.keyboard.press('Tab');
  await expect(companyInput).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('#lead-cnpj')).toBeFocused();

  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('#lead-name')).toHaveValue('Maria Compras');
});

test('external http links open in new tab and internal links stay in-app', async ({ page }) => {
  await page.goto('/como-comprar', { waitUntil: 'domcontentloaded' });

  const externalButton = page.getByRole('link', { name: 'Falar com um consultor' }).first();
  await expect(externalButton).toHaveAttribute('target', '_blank');
  await expect(externalButton).toHaveAttribute('rel', /noopener/);

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('link', { name: 'Centro técnico' }).first().click();
  await expect(page).toHaveURL(/\/centro-tecnico(\?.*)?$/);
});
