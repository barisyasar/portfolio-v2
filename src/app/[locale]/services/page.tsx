import Hero from '@/components/sections/services/Hero';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import TechStack from '@/components/sections/services/TechStack';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations('Services');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    alternates: {
      canonical: '/services',
      languages: {
        en: '/en/services',
        tr: '/tr/services',
      },
    },
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: '/services',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

function Services() {
  return (
    <main className="container">
      <Hero />
      <ServicesGrid />
      <TechStack />
    </main>
  );
}
export default Services;
