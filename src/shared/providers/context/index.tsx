import React from "react";
import OptionsModal from "./OptionsModal";
import CartContext from "./Cart";

interface IContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: IContextProviderProps) => {
  return (
    <OptionsModal>
      <CartContext>{children}</CartContext>;
    </OptionsModal>
  );
};

export default ContextProvider;
