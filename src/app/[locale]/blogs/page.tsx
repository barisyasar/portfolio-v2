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

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations('Blog');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      images: ['/og-image.jpg'], // You'll need to add a default OG image
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

async function BlogPage({ params: { locale }, searchParams }: BlogPageProps) {
  const t = await getTranslations('Blog');

  // Check for non-numeric values and invalid sort/category
  const hasInvalidFormat =
    (searchParams.page && !/^\d+$/.test(searchParams.page)) ||
    (searchParams.postsPerPage && !/^\d+$/.test(searchParams.postsPerPage)) ||
    (searchParams.sort && !VALID_SORT_OPTIONS.includes(searchParams.sort)) ||
    (searchParams.category &&
      !VALID_CATEGORIES.includes(searchParams.category));

  if (hasInvalidFormat) {
    redirect(
      `/${locale}/blogs?page=1&postsPerPage=${VALID_POSTS_PER_PAGE[0]}&sort=${VALID_SORT_OPTIONS[0]}&category=${VALID_CATEGORIES[0]}&error=format`,
    );
  }

  // Get current options
  const currentSort = searchParams.sort || VALID_SORT_OPTIONS[0];
  const currentCategory = searchParams.category || VALID_CATEGORIES[0];

  // Validate and parse postsPerPage
  const requestedPostsPerPage =
    Number(searchParams.postsPerPage) || VALID_POSTS_PER_PAGE[0];
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
  const requestedPage = Number(searchParams.page) || 1;
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
  );

  // Filter blogs by category if needed
  let filteredBlogs = [...blogs];
  if (currentCategory !== 'all') {
    filteredBlogs = filteredBlogs.filter((blog) =>
      blog.categories.includes(currentCategory),
    );
  }

  // Sort filtered blogs
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return currentSort === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // Create categories array for the select component
  const categories = VALID_CATEGORIES.map((cat) => ({
    value: cat,
    label: t(`categories.${cat}`),
  }));

  return (
    <div className="container mx-auto py-8">
      <Toaster />
      {searchParams.error === 'format' && (
        <InvalidUrlToast message={t('invalidUrlFormat')} />
      )}
      {searchParams.error === 'invalid' && (
        <InvalidUrlToast message={t('invalidUrl')} />
      )}

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="mt-2 text-muted-foreground">
            {t('totalBlogs', { count: totalBlogs })}
          </p>
        </div>
        <div className="flex items-center gap-4">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.map((blog) => (
          <Link
            href={`/${locale}/blogs/${blog.id}`}
            key={blog.id}
            className="group"
          >
            <div className="card--5 overflow-hidden rounded-lg border">
              <div className="relative h-48 w-full">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
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
    </div>
  );
}

export default BlogPage;
