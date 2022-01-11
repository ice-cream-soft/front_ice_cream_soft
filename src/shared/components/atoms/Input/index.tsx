import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLElement> {}

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input type="text" {...rest} />
    </Container>
  );
};

export default Input;
