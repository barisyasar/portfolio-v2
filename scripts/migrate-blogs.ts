import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { blogs } from '../src/db/schema';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/constants/blogs');

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function migrateBlogs() {
  const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'barisyasar',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'portfolio',
  });

  const db = drizzle(pool);

  console.log('Starting blog migration...');

  const locales = fs.readdirSync(BLOGS_DIRECTORY);

  for (const locale of locales) {
    const localePath = path.join(BLOGS_DIRECTORY, locale);
    if (!fs.statSync(localePath).isDirectory()) continue;

    console.log(`Processing locale: ${locale}`);
    const files = fs.readdirSync(localePath);

    for (const filename of files) {
      if (!filename.endsWith('.md')) continue;

      const filePath = path.join(localePath, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
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
        locale: locale,
        categories: data.categories,
      };

      try {
        await db.insert(blogs).values(blogPost);
      } catch (error) {
        console.error(
          `Error migrating ${locale}/${path.parse(filename).name}:`,
          error,
        );
      }
    }
  }

  await pool.end();
  console.log('Migration completed!');
}

migrateBlogs().catch(console.error);
