import { PROJECTS } from '@/constants/projects';
import { cn } from '@/lib/utils';
import ProjectCard from './project-card';

function ProjectList({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-4', className)}>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.project_id} project={project} />
      ))}
      {PROJECTS.length % 2 === 1 && <div />}
      <div>Writing details of other projects 😊</div>
    </div>
  );
}

export default ProjectList;
