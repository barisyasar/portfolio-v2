import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  pathnames: {
    "/": {
      tr: "/",
      en: "/",
    },
    "/about": {
      tr: "/about",
      en: "/hakkimda",
    },
    "/projects": {
      tr: "/projeler",
      en: "/projects",
    },
    "/blogs": {
      tr: "/blogs",
      en: "/blogs",
    },
    "/contact": {
      tr: "/iletisim",
      en: "/contact",
    },
    "#recap": {
      tr: "/#recap",
      en: "/#recap",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
