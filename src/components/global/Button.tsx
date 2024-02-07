import { ComponentProps } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: JSX.Element;
  className?: string;
  onClick?: any;
} & ComponentProps<"button">

const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} {...props}>
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