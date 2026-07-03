import Contact from '@/components/sections/home/Contact';
import Experinces from '@/components/sections/home/Experinces';
import Hero from '@/components/sections/home/Hero';
import Recap from '@/components/sections/home/Recap';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage.metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!; // .env'de tanımlı olmalı

  return {
    title: t('title'),
    description: t('description'),

    metadataBase: new URL(baseUrl), // ← Önemli

    alternates: {
      canonical: `/${locale}`, // ← Düzelttik
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`, // ← Düzelttik
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="container">
      <Hero />
      <Recap />
      <Experinces />
      <Contact />
    </main>
  );
}
