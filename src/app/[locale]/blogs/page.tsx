import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { z } from 'zod';
import { getPaginatedBlogs } from '@/lib/blog';
import BLOG_CATEGORIES from '@/constants/blogCategories';
import BlogGrid from '@/components/blog/BlogGrid';

export async function generateMetadata({
  params,
}: {
  params: Params;
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

const querySchema = z.object({
  locale: z.string(),
  page: z.coerce.number().optional().default(1),
  postsPerPage: z
    .union([z.literal(1), z.literal(6), z.literal(10), z.literal(15)])
    .or(z.coerce.number().refine((n) => [1, 6, 10, 15].includes(n)))
    .default(1),
  sort: z.union([z.literal('newest'), z.literal('oldest')]).default('newest'),
  category: z
    .string()
    .refine((val): val is (typeof BLOG_CATEGORIES)[number] =>
      BLOG_CATEGORIES.includes(val as any),
    )
    .optional()
    .default(BLOG_CATEGORIES[0]),
});

type Params = Promise<{
  locale: string;
}>;

type SearchParams = Promise<{
  page?: string;
  postsPerPage?: string;
  error?: string;
  sort?: string;
  category?: string;
}>;

async function BlogPage(props: { params: Params; searchParams: SearchParams }) {
  const { locale } = await props.params;
  const searchParams = await props.searchParams;
  setRequestLocale(locale);

  let query;
  try {
    query = querySchema.parse({
      ...searchParams,
      locale,
    });
  } catch (error) {
    return (
      <main className="container">
        <Card className="section">
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-red-500">Invalid query parameters</p>
          </div>
        </Card>
      </main>
    );
  }

  const data = await getPaginatedBlogs(query);

  return (
    <main className="container">
      <Card className="section">
        {data.blogs.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-sm text-muted-foreground">
              No blogs found
            </p>
          </div>
        ) : (
          <BlogGrid blogs={data.blogs} totalPages={data.totalPages} />
        )}
      </Card>
    </main>
  );
}

export default BlogPage;
