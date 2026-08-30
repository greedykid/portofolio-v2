import Link from 'next/link';
import { FiBookOpen, FiArrowRight } from 'react-icons/fi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import { BlogPostMeta } from '@/common/libs/blog';
import BlogCard from '@/modules/blog/components/BlogCard';

const BlogSection = ({ posts }: { posts: BlogPostMeta[] }) => {
  return (
    <section id="blog" className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Wawasan" icon={<FiBookOpen size={20} />} />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Artikel dan catatan seputar pengembangan web, database, dan dunia IT
          yang saya pelajari dan tulis.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="pt-2">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          Lihat semua wawasan
          <FiArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
