import SkillModel, { SkillLevel } from '../../lib/models/SkillModel';
import styled from 'styled-components';

type SkillCardProps = {
  skill: SkillModel;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <StyledSkill className="skill">
      <div className="skill-icon">
        <img src={skill.icon} title={skill.title} alt={skill.title} height={50} />
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


const StyledSkill = styled.div`
  background-color: var(--bg-main);
  height: 70px;
  position: relative;
  width: 100px;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.125);
    .skill-info {
      width: 100%;
    }
  }
  
  .skill {
    &-icon {
      text-align: center;
      height: 50px;
    }

    &-info {
      overflow: hidden;
      background-color: var(--bg-secondary);
      position: absolute;
      bottom: 0;
      min-height: 20px;
      left: 0;
      width: 0;
      transition: width 0.12s ease-out;
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