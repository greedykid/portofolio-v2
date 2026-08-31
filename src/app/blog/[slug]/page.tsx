import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

import Container from '@/common/components/elements/Container';
import { getAllPosts, getPostBySlug } from '@/common/libs/blog';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const SITE_URL = 'https://rizkiarbiansyah.vercel.app';

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Artikel Tidak Ditemukan' };

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const ogImageUrl = `${pageUrl}/opengraph-image`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      locale: 'id_ID',
      url: pageUrl,
      siteName: 'Rizki Arbiansyah Portfolio',
      title: post.title,
      description: post.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  };
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container>
      <article className="space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <FiArrowLeft size={16} />
          Kembali ke Wawasan
        </Link>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2 py-1 text-[12px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-500">
            <span>{formattedDate}</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        <div
          className="prose prose-neutral dark:prose-invert max-w-none leading-[1.8] text-neutral-800 dark:text-neutral-300"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Container>
  );
};

export default BlogDetailPage;
