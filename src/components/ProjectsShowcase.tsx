import { ProjectCard } from './ProjectCard';
import { randomUUID } from 'node:crypto';
export function ProjectsShowcase() {


  return (
    <div className="bg-bluevs-500 px-32 mb-14 pt-4 pb-6 mt-14 rounded">
      <div className="grid grid-cols-2">
      <ProjectCard />
     <ProjectCard />
     <ProjectCard />
      </div>
     
    </div>
  );
}
