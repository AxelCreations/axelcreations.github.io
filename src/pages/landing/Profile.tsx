import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import ProfileData from '../../lib/data/Profile';
import ProfileCard from '../../components/landing/ProfileCard';

import { ImageObserver } from '../../lib/Observer';

const Profile = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!!sectionRef) {
      const sectionElement: HTMLElement = sectionRef.current as HTMLElement;

      ImageObserver({ sectionElement: sectionElement });
    }
  }, [sectionRef]);

  return (
    <section ref={sectionRef} id="profile-section">
      <StyledContainer>
        <h2>Professional Profile</h2>
        <p>Qualifications & Attributes</p>

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
  padding-top: 8rem;
  
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
