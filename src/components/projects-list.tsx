import { PROJECTS } from '@/constants/projects';
import { cn } from '@/lib/utils';
import ProjectCard from './project-card';

function ProjectsList({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-4', className)}>
      {[...PROJECTS, ...PROJECTS].map((project) => (
        <ProjectCard key={project.project_id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsList;
