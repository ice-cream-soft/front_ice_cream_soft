import React, { useState } from "react";

import CartContext from "./context";

interface ICartProvider {
  children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProvider) => {
  const [cartItems, setCartItems] = useState({});

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
