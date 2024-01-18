import ContactCard from '../../components/landing/ContactCard';
import Container from '../../components/Container';
import ContactsData from '../../lib/data/Contact';

import styled from 'styled-components';

const Contacts = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <div className="grid">
          { ContactsData.map( contact => <ContactCard contact={contact} key={contact.text} /> ) }
        </div>
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

  @media screen and (max-width: 1440px) {
    padding: 2rem 1.5rem !important;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem 1rem !important;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 578px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
    }
  }
`;
