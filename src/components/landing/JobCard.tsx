import ExperienceModel from '../../lib/models/ExperienceModel';
import styled from 'styled-components';
import Button from '../global/Button';
import { Dispatch, SetStateAction } from 'react';
import Img from '../global/Img';

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
          <Img src={experience.icon} text={`${experience.company}`} height={60} />
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
    min-height: 265px;
    height: auto;
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

      .job-content {
        &::after {
          top: -45px;
          left: -5px;
          transform: rotate(180deg);
          bottom: unset;
        }
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
      padding: 1rem;
      position: relative;
      z-index: 1;

      &::after {
        content: '';
        border-bottom: 20px solid transparent;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-top: 20px solid var(--bg-main);
        bottom: -45px;
        display: block;
        left: -6px;
        position: absolute;

        @media screen and (max-width: 578px) {
          left: 8px;
        }
      }

      @media screen and (max-width: 578px) {
        height: auto;
        margin-left: 0;
        min-height: 184px;
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
        text-align: left;
        margin: 1rem 0;

        @media screen and (max-width: 578px) {
          font-size: 0.95rem;
        }
      }
    }

    &-details {
      align-items: flex-end;
      display: flex;
      flex-grow: 1;
      position: relative;
      z-index: 0;

      @media screen and (max-width: 578px) {
        align-items: center;
        gap: 16px;
        flex-grow: 0;
      }

      &::before {
        content: '';
        background-color: var(--color-white);
        display: block;
        height: 1px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;

        @media screen and (max-width: 578px) {
          display: none;
        }
      }

      &-icon {
        align-items: center;
        background-color: var(--bg-secondary);
        border-radius: 50%;
        border: 1px solid var(--color-white);
        display: flex;
        height: 80px;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: 80px;

        @media screen and (max-width: 578px) {
          height: 60px;
          width: 60px;
        }

        img {
          height: 100%;
          max-height: 60px;
          max-width: 60px;
          object-fit: contain;
          object-position: center center;
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
  color: white;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 0;
  padding: 0;
  text-align: right;
  width: 100%;
`;
