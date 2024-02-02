import styled from 'styled-components';
import logo from '../../img/ReynelAxel.svg';
import pdfIcon from '../../img/pdf.svg';
import Container from '../Container';

const Header = () => {
  return (
    <StyledHeader className="App-header">
      <StyledContainer>
        <div className="logo">
          <img src={logo} height={75} width={130} alt='Reynel Axel Name' />
        </div>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: 100px;
  background-color: #181a1c;

  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;
