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
  background-color: var(--bg-main);
  color: var(--color-black);
  display: flex;
  border-radius: 14px;
  gap: 1rem;
  padding: 1rem 0;
  border: 1px solid var(--bg-secondary);
  justify-content: center;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.225);
  text-decoration: none;
  
  &:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.125);
    color: var(--color-black);
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