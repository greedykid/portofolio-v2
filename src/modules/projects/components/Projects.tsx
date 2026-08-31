'use client';

import { motion } from 'motion/react';

import { PROJECTS } from '@/common/constant/data';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

import ProjectLink from './ProjectLink';
import LightboxImage from './LightboxImage';

const Projects = () => {
  return (
    <section id="projects" className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Proyek Unggulan" />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Beberapa proyek nyata yang pernah saya kerjakan, mulai dari aplikasi
          e-commerce hingga website katalog digital yang aktif digunakan.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="group relative cursor-pointer overflow-hidden border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%]">
              {project.is_featured && (
                <div className="absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-lime-300 px-2 py-1 text-[13px] font-medium text-emerald-950">
                  <span>Featured</span>
                </div>
              )}
              <div className="relative">
                <LightboxImage
                  src={project.image}
                  alt={project.title}
                  className="h-48 rounded-t-xl object-cover object-left"
                />
                <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                  <span>View Project</span>
                </div>
              </div>
              <div className="space-y-2 p-5">
                <div className="cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-teal-400 lg:group-hover:text-teal-600">
                  {project.title}
                </div>
                <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.stacks.map((stack, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-neutral-100 px-2 py-1 text-[12px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <ProjectLink project={project} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
