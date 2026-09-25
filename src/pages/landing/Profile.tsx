import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import ProfileData from '../../lib/data/Profile';
import ProfileCard from '../../components/landing/ProfileCard';

import { ImageObserver } from '../../lib/Observer';

const Profile = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProfile, setActiveProfile] = useState(ProfileData[0]);

  useEffect(() => {
    if (!sectionRef.current) return;

    return ImageObserver({ sectionElement: sectionRef.current });
  }, []);

  return (
    <section ref={sectionRef} id="profile-section">
      <StyledContainer>
        <h2>Professional Profile</h2>
        <p>Qualifications & Attributes</p>

        <Wrapper>
          <ProfileTabs role="tablist" aria-label="Professional profile categories">
            {ProfileData.map((profile) => {
              const isActive = activeProfile.title === profile.title;

              return (
                <ProfileTab
                  key={profile.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="profile-panel"
                  className={isActive ? 'active' : ''}
                  onClick={() => setActiveProfile(profile)}
                >
                  <span>{profile.title}</span>
                  <small>0{ProfileData.indexOf(profile) + 1}</small>
                </ProfileTab>
              );
            })}
          </ProfileTabs>
          <ProfilePanel id="profile-panel" role="tabpanel" aria-label={activeProfile.title}>
            <ProfileCard profile={activeProfile} />
          </ProfilePanel>
        </Wrapper>
      </StyledContainer>
    </section>
  )
}

export default Profile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  max-width: 1080px;
  padding: 5rem 0;

  @media screen and (max-width: 578px) {
    padding: 3rem 0;
  }
`;

const ProfileTabs = styled.div`
  background: var(--bg-secondary);
  border: 1px solid rgba(178, 178, 178, 0.16);
  border-radius: 14px;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5rem;

  @media screen and (max-width: 578px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileTab = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--color-white-smoke);
  cursor: pointer;
  display: flex;
  font: inherit;
  justify-content: space-between;
  min-height: 58px;
  padding: 0.75rem 1rem;
  text-align: left;
  transition: background-color 250ms ease, border-color 250ms ease, color 250ms ease, transform 250ms ease;

  span {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  small {
    font-size: 0.7rem;
    letter-spacing: 0.12rem;
  }

  &:hover {
    border-color: rgba(178, 178, 178, 0.3);
    color: var(--color-white);
    transform: translateY(-2px);
  }

  &.active {
    background: var(--bg-main);
    border-color: rgba(178, 178, 178, 0.3);
    color: var(--color-white);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.16);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const ProfilePanel = styled.div`
  background: linear-gradient(145deg, rgba(49, 54, 64, 0.88), rgba(32, 36, 44, 0.96));
  border: 1px solid rgba(178, 178, 178, 0.18);
  border-radius: 18px;
  min-height: 0;
  padding: 1rem;
  
  @media screen and (max-width: 992px) {
    max-width: 400px;
    width: 100%;
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
