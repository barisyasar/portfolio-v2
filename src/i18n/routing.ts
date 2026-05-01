import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'tr'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      tr: '/hakkimda',
      en: '/about',
    },
    '/services': {
      tr: '/hizmetler',
      en: '/services',
    },
    '/services/full-stack-development': {
      tr: '/hizmetler/full-stack-development',
      en: '/services/full-stack-development',
    },
    '/services/frontend-development': {
      tr: '/hizmetler/frontend-development',
      en: '/services/frontend-development',
    },
    '/services/backend-development': {
      tr: '/hizmetler/backend-development',
      en: '/services/backend-development',
    },
    '/services/search-engine-optimization': {
      tr: '/hizmetler/arama-motoru-optimizasyonu',
      en: '/services/search-engine-optimization',
    },
    '/contact': {
      tr: '/iletisim',
      en: '/contact',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
