import { expect, test } from '@playwright/test';

test.describe('API contract', () => {
  test('/api/lead rejects invalid payload with envelope and request id', async ({ request }) => {
    const response = await request.post('/api/lead', {
      data: 'invalid',
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.status()).toBe(400);
    expect(response.headers()['x-request-id']).toBeTruthy();

    const body = await response.json();
    expect(body.ok).toBeFalsy();
    expect(body.code).toBe('invalid_payload');
    expect(typeof body.message).toBe('string');
    expect(body.requestId).toBeTruthy();
  });

  test('/api/lead accepts valid payload', async ({ request }) => {
    const response = await request.post('/api/lead', {
      data: {
        name: 'Teste',
        company: 'Segura EPI',
        whatsapp: '(11) 99999-9999',
        source: 'api-contract-test',
      },
      headers: {
        'x-idempotency-key': `test-${Date.now()}`,
      },
    });

    expect([200, 202]).toContain(response.status());
    expect(response.headers()['x-request-id']).toBeTruthy();

    const body = await response.json();
    expect(body.ok).toBeTruthy();
    expect(body.requestId).toBeTruthy();
  });

  test('/api/lead rejects oversized payload', async ({ request }) => {
    const response = await request.post('/api/lead', {
      data: {
        source: 'api-contract-test',
        blob: 'x'.repeat(13 * 1024),
      },
    });

    expect(response.status()).toBe(413);
    const body = await response.json();
    expect(body.code).toBe('payload_too_large');
  });

  test('/api/funnel/event rejects invalid event name with envelope', async ({ request }) => {
    const response = await request.post('/api/funnel/event', {
      data: { event: 'INVALID EVENT' },
    });
    expect(response.status()).toBe(400);
    expect(response.headers()['x-request-id']).toBeTruthy();

    const body = await response.json();
    expect(body.code).toBe('invalid_event_name');
    expect(body.requestId).toBeTruthy();
  });

  test('/api/funnel/event accepts valid event', async ({ request }) => {
    const response = await request.post('/api/funnel/event', {
      data: {
        event: 'route_view',
        path: '/',
        params: { source: 'api-contract-test' },
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.ok).toBeTruthy();
    expect(body.requestId).toBeTruthy();
  });

  test('/api/funnel/event rate limits after burst', async ({ request }) => {
    let lastStatus = 200;
    for (let i = 0; i < 130; i += 1) {
      const response = await request.post('/api/funnel/event', {
        data: {
          event: 'route_view',
          path: '/',
          params: { i },
        },
      });
      lastStatus = response.status();
      if (lastStatus === 429) {
        const body = await response.json();
        expect(body.code).toBe('rate_limited');
        return;
      }
    }

    expect(lastStatus).toBe(429);
  });

  test('/api/funnel/summary returns funnel plus api metrics', async ({ request }) => {
    const response = await request.get('/api/funnel/summary');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.ok).toBeTruthy();
    expect(body.summary).toBeTruthy();
    expect(body.apiMetrics).toBeTruthy();
    expect(Array.isArray(body.apiMetrics.byRoute)).toBeTruthy();
  });
});
