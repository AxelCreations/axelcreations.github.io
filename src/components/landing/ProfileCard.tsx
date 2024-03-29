import styled from "styled-components";
import ProfileModel from "../../lib/models/ProfileModel";
import Img from "../global/Img";

type ProfileCardProps = {
  profile: ProfileModel;
}

const ProfileCard = ({ profile }: ProfileCardProps): JSX.Element => {
  
  return (
    <StyledProfile className='profile'>
      <h3 className="profile-title">{profile.title}</h3>
      <div className="profile-content">
        {
          profile.goals.map((goal, idx) => (
            <div className="goal" key={idx}>
              {goal.title?.length && <h4 className="goal-title">{goal.title}</h4>}
              
                {goal.title?.length ?
                  (<div className="goal-descriptions">
                    {goal.descriptions.map((description, idx) => <p dangerouslySetInnerHTML={{ __html: description }} key={idx}></p>)}
                  </div>) 
                  :
                  (<ul className="goal-descriptions">
                      {goal.descriptions.map((description, idx) => <li key={idx}>{description}</li>)}
                  </ul>)
                }
            </div>
          ))
        }
      </div>
      <div className="profile-icon">
        <Img src={profile.icon} text={`Profile ${profile.title}`} height={42} />
      </div>
    </StyledProfile>
  )
}

export default ProfileCard;

const StyledProfile = styled.div`
  background-color: var(--bg-secondary-40);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 320px;
  
  &:hover {
    background-color: var(--bg-secondary);
  }
  
  @media screen and (max-width: 992px) {
    background-color: var(--bg-secondary);
    max-width: 400px;
    width: 100%;
  }

  .profile {
    &-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      text-align: center;
      text-transform: uppercase;

      @media screen and (max-width: 578px) {
        font-size: 1.5rem;
      }
    }

    &-content {
      flex-grow: 1;

      .goal {
        margin-bottom: 1rem;

        &-title {
          font-size: 18px;
          margin-bottom: 0.125rem;
        }

        p {
          margin: 0;
        }

        ul {
          padding-left: 1rem;
          margin: 0;
        }

        li {
          list-style: square;
        }
      }
    }

    &-icon {
      align-self: center;
    }
  }
`;
