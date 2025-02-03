import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { PostsPerPageSelect } from '@/components/blog/PostsPerPageSelect';
import { redirect } from 'next/navigation';
import { InvalidUrlToast } from '@/components/blog/InvalidUrlToast';
import { Toaster } from '@/components/ui/toaster';
import { SortSelect } from '@/components/blog/SortSelect';
import { CategorySelect } from '@/components/blog/CategorySelect';
import { Card } from '@/components/ui/card';
import { Suspense } from 'react';
import { BlogGridSkeleton } from '@/components/blog/BlogCardSkeleton';
import BlogGrid from '@/components/blog/BlockGrid';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('BlogPage.metadata');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/blogs',
      languages: {
        en: '/en/blogs',
        tr: '/tr/blogs',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      url: '/blogs',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      images: ['/og-image.jpg'],
    },
  };
}

interface BlogPageProps {
  params: {
    locale: string;
  };
  searchParams: {
    page?: string;
    postsPerPage?: string;
    error?: string;
    sort?: string;
    category?: string;
  };
}

const VALID_POSTS_PER_PAGE = [6, 10, 15];
const VALID_SORT_OPTIONS = ['newest', 'oldest'];
const VALID_CATEGORIES = [
  'all',
  'nextjs',
  'reactjs',
  'typescript',
  'javascript',
];

async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { page, postsPerPage, sort, category, error } = await searchParams;

  const t = await getTranslations('BlogPage');

  const hasInvalidFormat =
    (page && !/^\d+$/.test(page)) ||
    (postsPerPage && !/^\d+$/.test(postsPerPage)) ||
    (sort && !VALID_SORT_OPTIONS.includes(sort)) ||
    (category && !VALID_CATEGORIES.includes(category));

  if (hasInvalidFormat) {
    redirect(
      `/${locale}/blogs?page=1&postsPerPage=${VALID_POSTS_PER_PAGE[0]}&sort=${VALID_SORT_OPTIONS[0]}&category=${VALID_CATEGORIES[0]}&error=format`,
    );
  }

  const currentCategory = category || VALID_CATEGORIES[0];

  const requestedPostsPerPage = Number(postsPerPage) || VALID_POSTS_PER_PAGE[0];
  const currentPostsPerPage = VALID_POSTS_PER_PAGE.includes(
    requestedPostsPerPage,
  )
    ? requestedPostsPerPage
    : VALID_POSTS_PER_PAGE[0];

  const requestedPage = Number(page) || 1;
  const currentPage = Math.max(1, Math.min(requestedPage, currentPostsPerPage));

  const wasInvalid =
    requestedPage !== currentPage ||
    requestedPostsPerPage !== currentPostsPerPage;

  if (wasInvalid) {
    redirect(
      `/${locale}/blogs?page=${currentPage}&postsPerPage=${currentPostsPerPage}&error=invalid`,
    );
  }

  const categories = VALID_CATEGORIES.map((cat) => ({
    value: cat,
    label: t(`categories.${cat}`),
  }));

  return (
    <div className="container mx-auto">
      <Toaster />
      {error === 'format' && (
        <InvalidUrlToast message={t('invalidUrlFormat')} />
      )}
      {error === 'invalid' && <InvalidUrlToast message={t('invalidUrl')} />}

      <Card className="section flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">{t('title')}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <CategorySelect label={t('category')} categories={categories} />
            <SortSelect
              label={t('sortBy')}
              newestLabel={t('newest')}
              oldestLabel={t('oldest')}
            />
            <PostsPerPageSelect label={t('postsPerPage')} />
          </div>
        </div>

        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogGrid />
        </Suspense>
      </Card>
    </div>
  );
}

export default BlogPage;
