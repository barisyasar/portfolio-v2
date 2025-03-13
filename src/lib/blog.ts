import { db } from '@/db';
import type { PrismaClient } from '@prisma/client';

type Blog = NonNullable<
  Awaited<ReturnType<PrismaClient['blog']['findUnique']>>
>;
export type BlogPostWithStringDate = Omit<Blog, 'date'> & { date: string };

export const getAllBlogsIds = async () => {
  try {
    const result = await db.blog.findMany({
      select: {
        id: true,
        locale: true,
      },
    });
    return result;
  } catch (error) {
    console.error('Error fetching blog IDs:', error);
    return [];
  }
};

export const getBlogById = async (
  id: string,
  locale: string,
): Promise<BlogPostWithStringDate | null> => {
  try {
    const result = await db.blog.findUnique({
      where: {
        id_locale: {
          id,
          locale,
        },
      },
    });

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
  const offset = (page - 1) * postsPerPage;

  const where = {
    locale,
    ...(category !== 'all'
      ? {
          categories: {
            has: category,
          },
        }
      : {}),
  };

  const [blogResults, totalBlogs] = await Promise.all([
    db.blog.findMany({
      where,
      orderBy: {
        date: sort === 'newest' ? 'desc' : 'asc',
      },
      skip: offset,
      take: postsPerPage,
    }),
    db.blog.count({
      where,
    }),
  ]);

  const totalPages = Math.ceil(totalBlogs / postsPerPage);

  const mappedBlogs = blogResults.map((blog: Blog) => ({
    ...blog,
    date: blog.date.toISOString(),
  }));

  return {
    blogs: mappedBlogs as BlogPostWithStringDate[],
    totalPages,
  };
};
