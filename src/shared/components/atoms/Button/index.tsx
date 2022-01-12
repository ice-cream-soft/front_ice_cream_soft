import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  primary?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, primary, ...rest }) => {
  return (
    <Container primary={primary} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
