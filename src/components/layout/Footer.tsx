import styled from 'styled-components';
import logo from '../../img/reynelaxel-logo.webp';
import Container from '../Container';

const Footer = () => {
  return (
    <StyledFooter className="App-header bg-secondary">
      <StyledContainer>
        <div className="logo">
          <img src={logo} height={110} width={110} alt='Reynel Axel Logo' />
        </div>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  height: 150px;

  @media screen and (max-width: 768px) {
    height: 120px;
  }
`
