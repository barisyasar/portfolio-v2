import Hero from '@/components/sections/services/Hero';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import TechStack from '@/components/sections/services/TechStack';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('ServicesPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? '/services' : '/hizmetler',

      languages: {
        en: '/en/services',
        tr: '/tr/hizmetler',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/services',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

async function Services({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="container">
      <Hero />
      <ServicesGrid />
      <TechStack />
    </main>
  );
}
export default Services;
