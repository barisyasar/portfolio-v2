import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  pathnames: {
    "/": "/",
    "/about": {
      tr: "/about",
      en: "/hakkimda",
    },
    "/projects": {
      tr: "/projeler",
      en: "/projects",
    },
    "/projects/[id]": {
      tr: "/projeler/[id]",
      en: "/projects/[id]",
    },
    "/blogs": "blogs",
    "/contact": {
      tr: "/iletisim",
      en: "/contact",
    },
    "#recap": "#recap",
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
