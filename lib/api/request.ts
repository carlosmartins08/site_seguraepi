export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const first = forwardedFor.split(',')[0]?.trim();
    if (first) return first;
  }

  const realIp = req.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;

  return 'unknown';
}

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

export function safeJsonByteLength(input: unknown): number {
  try {
    return Buffer.byteLength(JSON.stringify(input), 'utf8');
  } catch {
    return Number.POSITIVE_INFINITY;
  }
}
