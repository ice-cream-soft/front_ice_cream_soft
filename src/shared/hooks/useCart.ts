import React, { useContext } from "react";
import CartContext from "shared/providers/context/Cart/context";

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("UseCart should be used within CartContext");

  return context;
};

export default useCart;
