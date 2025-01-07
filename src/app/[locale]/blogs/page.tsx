import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { getPaginatedBlogs } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("Blog");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      images: ["/og-image.jpg"], // You'll need to add a default OG image
    },
  };
}

interface BlogPageProps {
  params: {
    locale: string;
  };
  searchParams: {
    page?: string;
  };
}

async function BlogPage({ params: { locale }, searchParams }: BlogPageProps) {
  const t = await getTranslations("Blog");
  const currentPage = Number(searchParams.page) || 1;
  const { blogs, totalPages } = await getPaginatedBlogs(locale, currentPage);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            href={`/${locale}/blogs/${blog.id}`}
            key={blog.id}
            className="group"
          >
            <div className="border rounded-lg overflow-hidden card--5">
              <div className="relative h-48 w-full">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {blog.title}
                </h2>
                <p className="text-muted-foreground">{blog.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <time>{blog.date}</time>
                  <span className="mx-2">•</span>
                  <span>{blog.readingTime} min read</span>
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
              href={`/${locale}/blogs?page=${currentPage - 1}`}
              className={
                currentPage <= 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={`/${locale}/blogs?page=${page}`}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href={`/${locale}/blogs?page=${currentPage + 1}`}
              className={
                currentPage >= totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default BlogPage;
