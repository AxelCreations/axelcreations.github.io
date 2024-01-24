import styled from 'styled-components';
import logo from '../../img/reynelaxel-logo.webp';
import Container from '../Container';

const Footer = () => {
  return (
    <StyledFooter className="App-header bg-secondary">
      <StyledContainer>
        <div className="logo">
          <img src={logo} height={150} width={150} alt='Reynel Axel Logo' />
        </div>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  overflow: hidden;
  
  .logo {
    img {
      @media screen and (max-width: 768px) {
        height: 120px;
        width: 120px;
      }
    }
  }
  `;

const StyledFooter = styled.footer`
  overflow: hidden;
  align-items: center;
  display: flex;
`
