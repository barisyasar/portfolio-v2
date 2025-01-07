import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
}

const BLOGS_DIRECTORY = path.join(process.cwd(), "src/constants/blogs");
const POSTS_PER_PAGE = 6;

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function getAllBlogs(locale: string): Promise<BlogPost[]> {
  const files = fs.readdirSync(path.join(BLOGS_DIRECTORY, locale));

  const blogs = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(BLOGS_DIRECTORY, locale, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        id: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content: content,
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content),
        locale,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
}

export async function getBlogById(
  id: string,
  locale: string
): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOGS_DIRECTORY, locale, `${id}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

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
    };
  } catch (error) {
    return null;
  }
}

export async function getPaginatedBlogs(locale: string, page: number = 1) {
  const blogs = await getAllBlogs(locale);
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  return {
    blogs: blogs.slice(startIndex, endIndex),
    totalPages,
  };
}
