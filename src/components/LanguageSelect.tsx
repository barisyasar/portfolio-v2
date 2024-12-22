"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSelect() {
  const t = useTranslations("languages");
  const local = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() =>
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale as Locale }
      )
    );
  }

  return (
    <Select
      defaultValue={local}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="capitalize w-28">
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
