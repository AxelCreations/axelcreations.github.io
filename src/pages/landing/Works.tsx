import styled from 'styled-components';
import Container from '../../components/Container';

const MyWork = () => {
  return (
    <section>
      <StyledContainer>
        <h2>Some Of My Work</h2>
        <p>Stay tuned. Coming soon...</p>
      </StyledContainer>
    </section>
  )
}

export default MyWork;

const StyledContainer = styled(Container)`
  padding-bottom: 4rem;
  padding-top: 4rem;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`;
