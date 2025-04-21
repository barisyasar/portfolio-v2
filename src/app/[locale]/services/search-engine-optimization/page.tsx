import { AhrefsIcon, SemrushIcon, SEOIcon, SeoIcon } from '@/components/Icons';
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
  const t = await getTranslations('ServicesSEO.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/services/search-engine-optimization',
      languages: {
        en: '/en/services/search-engine-optimization',
        tr: '/tr/hizmetler/search-engine-optimization',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/services/search-engine-optimization',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

async function Seo({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="container">
      <ServiceDetailDescription translationKey="ServicesSEO.introduction">
        <ServicesBeamInner
          services={[
            {
              title: 'SEO',
              icon: <SEOIcon />,
            },
            {
              title: 'GA4',
              icon: <SeoIcon />,
            },
            {
              title: 'Semrush',
              icon: <SemrushIcon />,
            },
            {
              title: 'Ahrefs',
              icon: <AhrefsIcon />,
            },
          ]}
        />
      </ServiceDetailDescription>
      <TechStack
        withFiltering={false}
        className="min-h-[auto]"
        defaultActiveCategory="seo"
        descriptionKey="descriptionSeo"
      />
      <ServicesMarquee excludeIds={['seo']} />
    </main>
  );
}
export default Seo;
