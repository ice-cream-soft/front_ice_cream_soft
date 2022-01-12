import React from "react";

import Button from "shared/components/atoms/Button";
import Input from "shared/components/atoms/Input";

import Wrapper from "modules/Auth/components/templates/Wrapper";
import { Link } from "./styles";

const SignUp = () => {
  return (
    <Wrapper reverse>
      <img
        src="https://icecreamsoft.online/tim.php?src=https://icecreamsoft.online/uploads/images/2021/11/whatsapp-image-2021-11-05-at-10-58-43.jpeg&w=240&h=240"
        alt=""
      />

      <h1>Cadastre-se</h1>

      <form action="">
        <Input type="text" placeholder="Seu Nome" />
        <Input type="text" placeholder="Seu Email" />
        <Input type="text" placeholder="Sua senha" />
        <Button primary>Cadastrar</Button>
      </form>

      <Link href={"/login"}>Já possuo uma conta</Link>
    </Wrapper>
  );
};

export default SignUp;
