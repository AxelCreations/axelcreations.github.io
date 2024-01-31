import ProjectModel from "../../lib/models/ProjectModel";
import styled from 'styled-components';

type ProjectCardProps = {
  project: ProjectModel;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Wrapper className='project'>
      <div className="project-header">

      </div>
      <div className="project-content">
        <div className="project-content-title">{project.title}</div>
        <div className="project-content-company">{project.company}</div>
        <div className="project-content-links">
          {project.link?.length && <a href={project.link} title={`${project.title} site`}>{project.title}</a>}
          {project.repo?.length && <a href={project.repo} title={`${project.title} repo`}>{project.title}</a>}
        </div>
        <p className="project-content-excerpt">{project.excerpt}</p>
      </div>
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border: 5px solid var(--bg-secondary);
  border-radius: 8px;
  
  .project {
    &-header {
      min-height: 50px;
      position: relative;
    }
    &-content {
      background: var(--bg-secondary);
      padding: 1rem;
    }
  }
`;
