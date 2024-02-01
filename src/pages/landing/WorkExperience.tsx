import styled from 'styled-components';
import Container from '../../components/Container';
import WorkTimeline from '../../components/WorkTimeline';

const WorkExperience = () => {
  return (
    <section className='bg-secondary'>
      <StyledContainer>
        <h2>Work Experience Expedition</h2>
        <p>Navigating Professional Evolution</p>

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

  > p {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 200;
    letter-spacing: 1px;

    @media screen and (max-width: 578px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
  

`;
