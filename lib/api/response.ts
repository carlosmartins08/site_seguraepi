export type ApiErrorBody = {
  ok: false;
  code: string;
  message: string;
  requestId: string;
};

export type ApiSuccessBody<T extends Record<string, unknown> = Record<string, never>> = {
  ok: true;
  requestId: string;
} & T;

export function jsonError(
  requestId: string,
  code: string,
  message: string,
  init: ResponseInit = {},
): Response {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  headers.set('x-request-id', requestId);

  return new Response(JSON.stringify({ ok: false, code, message, requestId } satisfies ApiErrorBody), {
    ...init,
    headers,
  });
}

export function jsonOk<T extends Record<string, unknown>>(
  requestId: string,
  payload?: T,
  init: ResponseInit = {},
): Response {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  headers.set('x-request-id', requestId);

  const body = payload ? ({ ok: true, requestId, ...payload } as ApiSuccessBody<T>) : ({ ok: true, requestId } as ApiSuccessBody<Record<string, never>>);

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}

export function withRequestId(req: Request): string {
  const inbound = req.headers.get('x-request-id')?.trim();
  if (inbound) return inbound;
  return crypto.randomUUID();
}
