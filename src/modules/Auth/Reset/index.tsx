import React from "react";
import { useRouter } from "next/router";

import Button from "shared/components/atoms/Button";
import Input from "shared/components/atoms/Input";

import Wrapper from "../components/templates/Wrapper";
import { InputContainer } from "./styles";

const Reset = () => {
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

      <h1>Resetar senha</h1>

      <InputContainer>
        <Input placeholder="Senha" />
        <Input placeholder="Confirmar senha" />
        <Button primary>Resetar</Button>
      </InputContainer>
    </Wrapper>
  );
};

export default Reset;
