import React from "react";
import Button from "shared/components/atoms/Button";
import Cart from "../Cart";

import { Container, Content, HeaderOptions, Link } from "./styles";

const HeaderTopbar = () => {
  return (
    <Container>
      <Content>
        <img
          src="https://icecreamsoft.online/tim.php?src=https://icecreamsoft.online/uploads/images/2021/11/whatsapp-image-2021-11-05-at-10-58-43.jpeg&w=240&h=240"
          alt=""
        />

        <HeaderOptions>
          <Button>Endereço: Rua dos bodes, Nº 23</Button>
          <Link href="/orders">Pedidos</Link>
          <Cart />
          <Link href="/login">Entrar</Link>
        </HeaderOptions>
      </Content>
    </Container>
  );
};

export default HeaderTopbar;
