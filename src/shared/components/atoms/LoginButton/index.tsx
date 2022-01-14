import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Container, Link } from "./styles";

const LoginButton = () => {
  return (
    <Container>
      <IoPersonOutline />
      <span>
        <Link href="/login">
          Faça <b>login</b>
        </Link>
        <Link href="/register">
          ou
          <b>cadastre-se</b>
        </Link>
      </span>
    </Container>
  );
};

export default LoginButton;
