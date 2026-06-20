import { getLocale } from "next-intl/server";

export async function getLocalizedContent() {
  const locale = await getLocale();

  const getTranslation = <T extends { locale: { code: string } }>(
    translations: T[] | undefined | null,
  ): T | null => {
    if (!translations?.length) return null;
    return (
      translations.find((t) => t.locale.code === locale) ??
      translations[0] ??
      null
    );
  };

  return { getTranslation };
}
