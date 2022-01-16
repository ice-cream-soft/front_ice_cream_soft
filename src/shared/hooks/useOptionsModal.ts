import React, { useContext } from "react";
import OptionsModalContext from "shared/providers/context/OptionsModal/context";

const useOptionsModal = () => {
  const context = useContext(OptionsModalContext);

  if (!context)
    throw new Error(
      "useOptionsModal should be use within an OptionsModalContext"
    );

  return context;
};

export default useOptionsModal;
