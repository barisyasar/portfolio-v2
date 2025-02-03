'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { BlogPostWithStringDate, getPaginatedBlogs } from '@/lib/blog';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogGrid() {
  const searchParams = useSearchParams();

  const locale = searchParams.get('locale') || 'en';
  const currentPage = Number(searchParams.get('page')) || 1;
  const currentPostsPerPage = Number(searchParams.get('postsPerPage')) || 6;
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'newest';

  const t = useTranslations('BlogPage');

  const [data, setData] = useState<{
    blogs: BlogPostWithStringDate[];
    totalPages: number;
  }>({
    blogs: [],
    totalPages: 0,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await getPaginatedBlogs(
        locale,
        currentPage,
        currentPostsPerPage,
        currentCategory,
        currentSort as 'newest' | 'oldest',
      );
      setData(res);
    };
    try {
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  }, [locale, currentPage, currentPostsPerPage, currentCategory, currentSort]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.blogs.map((blog) => (
          <Link
            href={{
              pathname: '/blogs/[id]',
              params: { id: blog.id },
            }}
            key={blog.id}
            className="group"
          >
            <div className="card--5 overflow-hidden rounded-lg border">
              <div className="relative w-full" style={{ paddingTop: '52.5%' }}>
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
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/${locale}/blogs?page=${currentPage - 1}&postsPerPage=${currentPostsPerPage}&sort=${currentSort}&category=${currentCategory}`}
              className={
                currentPage <= 1 ? 'pointer-events-none opacity-50' : ''
              }
            />
          </PaginationItem>

          {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
            (page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`/${locale}/blogs?page=${page}&postsPerPage=${currentPostsPerPage}&sort=${currentSort}&category=${currentCategory}`}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ),
          )}

          <PaginationItem>
            <PaginationNext
              href={`/${locale}/blogs?page=${currentPage + 1}&postsPerPage=${currentPostsPerPage}&sort=${currentSort}&category=${currentCategory}`}
              className={
                currentPage >= data.totalPages
                  ? 'pointer-events-none opacity-50'
                  : ''
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
