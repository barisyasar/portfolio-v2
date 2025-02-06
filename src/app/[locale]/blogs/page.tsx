import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
// import { PostsPerPageSelect } from '@/components/blog/PostsPerPageSelect';
// import { SortSelect } from '@/components/blog/SortSelect';
// import { CategorySelect } from '@/components/blog/CategorySelect';
import { Card } from '@/components/ui/card';
import { z } from 'zod';
import { getPaginatedBlogs } from '@/lib/blog';
import BLOG_CATEGORIES from '@/constants/blogCategories';

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

const querySchema = z.object({
  locale: z.string(),
  page: z.coerce.number().optional().default(1),
  postsPerPage: z
    .union([z.literal(6), z.literal(10), z.literal(15)])
    .default(6),
  sort: z.union([z.literal('newest'), z.literal('oldest')]).default('newest'),
  category: z
    .string()
    .refine((val): val is (typeof BLOG_CATEGORIES)[number] =>
      BLOG_CATEGORIES.includes(val as any),
    )
    .optional()
    .default(BLOG_CATEGORIES[0]),
});

async function BlogPage(props: BlogPageProps) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;

  const query = querySchema.parse({
    ...searchParams,
    locale,
  });

  const t = await getTranslations('BlogPage');

  const data = await getPaginatedBlogs(query);
  console.log(data);

  return (
    <Card className="section container mx-auto flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">{t('title')}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {/*          <CategorySelect label={t('category')} />
          <SortSelect
            label={t('sortBy')}
            newestLabel={t('newest')}
            oldestLabel={t('oldest')}
          />
          <PostsPerPageSelect label={t('postsPerPage')} /> */}
        </div>
      </div>

      {/* <BlogGrid /> */}
    </Card>
  );
}

export default BlogPage;
