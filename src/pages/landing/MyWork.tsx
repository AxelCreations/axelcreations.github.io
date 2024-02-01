import styled from 'styled-components';
import Container from '../../components/Container';

import ProjectsData from '../../lib/data/Project';
import ProjectCard from '../../components/landing/ProjectCard';

const MyWork = () => {
  return (
    <section>
      <StyledContainer>
        <h2>Some Of My Work</h2>
        
        <Wrapper>
          {
            ProjectsData
              .map((project, idx) => <ProjectCard project={project} carouselId={idx} key={idx} />)
              .reverse()
          }
        </Wrapper>
      </StyledContainer>
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
