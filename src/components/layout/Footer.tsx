import styled from 'styled-components';
import logo from '../../ReynelAxel.svg';
import Container from '../Container';

const Footer = () => {
  return (
    <StyledFooter className="App-header bg-secondary">
      <StyledContainer>
        <div className="logo">
          <img src={logo} height={55} width={125} alt='Reynel Axel Name' />
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
  height: 100px;

  @media screen and (max-width: 768px) {
    height: 80px;
  }
`
