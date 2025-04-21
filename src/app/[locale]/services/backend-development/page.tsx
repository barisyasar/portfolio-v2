import {
  BackendIcon,
  ExpressIcon,
  NodeIcon,
  PostgreIcon,
} from '@/components/Icons';
import ServiceDetailDescription from '@/components/sections/services/ServiceDetailDescription';
import OtherServices from '@/components/sections/services/OtherServices';
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
  const t = await getTranslations('ServicesBackendDevelopment.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/services/backend-development',
      languages: {
        en: '/en/services/backend-development',
        tr: '/tr/hizmetler/backend-development',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/services/backend-development',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

async function BackendDevelopment({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="container">
      <ServiceDetailDescription translationKey="ServicesBackendDevelopment.introduction">
        <ServicesBeamInner
          services={[
            {
              title: 'Backend',
              icon: <BackendIcon />,
            },
            {
              title: 'Node',
              icon: <NodeIcon />,
            },
            {
              title: 'Express',
              icon: <ExpressIcon />,
            },
            {
              title: 'React',
              icon: <PostgreIcon />,
            },
          ]}
        />
      </ServiceDetailDescription>
      <TechStack
        withFiltering={false}
        className="min-h-[auto]"
        defaultActiveCategory="backend"
        descriptionKey="descriptionBackend"
      />
      <OtherServices excludeIds={['backend']} />
    </main>
  );
}
export default BackendDevelopment;
