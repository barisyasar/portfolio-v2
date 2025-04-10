'use client';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

function FooterLink({
  href,
  text,
  layoutId = 'footer-link-active',
}: {
  href: string;
  text: string;
  layoutId?: string;
}) {
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
        isActive(href) ? 'text-primary' : 'text-foreground',
      )}
      href={href as '/' | '/about' | '/services' | '/blogs' | '/contact'}
    >
      {t(text)}
      {isActive(href) && (
        <motion.span
          layoutId={layoutId}
          className="absolute left-0 top-0 -z-10 h-full w-full rounded-md bg-foreground/10"
          transition={{ type: 'spring', duration: 0.6 }}
        />
      )}
    </Link>
  );
}

export default FooterLink;
