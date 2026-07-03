import ProjectList from '@/components/project-list';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('ProjectsPage.metadata');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const isEnglish = locale === 'en';
  const currentPath = isEnglish ? '/projects' : '/projeler';

  return {
    title: t('title'),
    description: t('description'),

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}${currentPath}`, // ← Düzeltilmiş
      languages: {
        en: `${baseUrl}/en/projects`,
        tr: `${baseUrl}/tr/projeler`,
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

async function Projects({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ProjectsPage');
  return (
    <main className="container">
      <Card className="section">
        <div className="mx-auto max-w-screen-md space-y-5">
          <CardHeader className="space-y-4">
            <CardTitle>
              <h1>{t('title')}</h1>
            </CardTitle>
            <CardContent>{t.raw('description')}</CardContent>
          </CardHeader>
          <CardContent>
            <ProjectList className="md:grid-cols-2" />
          </CardContent>
        </div>
      </Card>
    </main>
  );
}

export default Projects;
