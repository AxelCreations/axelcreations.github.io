import styled from "styled-components";
import ProfileModel from "../../lib/models/ProfileModel";
import Img from "../global/Img";

type ProfileCardProps = {
  profile: ProfileModel;
}

const ProfileCard = ({ profile }: ProfileCardProps): React.ReactElement => {
  
  return (
    <StyledProfile className='profile'>
      <div className="profile-heading">
        <div className="profile-icon">
          <Img src={profile.icon} text={`Profile ${profile.title}`} height={42} />
        </div>
        <div>
          <span className="profile-kicker">Profile / 0{profile.title === 'Education' ? 1 : profile.title === 'Languages' ? 2 : 3}</span>
          <h3 className="profile-title">{profile.title}</h3>
        </div>
      </div>
      <div className="profile-content">
        {
          profile.goals.map((goal) => (
            <div className="goal" key={`${profile.title}-${goal.title ?? 'list'}`}>
              {goal.title?.length && <h4 className="goal-title">{goal.title}</h4>}
              
                {goal.title?.length ?
                  (<div className="goal-descriptions">
                    {goal.descriptions.map((description) => <p dangerouslySetInnerHTML={{ __html: description }} key={description}></p>)}
                  </div>) 
                  :
                  (<ul className="goal-descriptions">
                      {goal.descriptions.map((description) => <li key={description}>{description}</li>)}
                  </ul>)
                }
            </div>
          ))
        }
      </div>
    </StyledProfile>
  )
}

export default ProfileCard;

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.15rem 0.5rem 0.5rem;
  position: relative;
  width: 100%;

  &::before {
    background: linear-gradient(90deg, var(--color-white-smoke), rgba(178, 178, 178, 0.24), transparent);
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    top: 0;
    transform: scaleX(0.35);
    transform-origin: left;
    transition: transform 350ms ease;
    width: 100%;
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }

    .profile-icon {
      transform: rotate(-6deg) scale(1.08);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { transition: none; }
  }

  .profile {
    &-heading {
      align-items: center;
      display: flex;
      gap: 1rem;
      margin-bottom: 1.35rem;
      min-height: 64px;
    }

    &-kicker {
      color: var(--color-white-smoke);
      display: block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.16rem;
      margin-bottom: 0.35rem;
      text-transform: uppercase;
    }

    &-title {
      font-size: 1.7rem;
      letter-spacing: 0.01rem;

      @media screen and (max-width: 578px) {
        font-size: 1.35rem;
      }
    }

    &-content {
      display: grid;
      gap: 1.25rem 2.5rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }

      .goal {
        border-left: 2px solid rgba(178, 178, 178, 0.32);
        margin-bottom: 0;
        padding-left: 0.85rem;
        transition: border-color 250ms ease, transform 250ms ease;

        &:hover {
          border-color: var(--color-white-smoke);
          transform: translateX(4px);
        }

        &:last-child {
          margin-bottom: 0;
        }

        &-title {
          color: var(--color-white);
          font-size: 1rem;
          line-height: 1.25;
          margin-bottom: 0.35rem;
        }

        p {
          color: var(--color-white-smoke);
          font-size: 0.92rem;
          line-height: 1.45;
          margin: 0;
        }

        ul {
          margin: 0;
          padding-left: 1rem;
        }

        li {
          color: var(--color-white-smoke);
          font-size: 0.92rem;
          line-height: 1.55;
          list-style: none;

          &::before {
            color: var(--color-white-smoke);
            content: '—';
            margin-right: 0.45rem;
          }
        }

        &:only-child {
          grid-column: 1 / -1;

          ul {
            columns: 2;

            @media screen and (max-width: 700px) {
              columns: 1;
            }
          }
        }
      }
    }

    &-icon {
      align-items: center;
      background: rgba(178, 178, 178, 0.08);
      border: 1px solid rgba(178, 178, 178, 0.26);
      border-radius: 14px;
      display: flex;
      height: 64px;
      justify-content: center;
      transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), background-color 350ms ease;
      width: 64px;

      img {
        height: 42px;
        width: 42px;
      }
    }
  }
`;
