'use client';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';

function FooterLink({
  href,
  text,
}: {
  href:
    | '/'
    | '/about'
    | '/services'
    | '/services/full-stack-development'
    | '/services/backend-development'
    | '/services/frontend-development'
    | '/services/search-engine-optimization'
    | '/blogs'
    | '/contact';
  text: string;
}) {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/') {
      return path === pathname;
    }
    return pathname.endsWith(path);
  };
  return (
    <Link
      prefetch={false}
      className={cn(
        'relative px-2 py-1',
        isActive(href)
          ? 'rounded-md bg-foreground/10 text-primary'
          : 'text-foreground',
      )}
      href={href}
    >
      {t(text)}
    </Link>
  );
}

export default FooterLink;
