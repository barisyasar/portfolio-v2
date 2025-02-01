import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import {
  Card,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('NotFoundPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/404',
      languages: {
        en: '/en/404',
        tr: '/tr/404',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/404',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

export default async function NotFoundPage() {
  const t = await getTranslations('NotFoundPage');

  return (
    <main className="container">
      <Card className="section">
        <div className="mx-auto max-w-screen-md space-y-4 text-center">
          <CardHeader>
            <CardTitle>
              <h1 className="text-6xl font-bold">404</h1>
              <p className="mt-4 text-2xl">{t('title')}</p>
            </CardTitle>
            <CardDescription className="text-lg">
              {t('description')}
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button asChild>
              <Link href="/">
                {t('goHome')}
                <ChevronRight className="ml-2 h-4 w-4 animate-bounce-horizontal" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </main>
  );
}
