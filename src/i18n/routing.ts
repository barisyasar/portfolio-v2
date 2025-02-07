import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

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
    '/blogs': '/blogs',
    '/blogs/[id]': {
      tr: '/blogs/[id]',
      en: '/blogs/[id]',
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
