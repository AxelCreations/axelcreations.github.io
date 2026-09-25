import SkillModel, { SkillLevel } from '../../lib/models/SkillModel';
import styled, { keyframes } from 'styled-components';
import Img from '../global/Img';

type SkillCardProps = {
  skill: SkillModel;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <StyledSkill className="skill">
      <div className="skill-icon">
        <Img src={skill.icon} text={skill.title} height={50} />
      </div>
      <div className="skill-level">
        <span className={`skill-level-bar level-${skill.level}`}></span>
        <span className='skill-level-description'>{SkillLevel[skill.level]}</span>
      </div>
      <div className="skill-info">
        <span>{skill.title}</span>
      </div>
    </StyledSkill>
  )
}

export default SkillCard;

const skillBarIn = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const StyledSkill = styled.div`
  background-color: var(--bg-main);
  height: 70px;
  position: relative;
  width: 100px;
  border: 1px solid transparent;
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.12);
  transform: translateY(0);
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease, border-color 300ms ease;

  &:hover {
    border-color: var(--color-white-smoke);
    box-shadow: 0 14px 20px rgba(0,0,0,0.22);
    transform: translateY(-8px);

    .skill-icon img {
      transform: translateY(-4px) scale(1.12) rotate(4deg);
    }

    .skill-info {
      width: 100%;
    }
  }
  
  .skill {
    &-icon {
      text-align: center;
      height: 50px;

      img {
        transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
      }
    }

    &-info {
      overflow: hidden;
      background-color: var(--bg-secondary);
      position: absolute;
      bottom: 0;
      min-height: 20px;
      left: 0;
      width: 0;
      transition: width 250ms cubic-bezier(0.22, 1, 0.36, 1);
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }

    &-level {
      text-align: center;
      position: relative;
      height: 20px;

      &-description {
        position: relative;
        font-size: 14px;
      }

      &-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transform-origin: left center;

        section.reveal-on-scroll.is-visible & {
          animation: ${skillBarIn} 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        &.level {
          &-1 {
            background-color: #4C87CD;
            width: 25%;
          }
          &-2 {
            background-color: #00407B;
            width: 50%;
          }
          &-3 {
            background-color: #007B7B;
            width: 70%;
          }
          &-4 {
            background-color: #367B00;
            width: 100%;
          }
        }
      }
    }
  }
`;