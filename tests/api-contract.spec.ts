import { expect, test } from '@playwright/test';

test.describe('API contract', () => {
  test('/api/lead rejects invalid payload', async ({ request }) => {
    const response = await request.post('/api/lead', {
      data: 'invalid',
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.ok).toBeFalsy();
  });

  test('/api/funnel/event rejects invalid event name', async ({ request }) => {
    const response = await request.post('/api/funnel/event', {
      data: { event: 'INVALID EVENT' },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBe('invalid_event_name');
  });
});
