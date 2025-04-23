import {
  FrontendIcon,
  NextIcon,
  ReactIcon,
  ReactQueryIcon,
} from '@/components/Icons';
import ServiceDetailDescription from '@/components/sections/services/ServiceDetailDescription';
import ServicesMarquee from '@/components/sections/services/OtherServices';
import TechStack from '@/components/sections/services/TechStack';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { ServicesBeamInner } from '@/components/ServicesBeamInner';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('ServicesFrontendDevelopment.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical:
        locale === 'en'
          ? '/services/frontend-development'
          : '/hizmetler/frontend-development',

      languages: {
        en: '/en/services/frontend-development',
        tr: '/tr/hizmetler/frontend-development',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/services/frontend-development',
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
              title: 'ReactQuery',
              icon: <ReactQueryIcon />,
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
