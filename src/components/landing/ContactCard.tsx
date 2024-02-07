import ContactModel from "../../lib/models/ContactModel";
import styled from 'styled-components';
import Img from '../global/Img';

type ContactProps = {
  contact: ContactModel;
}

const ContactCard = ({ contact }: ContactProps) => {
  return (
    <StyledDiv href={contact.link} target="_blank">
      <div className="icon">
        <Img src={contact.icon} text={`Contact ${contact.text}`} height={85} showPlaceholder={false} />
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
  background-color: var(--bg-secondary);
  color: var(--color-white-smoke);
  display: flex;
  gap: 1rem;
  text-decoration: none;
  
  &:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.125);
    color: var(--color-white);
  }
  
  .icon {
    display: flex;
    height: 85px;
    width: 85px;
    
    @media screen and (max-width: 1200px) {
      height: 70px;
      width: 70px;
    }

    img {
      max-height: 85px;
      max-width: 85px;
    
      @media screen and (max-width: 1200px) {
        height: 70px;
        width: 70px;
      }
    }
  }

  .text {
    span {
      font-size: 2.125rem;
      font-weight: 700;
    
      @media screen and (max-width: 1200px) {
        font-size: 1.8rem;
      }
    }
  }
`;