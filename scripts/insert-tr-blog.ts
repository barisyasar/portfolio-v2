import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { blogs } from '../src/db/schema';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'barisyasar',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'portfolio',
});

const db = drizzle(pool);

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function insertTrBlog() {
  try {
    const filePath = path.join(process.cwd(), 'src/constants/blogs/tr/1.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Handle categories properly
    const categories = data.categories
      ? Array.isArray(data.categories)
        ? data.categories
        : [data.categories]
      : [];

    const blogPost = {
      id: '1', // Using the file name as the ID
      title: data.title,
      date: new Date(data.date),
      author: data.author || null,
      excerpt: data.excerpt,
      content: content,
      coverImage: data.coverImage,
      readingTime: calculateReadingTime(content).toString(),
      locale: 'tr',
      categories: categories,
    };

    await db.insert(blogs).values(blogPost).onConflictDoUpdate({
      target: blogs.id,
      set: blogPost,
    });

    console.log('Successfully inserted Turkish blog post');
  } catch (error) {
    console.error('Error inserting blog post:', error);
  } finally {
    await pool.end();
  }
}

insertTrBlog().catch(console.error);
