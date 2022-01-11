import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
