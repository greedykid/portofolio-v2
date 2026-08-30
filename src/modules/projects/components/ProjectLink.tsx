import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectLinkProps {
  project: {
    demoUrl?: string;
    githubUrl?: string;
  };
}

const ProjectLink = ({ project }: ProjectLinkProps) => {
  return (
    <div className="flex items-center gap-4 pt-3">
      {project.demoUrl && (
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <FiExternalLink size={15} />
          Live Demo
        </Link>
      )}
      {project.githubUrl && (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <FiGithub size={15} />
          Source
        </Link>
      )}
    </div>
  );
};

export default ProjectLink;
