import { NextIcon, StripeIcon, TypeScriptIcon } from '@/components/Icons';
import { ServicesBeamInner } from '@/components/ServicesBeamInner';
import NodeIcon from '@/components/icons/node-icon';
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
  const t = await getTranslations('ServicesFullStackDevelopment.metadata');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const isEnglish = locale === 'en';
  const currentPath = isEnglish
    ? '/services/full-stack-development'
    : '/hizmetler/full-stack-development';

  return {
    title: t('title'),
    description: t('description'),

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}${currentPath}`, // ← Düzeltilmiş
      languages: {
        en: `${baseUrl}/en/services/full-stack-development`,
        tr: `${baseUrl}/tr/hizmetler/full-stack-development`,
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

async function FullstackDevelopment({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="container">
      <ServiceDetailDescription translationKey="ServicesFullStackDevelopment.introduction">
        <ServicesBeamInner
          services={[
            {
              title: 'Full Stack',
              icon: <TypeScriptIcon />,
            },
            {
              title: 'Next',
              icon: <NextIcon />,
            },
            {
              title: 'Stripe',
              icon: <StripeIcon />,
            },
            {
              title: 'Node',
              icon: <NodeIcon />,
            },
          ]}
        />
      </ServiceDetailDescription>
      <TechStack
        withFiltering={false}
        className="min-h-[auto]"
        defaultActiveCategory="fullstack"
        descriptionKey="descriptionFullstack"
      />
      <ServicesMarquee excludeIds={['full-stack']} />
    </main>
  );
}
export default FullstackDevelopment;
