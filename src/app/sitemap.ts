import { PROJECTS } from '@/constants/projects'; // adjust path as needed
import Project from '@/types/project.type';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const routeMappings = [
    { en: '', tr: '' },
    { en: '/about/', tr: '/hakkimda/' },
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
    { en: '/projects/', tr: '/projeler/' },
  ];

  // Static main pages
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

  // Dynamic Project pages
  const projectPages = PROJECTS.flatMap((project: Project) => {
    const enSlug = project.slug;
    const trSlug = project.slug; // assuming same slug for both languages

    return [
      // English version
      {
        url: `${baseUrl}/en/projects/${enSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projects/${enSlug}`,
            tr: `${baseUrl}/tr/projeler/${trSlug}`,
          },
        },
      },
      // Turkish version
      {
        url: `${baseUrl}/tr/projeler/${trSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projects/${enSlug}`,
            tr: `${baseUrl}/tr/projeler/${trSlug}`,
          },
        },
      },
    ];
  });

  return [...mainPages, ...projectPages];
}
