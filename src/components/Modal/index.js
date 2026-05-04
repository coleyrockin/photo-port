import React, { useEffect, useRef } from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const closeButtonRef = useRef(null);
  const { name, description, category, index } = currentPhoto;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modalBackdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt={name}
        />
        <p>{description}</p>
        <button ref={closeButtonRef} type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
