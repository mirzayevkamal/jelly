import { useState } from "react";
import { createContainer } from "unstated-next";

function MainProvider() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  return {
    showModal,
    setShowModal,
    modalContent,
    setModalContent,
  };
}

let JellyProvider = createContainer(MainProvider);

export default JellyProvider;
