import { db } from '@/db';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function insertTrBlog() {
  try {
    const blogPath = process.argv[2];
    if (!blogPath) {
      console.error('Please provide a blog file path');
      process.exit(1);
    }

    const fileContents = fs.readFileSync(blogPath, 'utf8');
    const { data, content } = matter(fileContents);

    const blogPost = {
      id: data.id,
      title: data.title,
      date: new Date(data.date),
      author: data.author || null,
      excerpt: data.excerpt,
      content: content,
      coverImage: data.coverImage,
      readingTime: calculateReadingTime(content).toString(),
      locale: 'tr',
      categories: data.categories,
    };

    await db.blog.upsert({
      where: {
        id_locale: {
          id: blogPost.id,
          locale: blogPost.locale,
        },
      },
      update: blogPost,
      create: blogPost,
    });

    console.log('Blog post inserted successfully!');
  } catch (error) {
    console.error('Error inserting blog post:', error);
  } finally {
    await db.$disconnect();
  }
}

insertTrBlog();
