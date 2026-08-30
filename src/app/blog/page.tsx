import { Metadata } from 'next';

import Container from '@/common/components/elements/Container';
import SectionHeading from '@/common/components/elements/SectionHeading';
import { getAllPosts } from '@/common/libs/blog';
import BlogCard from '@/modules/blog/components/BlogCard';

export const metadata: Metadata = {
  title: 'Wawasan',
  description:
    'Artikel dan catatan Rizki Arbiansyah seputar pengembangan web, database, dan dunia IT.',
};

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <Container>
      <div className="space-y-5">
        <div className="space-y-3">
          <SectionHeading title="Semua Wawasan" />
          <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
            Kumpulan artikel dan catatan teknis yang saya tulis.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
