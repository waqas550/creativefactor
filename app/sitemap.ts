import type { MetadataRoute } from 'next';
import { routing } from '@/lib/i18n/routing';
import { siteUrl } from '@/lib/site';

const publicPages = ['', 'about', 'contact', 'events', 'imprint', 'news', 'partners', 'privacy', 'services', 'terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    publicPages.map((page) => ({
      url: new URL(`/${locale}${page ? `/${page}` : ''}`, siteUrl).toString(),
      changeFrequency: page === 'news' || page === 'events' ? 'weekly' : 'monthly',
      priority: page === '' ? 1 : page === 'contact' || page === 'services' ? 0.8 : 0.6,
    }))
  );
}
