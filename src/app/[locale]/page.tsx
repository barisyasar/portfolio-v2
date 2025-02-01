import Contact from '@/components/sections/home/Contact';
import Hero from '@/components/sections/home/Hero';
import Experinces from '@/components/sections/home/Experinces';
import Recap from '@/components/sections/home/Recap';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations('Home');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        tr: '/tr',
      },
    },
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: '/',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

export default async function Home() {
  return (
    <main className="container">
      <Hero />
      <Recap />
      <Experinces />
      <Contact />
    </main>
  );
}
