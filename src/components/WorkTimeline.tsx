import { useEffect, useState } from 'react';
import styled from 'styled-components';
import JobCard from './landing/JobCard';
import ExperienceData from '../lib/data/Experience';

import ArrowLeftIcon from '../img/arrow-left.svg';
import Button from './global/Button';
import { HorizontalScroll } from '../lib/HorizontalScroll';
import ExperienceModal from './ExperienceModal';
import ExperienceModel from '../lib/models/ExperienceModel';
import Img from './global/Img';

const WorkTimeline = (): JSX.Element => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceModel|null>(null);

  useEffect(() => {
    if ( !!selectedExperience ) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedExperience]);

  return (
    <Wrapper>
      <StyledTimeline id="timeline-container">
        {
          ExperienceData.map((experience, index) =>
            <JobCard experience={experience} key={index} changeSelectedExperience={setSelectedExperience} />
          )
        }
      </StyledTimeline>
      <StyledControlsContainer>
        <StyledButton className='control control-left'
          onClick={() => { HorizontalScroll({ target: '#timeline-container', speed: -900 }) }}>
          <Img src={ArrowLeftIcon} text={`control arrow left`} height={32} showPlaceholder={false} />
        </StyledButton>
        <StyledButton className='control control-right'
          onClick={() => { HorizontalScroll({ target: '#timeline-container', speed: 900 }) }}>
          <Img src={ArrowLeftIcon} text={`control arrow right`} height={32} showPlaceholder={false} />
        </StyledButton>
      </StyledControlsContainer>

      <ExperienceModal selectedExperience={selectedExperience} changeSelectedExperience={setSelectedExperience} />
    </Wrapper>
  )
}

export default WorkTimeline;

const Wrapper = styled.div`
  padding: 2rem 0;
  
  @media screen and (max-width: 578px) {
    padding-bottom: 0;
  }
`;

const StyledTimeline = styled.div`
  display: flex;
  position: relative;
  overflow-x: auto;
  padding-bottom: 2rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
  
  @media screen and (max-width: 578px) {
    gap: 8px;
    padding-bottom: 1rem;
  }
  
  @media screen and (min-width: 578px) {
    height: calc(448px + 2rem);
  }
`;

const StyledControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;
  
  @media screen and (max-width: 578px) {
    padding-bottom: 0;
  }
`;

const StyledButton = styled(Button)``;
