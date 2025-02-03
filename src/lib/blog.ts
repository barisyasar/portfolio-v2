import { unstable_cache } from 'next/cache';
import { db } from '@/db';
import { eq, desc, asc, and, sql } from 'drizzle-orm';
import { blogs, BlogPost } from '@/db/schema';

export type BlogPostWithStringDate = Omit<BlogPost, 'date'> & { date: string };

export async function getAllBlogs(
  locale: string = 'en',
): Promise<BlogPostWithStringDate[]> {
  const results = await db
    .select()
    .from(blogs)
    .where(eq(blogs.locale, locale))
    .orderBy(desc(blogs.date));

  return results.map((blog) => ({
    ...blog,
    date: blog.date.toISOString(),
  }));
}

export const getBlogById = unstable_cache(
  async (
    id: string,
    locale: string,
  ): Promise<BlogPostWithStringDate | null> => {
    try {
      const [result] = await db
        .select()
        .from(blogs)
        .where(and(eq(blogs.id, id), eq(blogs.locale, locale)));

      if (!result) return null;

      return {
        ...result,
        date: result.date.toISOString(),
      };
    } catch (error) {
      return null;
    }
  },
  ['blog', 'id'],
  {
    revalidate: 3600,
    tags: ['blog', 'id'],
  },
);

export const getPaginatedBlogs = unstable_cache(
  async (
    locale: string = 'en',
    page: number = 1,
    postsPerPage: number = 6,
    categories: string = 'all',
    sort: 'newest' | 'oldest' = 'newest',
  ) => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await sleep(5000);
    const offset = (page - 1) * postsPerPage;

    let baseQuery = db.select().from(blogs).where(eq(blogs.locale, locale));

    if (categories !== 'all') {
      baseQuery = baseQuery.where(
        sql`${blogs.categories} @> ARRAY[${categories}]::text[]`,
      );
    }

    const query = baseQuery
      .orderBy(sort === 'newest' ? desc(blogs.date) : asc(blogs.date))
      .limit(postsPerPage)
      .offset(offset);

    const [blogResults, countResult] = await Promise.all([
      query,
      db
        .select({ count: sql`count(*)::int` })
        .from(blogs)
        .where(eq(blogs.locale, locale)),
    ]);

    const totalBlogs = Number(countResult[0].count);
    const totalPages = Math.ceil(totalBlogs / postsPerPage);

    const mappedBlogs = blogResults.map((blog) => ({
      ...blog,
      date: blog.date.toISOString(),
    }));

    return {
      blogs: mappedBlogs as BlogPostWithStringDate[],
      totalPages,
      totalBlogs,
    };
  },
  ['blogs', 'pagination'],
  {
    revalidate: 3600,
    tags: ['blogs'],
  },
);
