import type { MetadataRoute } from 'next';
import { getAllBlogsIds } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const blogs = await getAllBlogsIds();

  const routeMappings = [
    { en: '', tr: '' },
    { en: '/about/', tr: '/hakkimda/' },
    { en: '/blogs/', tr: '/blog/' },
    { en: '/services/', tr: '/hizmetler/' },
    { en: '/services/', tr: '/hizmetler/' },
    {
      en: '/services/full-stack-development/',
      tr: '/hizmetler/full-stack-development/',
    },
    {
      en: '/services/frontend-development/',
      tr: '/hizmetler/frontend-development/',
    },
    {
      en: '/services/backend-development/',
      tr: '/hizmetler/backend-development/',
    },
    {
      en: '/services/search-engine-optimization/',
      tr: '/hizmetler/arama-motoru-optimizasyonu/',
    },
    { en: '/contact/', tr: '/iletisim/' },
  ];

  const mainPages = routeMappings.flatMap((routes) => [
    {
      url: `${baseUrl}/en${routes.en}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: routes.en === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${routes.en}`,
          tr: `${baseUrl}/tr${routes.tr}`,
        },
      },
    },
    {
      url: `${baseUrl}/tr${routes.tr}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: routes.tr === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${routes.en}`,
          tr: `${baseUrl}/tr${routes.tr}`,
        },
      },
    },
  ]);

  const blogPages = blogs.flatMap(({ id, locale }) => ({
    url: `${baseUrl}/${locale}/blogs/${id}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
    alternates: {
      languages: {
        en: `${baseUrl}/en/blogs/${id}/`,
        tr: `${baseUrl}/tr/blogs/${id}/`,
      },
    },
  }));

  return [...mainPages, ...blogPages];
}
