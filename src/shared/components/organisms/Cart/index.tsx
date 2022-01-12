import React, { useState } from "react";

import { CartContent, Container } from "./styles";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Container>
      <button onClick={() => setShowCart(!showCart)}>Carrinho</button>

      {showCart && (
        <CartContent>
          <h3>Seu pedido</h3>

          <h5>1x Sorvete</h5>

          <span>Total: R$ 24,50</span>
        </CartContent>
      )}
    </Container>
  );
};

export default Cart;
