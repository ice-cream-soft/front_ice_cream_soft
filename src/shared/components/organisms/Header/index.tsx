import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdPin } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";

import LoginButton from "shared/components/atoms/LoginButton";
import useIsMobile from "shared/hooks/useIsMobile";

import logo from "../../../assets/icons/ice_cream_soft_logo.png";

import Cart from "../Cart";
import { Container, Content, HeaderOptions, Button } from "./styles";

const HeaderTopbar = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  function handleNavigate(page: string) {
    router.push(`/${page}`);
  }

  return (
    <Container>
      <Content>
        <figure>
          <Image src={logo} alt="logo" />
        </figure>

        {!isMobile ? (
          <HeaderOptions>
            <Button>
              <IoMdPin />
              Endereço
            </Button>

            <Button onClick={() => handleNavigate("orders")}>
              <IoBagHandleOutline />
              Pedidos
            </Button>

            <Cart />
            <LoginButton />
          </HeaderOptions>
        ) : (
          <FiMenu />
        )}
      </Content>
    </Container>
  );
};

export default HeaderTopbar;
