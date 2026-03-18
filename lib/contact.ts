export function phoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return digits ? `tel:${digits}` : `tel:${phone}`;
}

export function mailtoHref(email: string): string {
  return `mailto:${email}`;
}
