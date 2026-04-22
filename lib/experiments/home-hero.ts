export type HomeHeroVariant = 'control' | 'intent';

const STORAGE_KEY = 'exp_home_hero_v1';
const QUERY_KEY = 'exp_home_hero';

function normalizeVariant(value: string | null): HomeHeroVariant | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  if (normalized === 'a' || normalized === 'control') return 'control';
  if (normalized === 'b' || normalized === 'intent') return 'intent';
  return null;
}

export function resolveHomeHeroVariant(): HomeHeroVariant {
  if (typeof window === 'undefined') return 'control';

  const urlVariant = normalizeVariant(new URLSearchParams(window.location.search).get(QUERY_KEY));
  if (urlVariant) {
    window.sessionStorage.setItem(STORAGE_KEY, urlVariant);
    return urlVariant;
  }

  const storedVariant = normalizeVariant(window.sessionStorage.getItem(STORAGE_KEY));
  if (storedVariant) {
    return storedVariant;
  }

  const assigned: HomeHeroVariant = Math.random() < 0.5 ? 'control' : 'intent';
  window.sessionStorage.setItem(STORAGE_KEY, assigned);
  return assigned;
}
