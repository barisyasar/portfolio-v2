'use client';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

function HeaderLink({
  href,
  text,
  layoutId = 'navbar-active',
  className,
}: {
  href: string;
  text: string;
  layoutId?: string;
  className?: string;
}) {
  const t = useTranslations('Menu');
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/') {
      return path === pathname;
    }
    return pathname.startsWith(path);
  };
  return (
    <Link
      className={cn(
        'relative z-0 p-2',
        className,
        isActive(href) ? 'text-primary' : 'text-foreground',
      )}
      href={href as '/' | '/about' | '/services' | '/blogs' | '/contact'}
    >
      {isActive(href) && (
        <motion.span
          layoutId={layoutId}
          className="absolute left-0 top-0 z-0 h-full w-full rounded-md bg-foreground/10"
          transition={{ type: 'spring', duration: 0.6 }}
        />
      )}
      {text === 'barisyasar' ? (
        <div dangerouslySetInnerHTML={{ __html: t.raw(text) }} />
      ) : (
        t(text)
      )}
    </Link>
  );
}

export default HeaderLink;
