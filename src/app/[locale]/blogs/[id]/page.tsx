import { getBlogById } from "@/lib/blog";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import components from "@/components/mdx-components";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogDetailPageProps {
  params: {
    locale: string;
    id: string;
  };
}

export async function generateMetadata({
  params: { locale, id },
}: BlogDetailPageProps): Promise<Metadata> {
  const blog = await getBlogById(id, locale);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: blog.author ? [blog.author] : undefined,
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

async function BlogDetailPage({ params: { locale, id } }: BlogDetailPageProps) {
  const blog = await getBlogById(id, locale);
  const t = await getTranslations("Blog");

  if (!blog) {
    notFound();
  }

  return (
    <main className="container max-w-4xl py-6">
      <Button asChild>
        <Link href="/blogs">
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t("backToBlogs")}
        </Link>
      </Button>
      <Card className="overflow-hidden space-y-0">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="px-6 py-4">
          <MDXRemote source={blog.content} components={components} />

          <div className="mt-8 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-4">{t("share")}</h2>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/blogs/${id}`
                )}&text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/blogs/${id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/blogs/${id}`
                )}&title=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}

export default BlogDetailPage;
