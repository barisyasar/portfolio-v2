import { PROJECTS } from '@/constants/projects';
import { cn } from '@/lib/utils';
import ProjectCard from './project-card';

function ProjectList({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-4', className)}>
      {PROJECTS.slice(0, 2).map((project) => (
        <ProjectCard key={project.project_id} project={project} />
      ))}
      I am coding rest of all 😊
    </div>
  );
}

export default ProjectList;
