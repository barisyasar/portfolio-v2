import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { getPaginatedBlogs } from '@/lib/blog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { PostsPerPageSelect } from '@/components/blog/PostsPerPageSelect';
import { redirect } from 'next/navigation';
import { InvalidUrlToast } from '@/components/blog/InvalidUrlToast';
import { Toaster } from '@/components/ui/toaster';
import { SortSelect } from '@/components/blog/SortSelect';
import { CategorySelect } from '@/components/blog/CategorySelect';
import { Card } from '@/components/ui/card';

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

  // Check for non-numeric values and invalid sort/category
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

  // Get current options
  const currentSort = sort || VALID_SORT_OPTIONS[0];
  const currentCategory = category || VALID_CATEGORIES[0];

  // Validate and parse postsPerPage
  const requestedPostsPerPage = Number(postsPerPage) || VALID_POSTS_PER_PAGE[0];
  const currentPostsPerPage = VALID_POSTS_PER_PAGE.includes(
    requestedPostsPerPage,
  )
    ? requestedPostsPerPage
    : VALID_POSTS_PER_PAGE[0];

  // Get total blogs first to validate page number
  const { blogs: allBlogs } = await getPaginatedBlogs(
    locale,
    1,
    Number.MAX_SAFE_INTEGER,
  );
  const maxPages = Math.ceil(allBlogs.length / currentPostsPerPage);

  // Validate and parse page number
  const requestedPage = Number(page) || 1;
  const currentPage = Math.max(1, Math.min(requestedPage, maxPages));

  // Check if URL was invalid
  const wasInvalid =
    requestedPage !== currentPage ||
    requestedPostsPerPage !== currentPostsPerPage;

  // Redirect if any parameter was invalid
  if (wasInvalid) {
    redirect(
      `/${locale}/blogs?page=${currentPage}&postsPerPage=${currentPostsPerPage}&error=invalid`,
    );
  }

  const { blogs, totalPages, totalBlogs } = await getPaginatedBlogs(
    locale,
    currentPage,
    currentPostsPerPage,
    currentCategory,
    currentSort as 'newest' | 'oldest',
  );

  // Create categories array for the select component
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
            <p className="mt-2 text-muted-foreground">
              {t('totalBlogs', { count: totalBlogs })}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <CategorySelect
              locale={locale}
              currentCategory={currentCategory}
              currentPage={currentPage}
              currentPostsPerPage={currentPostsPerPage}
              currentSort={currentSort}
              label={t('category')}
              categories={categories}
            />
            <SortSelect
              locale={locale}
              currentSort={currentSort}
              currentPage={currentPage}
              currentPostsPerPage={currentPostsPerPage}
              label={t('sortBy')}
              newestLabel={t('newest')}
              oldestLabel={t('oldest')}
            />
            <PostsPerPageSelect
              locale={locale}
              currentPostsPerPage={currentPostsPerPage}
              label={t('postsPerPage')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              href={`/${locale}/blogs/${blog.id}`}
              key={blog.id}
              className="group"
            >
              <div className="card--5 overflow-hidden rounded-lg border">
                <div
                  className="relative w-full"
                  style={{ paddingTop: '52.5%' }}
                >
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground">{blog.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <time>{blog.date}</time>
                    <span>•</span>
                    <span>{blog.readingTime} min read</span>
                    <span>•</span>
                    <div className="flex flex-wrap gap-1">
                      {blog.categories.map((cat) => (
                        <span
                          key={cat}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                        >
                          {t(`categories.${cat}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/${locale}/blogs?page=${currentPage - 1}&postsPerPage=${currentPostsPerPage}`}
                className={
                  currentPage <= 1 ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`/${locale}/blogs?page=${page}&postsPerPage=${currentPostsPerPage}`}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={`/${locale}/blogs?page=${currentPage + 1}&postsPerPage=${currentPostsPerPage}`}
                className={
                  currentPage >= totalPages
                    ? 'pointer-events-none opacity-50'
                    : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Card>
    </div>
  );
}

export default BlogPage;
