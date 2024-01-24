import ExperienceModel from '../../lib/models/ExperienceModel';
import styled from 'styled-components';
import Button from '../global/Button';
import { Dispatch, SetStateAction } from 'react';

type JobCardProps = {
  experience: ExperienceModel;
  changeSelectedExperience: Dispatch<SetStateAction<ExperienceModel | null>>;
}

const JobCard = ({ experience, changeSelectedExperience }: JobCardProps): JSX.Element => {

  return (
    <StyledJob className="job">
      <div className="job-content">
        <h3 className="job-content-title">{experience.title}</h3>
        <h4 className="job-content-company">{experience.company}</h4>
        <p className="job-content-details">{experience.excerpt}</p>
        <StyledButton onClick={() => {changeSelectedExperience(experience)}}>
          <span>More...</span>
        </StyledButton>
      </div>
      <div className="job-details">
        <div className="job-details-icon">
          <img src={experience.icon} title={experience.company} alt={experience.company} />
        </div>
        <div className="job-details-time">{experience.initialDate} - {experience.endDate}</div>
      </div>
    </StyledJob>
  )
}

export default JobCard;

const StyledJob = styled.div`
  display: flex;
  flex-direction: column;
  height: 265px;
  min-width: 432px;
  scroll-snap-align: start;
  width: 432px;

  @media screen and (max-width: 578px) {
    min-width: 100%;
    width: 100%;
  }

  @media screen and (min-width: 578px) {
    &:nth-child(even) {
      align-self: flex-end;
      flex-direction: column-reverse;

      .job-details {
        align-items: flex-start;
      }
    }
  }

  &:last-of-type {
    .job-details {
      &::before {
        display: none;
      }
    }
  }

  .job {
    &-content {
      border: 5px solid var(--bg-main);
      height: 184px;
      margin-left: 26px;
      position: relative;
      padding: 1rem;
      z-index: 0;

      @media screen and (max-width: 578px) {
        margin-left: 0;
      }

      &-title {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 100%;
      }

      &-company {
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-white-smoke);
      }

      &-details {
        font-weight: 400;
        letter-spacing: 0.05rem;
        line-height: 115%;
        text-align: justify;

        @media screen and (max-width: 578px) {
          font-size: 0.95rem;
        }
      }
    }

    &-details {
      flex-grow: 1;
      display: flex;
      position: relative;
      align-items: flex-end;
      z-index: 0;

      @media screen and (max-width: 578px) {
        align-items: center;
        gap: 16px;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        background-color: var(--color-white);
        top: 50%;
        transform: translateY(-50%);
        width: 100%;

        @media screen and (max-width: 578px) {
          display: none;
        }
      }

      &-icon {
        border-radius: 50%;
        border: 1px solid var(--color-white);
        background-color: var(--bg-secondary);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        overflow: hidden;
        position: relative;
        width: 80px;

        @media screen and (max-width: 578px) {
          height: 60px;
          width: 60px;
        }

        img {
          object-position: center center;
          object-fit: contain;
          max-height: 60px;
          max-width: 60px;
          height: 100%;
          width: 100%;
        }
      }

      &-time {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: none;
  color: white;
  font-size: 1rem;
  padding: 0;
  font-weight: 700;
  text-align: right;
  float: right;
`;

