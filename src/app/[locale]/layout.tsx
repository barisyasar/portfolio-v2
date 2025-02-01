import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { getTranslations } from 'next-intl/server';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('Metadata');

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

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!locale || !routing.locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <AnimatedGridPattern
              numSquares={25}
              maxOpacity={0.05}
              duration={2}
              repeatDelay={3}
              className={
                'hidden[mask-image:radial-gradient(350px_circle_at_center,white,transparent)] fixed left-0 top-0 -z-10 h-screen w-full opacity-50 sm:flex lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] xl:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]'
              }
            />
            <Footer />
            <ScrollToTop />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
