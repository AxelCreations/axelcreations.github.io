import styled from "styled-components";

interface ButtonProps {
  children: JSX.Element;
  className?: string;
  onClick?: any;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  &.control {

    &-right {
      img {
        transform: rotate(180deg);
      }
    }
  }
`;