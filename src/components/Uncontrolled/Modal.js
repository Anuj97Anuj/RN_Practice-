import React, { useState, useRef } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      {isOpen && (
        <div ref={modalRef}>
          <button type="button" onClick={handleCloseModal}>
            Close Modal
          </button>
          <p>Modal Content</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
