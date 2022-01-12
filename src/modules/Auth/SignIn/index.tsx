import React from "react";
import { useRouter } from "next/router";

import Button from "shared/components/atoms/Button";
import Input from "shared/components/atoms/Input";
import Wrapper from "modules/Auth/components/templates/Wrapper";

import { Link } from "./styles";

const SignIn = () => {
  const router = useRouter();

  function handleNavigate(page: string) {
    router.push(`/${page}`);
  }

  return (
    <Wrapper>
      <img
        src="https://icecreamsoft.online/tim.php?src=https://icecreamsoft.online/uploads/images/2021/11/whatsapp-image-2021-11-05-at-10-58-43.jpeg&w=240&h=240"
        alt=""
        onClick={() => handleNavigate("")}
      />

      <h1>Faça seu Logon</h1>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Seu Email" />
        <Input type="text" placeholder="Sua senha" />
        <Button primary type="submit">
          Entrar
        </Button>
      </form>

      <Button onClick={() => handleNavigate("forgot")} type="button">
        Esqueci minha senha
      </Button>

      <Link href="/register">Criar conta</Link>
    </Wrapper>
  );
};

export default SignIn;
