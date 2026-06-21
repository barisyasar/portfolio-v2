import { BackendIcon, ExpressIcon, NodeIcon } from '@/components/Icons';
import { ServicesBeamInner } from '@/components/ServicesBeamInner';
import PostgresqlIcon from '@/components/icons/postgresql-icon';
import OtherServices from '@/components/sections/services/OtherServices';
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
  const t = await getTranslations('ServicesBackendDevelopment.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical:
        locale === 'en'
          ? '/services/backend-development'
          : '/hizmetler/backend-development',

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
              title: 'PostgreSQL',
              icon: <PostgresqlIcon />,
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
