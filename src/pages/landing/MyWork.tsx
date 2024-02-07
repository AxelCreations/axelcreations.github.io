import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';

import ProjectsData from '../../lib/data/Project';
import ProjectModel from '../../lib/models/ProjectModel';
import ProjectCard from '../../components/landing/ProjectCard';
import ProjectModal from '../../components/ProjectModal';

import { ImageObserver } from '../../lib/Observer';

const MyWork = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectModel|null>(null);

  useEffect(() => {
    if ( !!selectedProject ) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!!sectionRef) {
      const sectionElement: HTMLElement = sectionRef.current as HTMLElement;

      ImageObserver({ sectionElement: sectionElement });
    }
  }, [sectionRef]);

  return (
    <section ref={sectionRef}>
      <StyledContainer>
        <h2>Coding Solutions</h2>
        <p>Ideas turned into reality</p>
        
        <Wrapper>
          {
            ProjectsData
              .map((project, idx) => <ProjectCard project={project} carouselId={idx} key={idx} changeSelectedProject={setSelectedProject} />)
              .reverse()
          }
        </Wrapper>
      </StyledContainer>
      <ProjectModal selectedProject={selectedProject} changeSelectedProject={setSelectedProject} />
    </section>
  )
}

export default MyWork;

const StyledContainer = styled(Container)`
  padding-bottom: 4rem;
  padding-top: 8rem;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
    padding-top: 5rem;
  }

  > p {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 200;
    letter-spacing: 1px;

    @media screen and (max-width: 578px) {
      font-size: 1rem;
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 5rem 0;
  
  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 992px) {
    gap: 2rem;
    grid-template-columns: 1fr;
  }
  
  @media screen and (max-width: 578px) {
    padding: 3rem 0;
  }
`;
