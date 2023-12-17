import { NextPage } from "next";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("body");

const ModalPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      color: "orange",
    },
  };

  return (
    <div>
      <h1>Modal Page</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={modalStyle}
      >
        {/* onRequestClose enable to close modal by clicking outside of modal and press ESC */}
        {/* shouldCloseOnOverlayClick={false} disable to close modal by clicking outside of modal */}
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default ModalPage;
