import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Header from "@/components/Header";

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
    <html lang={locale} suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={
                "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(760px_circle_at_center,white,transparent)] xl:[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] fixed top-0 left-0 flex h-screen w-full -z-10"
              }
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
