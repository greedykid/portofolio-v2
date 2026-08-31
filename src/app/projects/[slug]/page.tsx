import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';

import Container from '@/common/components/elements/Container';
import { SITE_NAME, SITE_URL } from '@/common/constant/app';
import { getAllProjects, getProjectBySlug } from '@/common/libs/projects';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Proyek Tidak Ditemukan' };

  const pageUrl = `${SITE_URL}/projects/${project.id}`;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: pageUrl,
      siteName: SITE_NAME,
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const detailParagraphs = project.detail
    ? project.detail.split('\n\n')
    : [project.description];

  return (
    <Container>
      <article className="space-y-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <FiArrowLeft size={16} />
          Kembali ke Proyek
        </Link>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover object-left"
          />
        </div>

        <div className="space-y-3">
          {project.is_featured && (
            <span className="inline-flex items-center rounded-full bg-lime-300 px-2 py-1 text-[13px] font-medium text-emerald-950">
              Featured
            </span>
          )}
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((stack) => (
              <span
                key={stack}
                className="rounded-full bg-neutral-100 px-2 py-1 text-[12px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 leading-[1.8] text-neutral-700 dark:text-neutral-300">
          {detailParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <FiExternalLink size={16} />
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500"
            >
              <FiGithub size={16} />
              Source Code
            </Link>
          )}
        </div>
      </article>
    </Container>
  );
};

export default ProjectDetailPage;
