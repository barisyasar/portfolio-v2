import { db } from '@/db';
import { eq, desc, asc, and, sql } from 'drizzle-orm';
import { blogs, BlogPost } from '@/db/schema';

export type BlogPostWithStringDate = Omit<BlogPost, 'date'> & { date: string };

export const getAllBlogsIds = async () => {
  const result = await db.select().from(blogs);
  return result.map((blog) => ({
    id: blog.id,
    locale: blog.locale,
  }));
};

export const getBlogById = async (
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
};

export const getPaginatedBlogs = async ({
  locale,
  page,
  postsPerPage,
  category,
  sort,
}: {
  locale: string;
  page: number;
  postsPerPage: number;
  category: string;
  sort: 'newest' | 'oldest';
}) => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  // await sleep(3000);
  const offset = (page - 1) * postsPerPage;

  let baseQuery = db.select().from(blogs).where(eq(blogs.locale, locale));

  if (category !== 'all') {
    baseQuery = db
      .select()
      .from(blogs)
      .where(
        and(
          eq(blogs.locale, locale),
          sql`${blogs.categories} @> ARRAY[${category}]::text[]`,
        ),
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
  };
};
