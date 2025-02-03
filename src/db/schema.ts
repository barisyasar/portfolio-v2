import {
  pgTable,
  text,
  timestamp,
  varchar,
  primaryKey,
} from 'drizzle-orm/pg-core';

export const blogs = pgTable(
  'blogs',
  {
    id: varchar('id').notNull(),
    title: varchar('title').notNull(),
    date: timestamp('date').notNull(),
    author: varchar('author'),
    excerpt: text('excerpt').notNull(),
    content: text('content').notNull(),
    coverImage: varchar('cover_image').notNull(),
    readingTime: varchar('reading_time').notNull(),
    locale: varchar('locale').notNull(),
    categories: text('categories').array().notNull(),
  },
  (table) => {
    return {
      pk: primaryKey(table.id, table.locale),
    };
  },
);

export type BlogPost = typeof blogs.$inferSelect;
export type NewBlogPost = typeof blogs.$inferInsert;
