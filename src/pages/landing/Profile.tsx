import styled from 'styled-components';
import Container from '../../components/Container';
import ProfileData from '../../lib/data/Profile';
import ProfileCard from '../../components/landing/ProfileCard';

const Profile = () => {
  return (
    <section>
      <StyledContainer>
        <h2>Professional Profile</h2>

        <Wrapper>
          {
            ProfileData.map((profile, idx) => <ProfileCard profile={profile} key={idx} />)
          }
        </Wrapper>
      </StyledContainer>
    </section>
  )
}

export default Profile;

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 5rem 0;
  justify-content: space-around;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (max-width: 578px) {
    padding: 3rem 0;
  }
`;

const StyledContainer = styled(Container)`
  padding-bottom: 4rem;
  padding-top: 4rem;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`;
