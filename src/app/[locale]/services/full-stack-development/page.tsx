import {
  NextIcon,
  NodeIcon,
  StripeIcon,
  TypeScriptIcon,
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
  const t = await getTranslations('ServicesFullStackDevelopment.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/services/full-stack-development',
      languages: {
        en: '/en/services/full-stack-development',
        tr: '/tr/hizmetler/full-stack-development',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/services/full-stack-development',
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
