import Link from 'next/link';

import Card from '@/common/components/elements/Card';
import { BlogPostMeta } from '@/common/libs/blog';

const BlogCard = ({ post }: { post: BlogPostMeta }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:scale-[101%] dark:border-neutral-900 dark:hover:border-neutral-700">
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
          <h3 className="text-lg font-medium text-neutral-800 transition-colors group-hover:text-teal-600 dark:text-neutral-200 dark:group-hover:text-teal-400">
            {post.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            {post.description}
          </p>
          <div className="flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-500">
            <span>{formattedDate}</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
