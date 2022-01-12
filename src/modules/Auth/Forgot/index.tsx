import React from "react";
import { useRouter } from "next/router";

import Button from "shared/components/atoms/Button";
import Input from "shared/components/atoms/Input";
import Wrapper from "../components/templates/Wrapper";

import { Container } from "./styles";

const Forgot = () => {
  const router = useRouter();

  function handleNavigate(page: string) {
    router.push(`/${page}`);
  }

  return (
    <Container>
      <Wrapper>
        <img
          src="https://icecreamsoft.online/tim.php?src=https://icecreamsoft.online/uploads/images/2021/11/whatsapp-image-2021-11-05-at-10-58-43.jpeg&w=240&h=240"
          alt=""
          onClick={() => handleNavigate("")}
        />

        <h1>Recuperar de senha</h1>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <Input type="text" placeholder="Seu Email" />
          <Button primary type="submit">
            Enviar
          </Button>
        </form>
        <Button type="button" onClick={() => handleNavigate("/login")}>
          Voltar para login
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Forgot;
