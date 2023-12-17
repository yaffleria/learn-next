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

  return (
    <div>
      <h1>Modal Page</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen}>
        <h2 style={{ color: "black" }}>Modal Title</h2>
        <p style={{ color: "green" }}>Modal Body</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default ModalPage;
