import React, { useState } from "react";

import { IoCartOutline } from "react-icons/io5";
import useCart from "shared/hooks/useCart";

import { CartContent, Container } from "./styles";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCart();

  return (
    <Container>
      <button onClick={() => setShowCart(!showCart)}>
        <IoCartOutline />
        Carrinho
      </button>

      {showCart && (
        <CartContent>
          <h3>Seu pedido</h3>
          <div className="item">
            <h5>{`${cartItems.quantity}x ${cartItems.name}`}</h5>
          </div>

          <span>{`Total: R$ ${cartItems.price}`}</span>
        </CartContent>
      )}
    </Container>
  );
};

export default Cart;
