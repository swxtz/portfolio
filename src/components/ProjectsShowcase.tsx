import { ProjectCard } from './ProjectCard';
import { randomUUID } from 'node:crypto';
export function ProjectsShowcase() {
  const projects = [
    {
      title: 'spotify-ui',
      description: 'Um clone da interface do spotify',
      imageUrl:
        'https://media.discordapp.net/attachments/1095183064604364942/1098672388876542042/image.png?width=1366&height=768',
      githubUrl: 'https://github.com/swxtz/spotify-ui',
    },
    {
      title: 'spotify-ui',
      description: 'Um clone da interface do spotify',
      imageUrl:
        'https://media.discordapp.net/attachments/1095183064604364942/1098672388876542042/image.png?width=1366&height=768',
      githubUrl: 'https://github.com/swxtz/spotify-ui',
    },
  ];
  return (
    <div className="bg-bluevs-500 px-32 mb-14 pt-4 pb-6 mt-14 rounded">
      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            key={randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}
