import React, { useState } from "react";

import OptionsModalContext from "./context";
import { IProductInfo } from "./dto";

interface IOptionsModalProps {
  children: React.ReactNode;
}

const OptionsModal = ({ children }: IOptionsModalProps) => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [productInfo, setProductInfo] = useState({} as IProductInfo);

  function openOptionsModal() {
    setShowOptionsModal(true);
  }

  function closeOptionsModal() {
    setShowOptionsModal(false);
  }

  return (
    <OptionsModalContext.Provider
      value={{
        closeOptionsModal,
        openOptionsModal,
        showOptionsModal,
        setProductInfo,
        productInfo,
      }}
    >
      {children}
    </OptionsModalContext.Provider>
  );
};

export default OptionsModal;
