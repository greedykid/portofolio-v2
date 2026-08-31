import { PROJECTS } from '@/common/constant/data';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stacks: string[];
  is_featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  detail?: string;
}

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(id: string): Project | null {
  return PROJECTS.find((project) => project.id === id) ?? null;
}
