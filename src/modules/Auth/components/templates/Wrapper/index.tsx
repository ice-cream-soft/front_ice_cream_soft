import React from "react";

import Content from "./components/Content";
import Thumbnail from "./components/Thumbnail";

import { Container } from "./styles";

interface IWrapper {
  children: React.ReactNode;
  reverse?: boolean;
}

const Wrapper: React.FC<IWrapper> = ({ children, reverse }: IWrapper) => {
  return (
    <Container reverse={reverse}>
      <Content>{children}</Content>
      <Thumbnail />
    </Container>
  );
};

export default Wrapper;
