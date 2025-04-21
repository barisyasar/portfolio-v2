'use client';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';

function FooterLink({ href, text }: { href: string; text: string }) {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/') {
      return path === pathname;
    }
    return pathname.startsWith(path);
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
      href={href as '/' | '/about' | '/services' | '/blogs' | '/contact'}
    >
      {t(text)}
    </Link>
  );
}

export default FooterLink;
