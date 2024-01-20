import styled from 'styled-components';
import Container from '../../components/Container';

const Skills = () => {
  return (
    <section className='bg-secondary'>
      <StyledContainer>
        <h2>Technical Skills</h2>
      </StyledContainer>
    </section>
  )
}

export default Skills;

const StyledContainer = styled(Container)`
  padding-bottom: 4rem;
  padding-top: 4rem;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`;
