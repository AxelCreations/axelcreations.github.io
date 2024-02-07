import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import SkillCard from '../../components/landing/SkillCard';
import SkillsData from '../../lib/data/Skills';

import { ImageObserver } from '../../lib/Observer';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!!sectionRef) {
      const sectionElement: HTMLElement = sectionRef.current as HTMLElement;

      ImageObserver({ sectionElement: sectionElement });
    }
  }, [sectionRef]);

  return (
    <section className='bg-secondary' ref={sectionRef}>
      <StyledContainer>
        <h2>Development Arsenal</h2>
        <p>Technical Skills Overview</p>

        <Wrapper>
          {
            SkillsData.map((skillData, idx) => (
              <div className="skills" key={idx}>
                <div className="skills-title">
                  <h3>{skillData.category}</h3>
                </div>
                <div className="skills-content">
                  {skillData.skills.map((skill, idx) => <SkillCard skill={skill} key={idx} />)}
                </div>
              </div>
            ))
          }
        </Wrapper>
      </StyledContainer>
    </section>
  )
}

export default Skills;

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

const Wrapper = styled.div`
  display: flex;
  gap: 5rem;
  padding: 5rem 0;
  flex-direction: column;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (max-width: 578px) {
    padding: 3rem 0;
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    &-title {
      h3 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
  
        @media screen and (max-width: 578px) {
          font-size: 1.5rem;
        }
      }
    }

    &-content {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;

      @media screen and (max-width: 992px) {
        gap: 1rem 0;
        align-items: center;

        .skill {
          margin: 0 auto;
        }
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (max-width: 578px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
