import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export async function getAllBlogs(locale: string): Promise<BlogPost[]> {
  const files = fs.readdirSync(path.join(BLOGS_DIRECTORY, locale));

  const blogs = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(BLOGS_DIRECTORY, locale, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      let categories = ['all'];
      if (data.categories) {
        categories = Array.isArray(data.categories)
          ? data.categories
          : [data.categories];
      }

      return {
        id: filename.replace(/\.md$/, ''),
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

export async function getBlogById(
  id: string,
  locale: string,
): Promise<BlogPost | null> {
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
      id,
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
}

export async function getPaginatedBlogs(
  locale: string,
  page: number = 1,
  postsPerPage: number = 6,
) {
  const blogs = await getAllBlogs(locale);
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return {
    blogs: blogs.slice(startIndex, endIndex),
    totalPages,
    totalBlogs: blogs.length,
  };
}
