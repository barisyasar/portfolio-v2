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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const isEnglish = locale === 'en';
  const currentPath = isEnglish ? '/services' : '/hizmetler';

  return {
    title: t('title'),
    description: t('description'),

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}${currentPath}`, // ← Düzeltilmiş
      languages: {
        en: `${baseUrl}/en/services`,
        tr: `${baseUrl}/tr/hizmetler`,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}${currentPath}`, // ← Düzeltilmiş
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
