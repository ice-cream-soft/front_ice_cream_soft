import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  primary?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, primary }) => {
  return <Container primary={primary}>{children}</Container>;
};

export default Button;
