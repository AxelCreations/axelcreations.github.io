import ContactModel from "../../lib/models/ContactModel";
import styled from 'styled-components';
import Img from '../global/Img';

type ContactProps = {
  contact: ContactModel;
}

const ContactCard = ({ contact }: ContactProps) => {
  return (
    <StyledDiv href={contact.link} target="_blank" title={contact.text}>
      <div className="icon">
        <Img src={contact.icon} text={`Contact ${contact.text}`} height={32} showPlaceholder={false} />
      </div>
      <div className="text">
        <span>{contact.text}</span>
      </div>
    </StyledDiv>
  )
}

export default ContactCard;

const StyledDiv = styled.a`
  align-items: center;
  border-radius: 14px;
  border: 2px solid var(--bg-secondary);
  color: var(--bg-white);
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &::after {
    content: '';
    background-color: var(--bg-secondary);
    position: absolute;
    display: block;
    height: 100%;
    transform-origin: left;
    transform: scaleX(0);
    width: 100%;
    transition: transform 0.2s ease-out;
    z-index: -1;
  }
  
  &:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.125);

    &::after {
      transform: scaleX(1);
    }
  }
  
  .icon {
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 50px;
    
    @media screen and (max-width: 1200px) {
      height: 40px;
      width: 40px;
    }

    img {
      height: 50px;
      width: 50px;
      max-height: 50px;
      max-width: 50px;
    
      @media screen and (max-width: 1200px) {
        height: 45px;
        width: 45px;
      }
    }
  }

  .text {
    span {
      font-size: 2rem;
      font-weight: 700;
    
      @media screen and (max-width: 1200px) {
        font-size: 1.8rem;
      }
    }
  }
`;