import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { db } from '@/db';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/constants/blogs');

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function migrateBlogs() {
  console.log('Starting blog migration...');

  const locales = fs.readdirSync(BLOGS_DIRECTORY);

  try {
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
          console.log(`Migrated ${locale}/${path.parse(filename).name}`);
        } catch (error) {
          console.error(
            `Error migrating ${locale}/${path.parse(filename).name}:`,
            error,
          );
        }
      }
    }
  } finally {
    await db.$disconnect();
  }

  console.log('Migration completed!');
}

migrateBlogs().catch(console.error);
