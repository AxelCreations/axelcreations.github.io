import styled from 'styled-components';
import Container from '../../components/Container';
import WorkTimeline from '../../components/WorkTimeline';

const WorkExperience = () => {
  return (
    <section className='bg-secondary'>
      <StyledContainer>
        <h2>My Working Experience</h2>

        <WorkTimeline />
      </StyledContainer>
    </section>
  )
}

export default WorkExperience;

const StyledContainer = styled(Container)`
  padding-bottom: 4rem;
  padding-top: 6rem;
  
  @media screen and (max-width: 578px) {
    padding-bottom: 3rem;
    padding-top: 5rem;
  }

  h2 {
    margin-bottom: 2rem;
  }`
  
;
