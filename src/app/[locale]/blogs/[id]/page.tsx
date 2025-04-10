import { getAllBlogsIds, getBlogById } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import components from '@/components/mdx-components';
import { Card } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShareMenu } from '@/components/blog/ShareMenu';

interface BlogDetailPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = await getAllBlogsIds();
  return blogs.map((blog) => ({
    locale: blog.locale,
    id: blog.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations('BlogPage.metadata');
  const blog = await getBlogById(id, locale);

  if (!blog) {
    return {
      title: t('notFound'),
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
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
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, id } = await params;

  const blog = await getBlogById(id, locale);
  const t = await getTranslations('BlogPage');

  if (!blog) {
    notFound();
  }

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/blogs/${id}`;

  return (
    <main className="container">
      <Button asChild className="mb-4">
        <Link href="/blogs" prefetch={false}>
          <ChevronLeft className="mr-2 animate-bounce-horizontal" />
          {t('backToBlogs')}
        </Link>
      </Button>
      <Card className="overflow-hidden">
        <div className="mx-auto max-w-screen-md">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <ShareMenu url={currentUrl} title={blog.title} />
          </div>

          <div className="px-6 py-4">
            <MDXRemote source={blog.content} components={components} />
          </div>
        </div>
      </Card>
    </main>
  );
}

export default BlogDetailPage;
