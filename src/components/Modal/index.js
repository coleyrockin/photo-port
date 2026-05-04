import React, { useEffect, useRef } from 'react';

const Modal = ({ photo, onClose, onNext, onPrev, hasMultiple }) => {
  const closeButtonRef = useRef(null);
  const { name, description, category, index } = photo;

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasMultiple) onNext();
      if (e.key === 'ArrowLeft' && hasMultiple) onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasMultiple]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <div className="modal-container">
        <button ref={closeButtonRef} type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <img
          src={`/photo-port/assets/large/${category}/${index}.jpg`}
          alt={name}
          className="modal-image"
        />
        <div className="modal-info">
          <h3 className="modal-title">{name}</h3>
          <p className="modal-desc">{description}</p>
        </div>
        {hasMultiple && (
          <div className="modal-nav">
            <button type="button" className="modal-nav-btn" onClick={onPrev} aria-label="Previous photo">
              ‹
            </button>
            <button type="button" className="modal-nav-btn" onClick={onNext} aria-label="Next photo">
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
