import { projects } from '../../constants/projects';
import ProjectCard from './ProjectCard';

function ProjectsList() {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
}

export default ProjectsList;
