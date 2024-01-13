import Container from '../../components/Container';

import styled from 'styled-components';

const Contacts = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <h2>Contacts</h2>
      </StyledContainer>
    </StyledSection>
  )
}

export default Contacts;

const StyledSection = styled.section`
  background: linear-gradient(to top, #20242C 0, #20242C 50%, #313640 50%);
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

const StyledContainer = styled(Container)`
  background-color: #313640;
  border: 1px solid transparent;
  box-shadow: 0 0 8px 2px rgba(0,0,0, 0.12);
  padding: 2rem 1.5rem;

  @media screen and (max-width: 1200px) {
    padding: 2rem 1rem !important;
  }
`;
