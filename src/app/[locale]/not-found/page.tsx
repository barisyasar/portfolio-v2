// app/[locale]/not-found.tsx
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('NotFoundPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function NotFound() {
  const t = await getTranslations('NotFoundPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link href="/">{t('goHome')}</Link>
    </div>
  );
}
