import React from "react";

import Category from "./components/Category";
import { categories } from "./data";
import { Container } from "./styles";

const ItemsContent = () => {
  return (
    <Container>
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </Container>
  );
};

export default ItemsContent;
