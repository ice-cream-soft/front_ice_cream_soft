import React from "react";
import useOptionsModal from "shared/hooks/useOptionsModal";

import ModalContent from "./ModalContent";

const OptionsModal = () => {
  const { showOptionsModal } = useOptionsModal();

  return <>{showOptionsModal && <ModalContent />}</>;
};

export default OptionsModal;
