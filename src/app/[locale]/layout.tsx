import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { GoogleAnalytics } from '@next/third-parties/google';

type Params = Promise<{ locale: string }>;
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
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      default: t('defaultTitle'),
      template: t('titleTemplate'),
    },
    description: t('defaultDescription'),
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        tr: '/tr',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: t('siteName'),
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
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
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
    >
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body
        className={`${roboto.className} antialiased`}
        style={{
          scrollbarGutter: 'stable',
        }}
      >
        <NuqsAdapter>
          <ThemeProvider attribute="class" defaultTheme="system">
            <NextIntlClientProvider messages={messages}>
              <Header />
              {children}

              <Footer />
              <ScrollToTop />
              <Toaster />
            </NextIntlClientProvider>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
