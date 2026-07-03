import { FrontendIcon, NextIcon, ReactIcon } from '@/components/Icons';
import { ServicesBeamInner } from '@/components/ServicesBeamInner';
import TanstackQueryIcon from '@/components/icons/tanstack-query-icon';
import ServicesMarquee from '@/components/sections/services/OtherServices';
import ServiceDetailDescription from '@/components/sections/services/ServiceDetailDescription';
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
  const t = await getTranslations('ServicesFrontendDevelopment.metadata');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const isEnglish = locale === 'en';
  const currentPath = isEnglish
    ? '/services/frontend-development'
    : '/hizmetler/frontend-development';

  return {
    title: t('title'),
    description: t('description'),

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}${currentPath}`, // ← Düzeltilmiş
      languages: {
        en: `${baseUrl}/en/services/frontend-development`,
        tr: `${baseUrl}/tr/hizmetler/frontend-development`,
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

async function FrontendDevelopment({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="container">
      <ServiceDetailDescription translationKey="ServicesFrontendDevelopment.introduction">
        <ServicesBeamInner
          services={[
            {
              title: 'Frontend',
              icon: <FrontendIcon />,
            },
            {
              title: 'Next',
              icon: <NextIcon />,
            },
            {
              title: 'React',
              icon: <ReactIcon />,
            },
            {
              title: 'TanStack Query',
              icon: <TanstackQueryIcon />,
            },
          ]}
        />
      </ServiceDetailDescription>
      <TechStack
        withFiltering={false}
        className="min-h-[auto]"
        defaultActiveCategory="frontend"
        descriptionKey="descriptionFrontend"
      />
      <ServicesMarquee excludeIds={['frontend']} />
    </main>
  );
}
export default FrontendDevelopment;
