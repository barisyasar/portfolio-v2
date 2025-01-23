import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unstable_cache } from 'next/cache';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  readingTime: number;
  locale: string;
  categories: string[];
}

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/constants/blogs');

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function getAllBlogs(locale: string = 'en'): Promise<BlogPost[]> {
  const localePath = path.join(BLOGS_DIRECTORY, locale);
  if (!fs.existsSync(localePath)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  const files = fs.readdirSync(localePath);

  const blogs = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(localePath, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      let categories = ['all'];
      if (data.categories) {
        categories = Array.isArray(data.categories)
          ? data.categories
          : [data.categories];
      }

      return {
        id: data.id,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content: content,
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content),
        locale,
        categories,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
}

export const getBlogById = unstable_cache(
  async (id: string, locale: string): Promise<BlogPost | null> => {
    try {
      const filePath = path.join(BLOGS_DIRECTORY, locale, `${id}.md`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      let categories = ['all'];
      if (data.categories) {
        categories = Array.isArray(data.categories)
          ? data.categories
          : [data.categories];
      }

      return {
        id: data.id,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content: content,
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content),
        locale,
        categories,
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
    postsPerPage: number = 10,
    category: string = 'all',
    sort: 'newest' | 'oldest' = 'newest',
  ) => {
    if (!fs.existsSync(path.join(BLOGS_DIRECTORY, locale))) {
      throw new Error(`Invalid locale: ${locale}`);
    }

    const blogs = await getAllBlogs(locale);

    const filteredBlogs =
      category === 'all'
        ? blogs
        : blogs.filter((blog) => blog.categories.includes(category));

    const sortedBlogs = filteredBlogs.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sort === 'newest' ? dateB - dateA : dateA - dateB;
    });

    const startIndex = (page - 1) * postsPerPage;
    const paginatedBlogs = sortedBlogs.slice(
      startIndex,
      startIndex + postsPerPage,
    );
    const totalBlogs = sortedBlogs.length;
    const totalPages = Math.ceil(totalBlogs / postsPerPage);

    return {
      blogs: paginatedBlogs,
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
