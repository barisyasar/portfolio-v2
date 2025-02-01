import { ContactForm } from '@/components/contact-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('ContactPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/contact',
      languages: {
        en: '/en/contact',
        tr: '/tr/contact',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '/contact',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

// Server Component
async function Contact() {
  const t = await getTranslations('ContactPage');

  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      lang="eng"
    >
      <main className="container">
        <Card className="section">
          <div className="mx-auto max-w-screen-md space-y-5">
            <CardHeader>
              <CardTitle>
                <h1>{t('title')}</h1>
              </CardTitle>
              <CardDescription>{t('description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </div>
        </Card>
      </main>
    </ReCaptchaProvider>
  );
}

export default Contact;
