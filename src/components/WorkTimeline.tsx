import { useState } from 'react';
import styled from 'styled-components';
import JobCard from './landing/JobCard';
import ExperienceData from '../lib/data/Experience';

import ArrowLeftIcon from '../img/arrow-left.svg';
import Button from './global/Button';
import { HorizontalScroll } from '../lib/HorizontalScroll';
import ExperienceModal from './ExperienceModal';
import ExperienceModel from '../lib/models/ExperienceModel';
import Img from './global/Img';

const WorkTimeline = (): React.ReactElement => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceModel|null>(null);

  return (
    <Wrapper>
      <StyledTimeline id="timeline-container">
        {
          ExperienceData.map((experience) =>
            <JobCard experience={experience} key={`${experience.company}-${experience.initialDate}`} onSelectExperience={(selected) => setSelectedExperience(selected)} />
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

      <ExperienceModal selectedExperience={selectedExperience} onClose={() => setSelectedExperience(null)} />
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
