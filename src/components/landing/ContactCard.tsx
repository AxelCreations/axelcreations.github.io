import ContactModel from "../../lib/models/ContactModel";
import styled from 'styled-components';
import Img from '../global/Img';

type ContactProps = {
  contact: ContactModel;
}

const ContactCard = ({ contact }: ContactProps) => {
  return (
    <StyledDiv className="contact" href={contact.link} target="_blank" title={contact.text}>
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
  transform: translateY(0);
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 350ms ease, border-color 350ms ease;

  &::before {
    content: '';
    background: linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.16) 45%, transparent 70%);
    position: absolute;
    display: block;
    height: 100%;
    left: -120%;
    top: 0;
    transform: skewX(-18deg);
    transition: left 600ms cubic-bezier(0.22, 1, 0.36, 1);
    width: 80%;
    z-index: -1;
  }
  
  &:hover {
    border-color: var(--color-white-smoke);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22);
    transform: translateY(-6px);

    &::before {
      left: 130%;
    }

    .icon img {
      transform: translateY(-3px) rotate(-6deg) scale(1.08);
    }

    .text span::after {
      transform: scaleX(1);
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.99);
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
      transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
    
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
      position: relative;

      &::after {
        background: var(--color-white);
        bottom: -0.2rem;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 300ms ease;
        width: 100%;
      }
    
      @media screen and (max-width: 1200px) {
        font-size: 1.8rem;
      }
    }
  }
`;