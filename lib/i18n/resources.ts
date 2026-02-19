import { Locale } from './locales';

type Namespace = 'nav' | 'hero';

type Resource = Record<Namespace, Record<string, string>>;

const resources: Record<Locale, Resource> = {
  pt: {
    nav: {
      home: 'Início',
      epiCategories: 'EPI por Categoria',
      catalog: 'Catálogo',
      pickup: 'Retira em Loja',
    },
    hero: {
      eyebrow: 'Fornecedor B2B de EPI',
      headlinePrefix: 'EPI para empresas com',
      headlineStrong: 'orientação técnica',
      headlineSuffix: 'e compra segura',
      paragraph:
        'Escolha por risco, função e aplicação real. A Segura EPI conecta seu time às soluções certas — com apoio consultivo e parcerias de fabricantes líderes.',
      primaryCta: 'Falar com consultor',
      secondaryCta: 'Ver catálogo',
    },
  },
  en: {
    nav: {
      home: 'Home',
      epiCategories: 'PPE by Category',
      catalog: 'Catalog',
      pickup: 'In-store Pickup',
    },
    hero: {
      eyebrow: 'B2B PPE Supplier',
      headlinePrefix: 'PPE for companies with',
      headlineStrong: 'technical guidance',
      headlineSuffix: 'and safe purchasing',
      paragraph:
        'Choose by risk, role, and real application. Segura EPI connects your team to the right solutions — with consultative support and leading manufacturers.',
      primaryCta: 'Talk to a consultant',
      secondaryCta: 'View catalog',
    },
  },
};

export const getResource = (locale: Locale) => resources[locale] ?? resources.pt;
