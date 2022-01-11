import React from "react";

import Content from "./components/Content";
import Thumbnail from "./components/Thumbnail";

import { Container } from "./styles";

const SignUp = () => {
  return (
    <Container>
      <Thumbnail />
      <Content />
    </Container>
  );
};

export default SignUp;
