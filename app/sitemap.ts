import { SITE_URL } from '../lib/seo/site';

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
  ];
}
