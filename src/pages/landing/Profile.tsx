import styled from 'styled-components';
import Container from '../../components/Container';

const Profile = () => {
  return (
    <section>
      <StyledContainer>
        <h2>Professional Profile</h2>
      </StyledContainer>
    </section>
  )
}

export default Profile;

const StyledContainer = styled(Container)`
  padding-bottom: 4rem;
  padding-top: 4rem;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`;
