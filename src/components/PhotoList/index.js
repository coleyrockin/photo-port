import React, { useState } from 'react';
import { PHOTOS } from '../../data/photos';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [modalIndex, setModalIndex] = useState(null);

  const categoryPhotos = PHOTOS.filter((p) => p.category === category);

  const openModal = (i) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  const goNext = () => setModalIndex((i) => (i + 1) % categoryPhotos.length);
  const goPrev = () => setModalIndex((i) => (i - 1 + categoryPhotos.length) % categoryPhotos.length);

  return (
    <div>
      {modalIndex !== null && (
        <Modal
          photo={categoryPhotos[modalIndex]}
          onClose={closeModal}
          onNext={goNext}
          onPrev={goPrev}
          hasMultiple={categoryPhotos.length > 1}
        />
      )}
      <div className="photo-grid">
        {categoryPhotos.map((photo, i) => (
          <button
            key={photo.name}
            type="button"
            className="photo-card"
            onClick={() => openModal(i)}
            aria-label={`Open ${photo.name}`}
          >
            <img
              src={`/photo-port/assets/small/${photo.category}/${photo.index}.jpg`}
              alt={photo.name}
              loading="lazy"
              className="photo-thumb"
            />
            <div className="photo-overlay">
              <span className="photo-overlay-name">{photo.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
