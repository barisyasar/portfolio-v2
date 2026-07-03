import TechStackTabList from '@/components/TechStackTabList';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { PROJECTS } from '@/constants/projects';
import { routing } from '@/i18n/config';
import { ProjectPlatform, ProjectTranslation } from '@/types/project.type';
import { getLocalizedContent } from '@/utils/get-localized-content';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PlatformMap = Partial<Record<ProjectPlatform['name'], ProjectPlatform>>;

export async function generateStaticParams() {
  const locales = routing.locales;

  return locales.flatMap((locale) =>
    PROJECTS.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const t = await getTranslations('ProjectDetail');

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: 'Not Found',
    };
  }

  const { getTranslation } = await getLocalizedContent();
  const translation = getTranslation(
    project.metadata?.translations || project.translations,
  );

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const isEnglish = locale === 'en';
  const currentPath = isEnglish ? `/projects/${slug}` : `/projeler/${slug}`;

  return {
    title: `${t('Projects')} - ${translation?.title || project.slug}`,
    description: translation?.description ?? '',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: `/${locale}${currentPath.replace(`/${locale}`, '')}`, // daha güvenli
      languages: {
        en: `${baseUrl}/en/projects/${slug}`,
        tr: `${baseUrl}/tr/projeler/${slug}`,
      },
    },

    openGraph: {
      title: translation?.title,
      description: translation?.description,
      url: `/${locale}${currentPath.replace(`/${locale}`, '')}`, // OG için
      images: project.logo ? [`${baseUrl}/projects/${project.logo}`] : [],
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations('ProjectDetail');

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const { getTranslation } = await getLocalizedContent();
  const translation = getTranslation(
    project.translations,
  ) as ProjectTranslation;

  const platforms = project.platforms.reduce<PlatformMap>((acc, platform) => {
    acc[platform.name] = platform;
    return acc;
  }, {});

  const {
    web,
    instagram,
    ['app-store']: appStore,
    ['google-play']: googlePlay,
  } = platforms;

  return (
    <main className="container">
      <Card>
        <div className="mx-auto max-w-screen-lg space-y-8 p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src={`/projects/${project.logo}`}
              width={72}
              height={72}
              alt={translation.logoAlt || translation.name}
              unoptimized
              className="rounded-lg border"
              priority
            />
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">
                {translation.name}
              </h1>
              {project.ownership === 'personal' ? (
                <Badge variant="success">{t('personal')}</Badge>
              ) : (
                <Badge variant="secondary">{t('team')}</Badge>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">{translation.storyTitle}</h2>
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: translation.story }}
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">{t('tech_stack')}</h2>
            <TechStackTabList
              techs={project.tech_stack}
              withFiltering={false}
            />
          </div>

          {project.platforms.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t('Platforms')}</h2>

              <div className="space-y-3">
                {web && (
                  <div>
                    <Link
                      target="_blank"
                      href={web.url}
                      className="inline-flex items-center gap-2 text-lg"
                    >
                      <b>Web:</b> {web.url.replace(/^https?:\/\//, '')}
                    </Link>
                  </div>
                )}

                {instagram && (
                  <div>
                    <Link
                      target="_blank"
                      href={instagram.url}
                      className="inline-flex items-center gap-2 text-lg"
                    >
                      <b>Instagram:</b>{' '}
                      {instagram.url.match(/instagram\.com\/([^/?#]+)/)?.[1] ||
                        'Profile'}
                    </Link>
                  </div>
                )}

                {(appStore || googlePlay) && (
                  <div className="flex flex-wrap gap-4 pt-4">
                    {appStore && (
                      <Link target="_blank" href={appStore.url}>
                        <Image
                          src="/app-store.webp"
                          width={180}
                          height={52}
                          alt="Download on the App Store"
                        />
                      </Link>
                    )}
                    {googlePlay && (
                      <Link target="_blank" href={googlePlay.url}>
                        <Image
                          src="/google-play.webp"
                          width={180}
                          height={52}
                          alt="Get it on Google Play"
                        />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </main>
  );
}
