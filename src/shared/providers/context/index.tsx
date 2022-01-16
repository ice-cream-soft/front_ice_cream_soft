import React from "react";
import OptionsModal from "./OptionsModal";

interface IContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: IContextProviderProps) => {
  return <OptionsModal>{children}</OptionsModal>;
};

export default ContextProvider;
