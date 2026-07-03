'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { routing } from '@/i18n/config';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSelect() {
  const t = useTranslations('languages');
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale as Locale },
      );
    });
  }

  return (
    <Select
      value={currentLocale} // defaultValue yerine value kullan (daha stabil)
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-28 capitalize">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale} className="capitalize">
            {t(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
