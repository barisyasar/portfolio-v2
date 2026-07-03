import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MailButton from '@/components/MailButton';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { routing } from '@/i18n/config';
import { Locale } from '@/i18n/routing';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import {
  getLocale,
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { cacheLife } from 'next/cache';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import '../globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  return {
    title: t('defaultTitle'),
    description: t('defaultDescription'),
    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
      },
    },

    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: `/${locale}`,
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('defaultTitle'),
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: ['/og-image.jpg'],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  'use cache';
  cacheLife('max');

  const locale = await getLocale();
  if (!locale || !routing.locales.includes(locale as Locale)) notFound();
  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      style={{
        scrollBehavior: 'smooth',
        scrollbarGutter: 'stable',
      }}
      translate="no"
    >
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body
        className={`${roboto.className} antialiased`}
        style={{
          scrollbarGutter: 'stable',
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <NextTopLoader
              color={'hsl(var(--foreground))'}
              height={3}
              showSpinner={false}
            />

            <Header />
            {children}

            <Footer />
            <MailButton />
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
