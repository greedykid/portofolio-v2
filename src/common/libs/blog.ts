import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  featured: boolean;
  slug: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
}

function slugFromFile(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function parseFrontmatter(raw: string, slug: string) {
  const { data, content } = matter(raw);
  const meta: BlogPostMeta = {
    title: data.title ?? slug,
    date: String(data.date ?? ''),
    description: data.description ?? '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: Boolean(data.featured),
    slug,
    readingTime: calculateReadingTime(content),
  };
  return { meta, content };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));

  const posts = files.map((file) => {
    const slug = slugFromFile(file);
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const { meta } = parseFrontmatter(raw, slug);
    return meta;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { meta, content } = parseFrontmatter(raw, slug);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  return { ...meta, contentHtml: processed.toString() };
}
