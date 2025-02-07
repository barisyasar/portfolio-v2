'use client';
import { BlogPostWithStringDate } from '@/lib/blog';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { BlogGridSkeleton } from './BlogCardSkeleton';
import { CategorySelect } from './CategorySelect';
import { SortSelect } from './SortSelect';
import { PostsPerPageSelect } from './PostsPerPageSelect';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import BlogPagination from './BlogPagination';

export default function BlogGrid({
  blogs,
  totalPages,
}: {
  blogs: BlogPostWithStringDate[];
  totalPages: number;
}) {
  const t = useTranslations('BlogPage');

  const [isLoading, startTransition] = useTransition();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <CategorySelect
            startTransition={startTransition}
            isLoading={isLoading}
          />

          <SortSelect startTransition={startTransition} isLoading={isLoading} />
          <PostsPerPageSelect
            startTransition={startTransition}
            isLoading={isLoading}
          />
        </div>
      </div>
      {isLoading ? (
        <BlogGridSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              href={{
                pathname: '/blogs/[id]',
                params: { id: blog.id },
              }}
              key={blog.id}
              className="group"
              scroll={true}
            >
              <div className="card--5 overflow-hidden rounded-lg border">
                <div
                  className="relative w-full"
                  style={{ paddingTop: '52.5%' }}
                >
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground">{blog.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <time>{blog.date}</time>
                    <span>•</span>
                    <span>{blog.readingTime} min read</span>
                    <span>•</span>
                    <div className="flex flex-wrap gap-1">
                      {blog.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                        >
                          {t(`categories.${category}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <BlogPagination
        totalPages={totalPages}
        startTransition={startTransition}
        isLoading={isLoading}
      />
    </>
  );
}
