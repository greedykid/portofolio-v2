import { Metadata } from 'next';
import Link from 'next/link';

import Container from '@/common/components/elements/Container';
import SectionHeading from '@/common/components/elements/SectionHeading';
import { SITE_NAME, SITE_URL } from '@/common/constant/app';
import { getAllProjects } from '@/common/libs/projects';

export const metadata: Metadata = {
  title: 'Proyek',
  description:
    'Kumpulan proyek Rizki Arbiansyah, mulai dari aplikasi e-commerce hingga website katalog digital.',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: `${SITE_URL}/projects`,
    siteName: SITE_NAME,
    title: 'Proyek | Rizki Arbiansyah',
    description:
      'Kumpulan proyek Rizki Arbiansyah, mulai dari aplikasi e-commerce hingga website katalog digital.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyek | Rizki Arbiansyah',
    description:
      'Kumpulan proyek Rizki Arbiansyah, mulai dari aplikasi e-commerce hingga website katalog digital.',
  },
};

const ProjectsPage = () => {
  const projects = getAllProjects();

  return (
    <Container>
      <div className="space-y-5">
        <div className="space-y-3">
          <SectionHeading title="Semua Proyek" />
          <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
            Proyek nyata yang pernah saya kerjakan.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group overflow-hidden rounded-xl border border-neutral-200 transition-all hover:scale-[101%] hover:border-teal-500 dark:border-neutral-900 dark:hover:border-teal-500"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover object-left"
              />
              <div className="space-y-2 p-5">
                <div className="text-lg text-neutral-700 group-hover:text-teal-600 dark:text-neutral-300 dark:group-hover:text-teal-400">
                  {project.title}
                </div>
                <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectsPage;
