import { AhrefsIcon, SemrushIcon, SEOIcon, SeoIcon } from '@/components/Icons';
import ServicesMarquee from '@/components/sections/services/OtherServices';
import ServiceDetailDescription from '@/components/sections/services/ServiceDetailDescription';
import TechStack from '@/components/sections/services/TechStack';
import { ServicesBeamInner } from '@/components/ServicesBeamInner';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('ServicesSEO.metadata');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const isEnglish = locale === 'en';
  const currentPath = isEnglish
    ? '/services/search-engine-optimization'
    : '/hizmetler/arama-motoru-optimizasyonu';

  return {
    title: t('title'),
    description: t('description'),

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}${currentPath}`, // ← Düzeltilmiş
      languages: {
        en: `${baseUrl}/en/services/search-engine-optimization`,
        tr: `${baseUrl}/tr/hizmetler/arama-motoru-optimizasyonu`, // ← Burası yanlıştı!
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
