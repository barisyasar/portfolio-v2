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

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? '/projects' : '/projeler',
      languages: {
        en: '/en/projects',
        tr: '/tr/projeler',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/projects',
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
      {t('coming_soon')}
      {/* <Card className="section">
        <div className="mx-auto max-w-screen-md space-y-5">
          <CardHeader className="space-y-4">
            <CardTitle>
              <h1>{t('title')}</h1>
            </CardTitle>
            <CardContent>{t.raw('description')}</CardContent>
          </CardHeader>
          <CardContent>
            <ProjectsList className="md:grid-cols-2" />
          </CardContent>
        </div>
      </Card> */}
    </main>
  );
}

export default Projects;
