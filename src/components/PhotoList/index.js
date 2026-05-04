import React, { useState } from 'react';
import Modal from '../Modal';

const PHOTOS = [
  {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Wide-angle shot of a freshly stocked grocery aisle, lit with overhead fluorescents.',
  },
  {
    name: 'Grocery booth',
    category: 'commercial',
    description: 'A pop-up sampling booth at the entrance of a downtown market.',
  },
  {
    name: 'Building exterior',
    category: 'commercial',
    description: 'Storefront facade photographed at golden hour for a leasing brochure.',
  },
  {
    name: 'Restaurant table',
    category: 'commercial',
    description: 'A two-top set for service, captured from above with natural side light.',
  },
  {
    name: 'Cafe interior',
    category: 'commercial',
    description: 'Warm afternoon light pouring through a corner cafe with handcrafted wood seating.',
  },
  {
    name: 'Cat green eyes',
    category: 'portraits',
    description: 'A close-up portrait of a tabby with striking green eyes.',
  },
  {
    name: 'Green parrot',
    category: 'portraits',
    description: 'A green parrot caught mid-call against a dark studio backdrop.',
  },
  {
    name: 'Yellow macaw',
    category: 'portraits',
    description: 'A yellow macaw perched on a worn rope, feathers catching the morning sun.',
  },
  {
    name: 'Pug smile',
    category: 'portraits',
    description: 'An elderly pug grinning into the camera at a pet adoption event.',
  },
  {
    name: 'Pancakes',
    category: 'food',
    description: 'A short stack with melted butter and a slow drizzle of maple syrup.',
  },
  {
    name: 'Burrito',
    category: 'food',
    description: 'A heavy breakfast burrito sliced in half to show the layered fillings.',
  },
  {
    name: 'Scallop pasta',
    category: 'food',
    description: 'Hand-cut pasta tossed with seared scallops, lemon zest, and crisp herbs.',
  },
  {
    name: 'Burger',
    category: 'food',
    description: 'A double smash burger on brioche, photographed against a slate background.',
  },
  {
    name: 'Fruit bowl',
    category: 'food',
    description: 'A late-summer fruit bowl with stone fruit, berries, and mint.',
  },
  {
    name: 'Green river',
    category: 'landscape',
    description: 'A slow, glassy river bend cutting through a stand of late-spring oaks.',
  },
  {
    name: 'Docks',
    category: 'landscape',
    description: 'Weathered wooden docks reaching out into a still lake at dawn.',
  },
  {
    name: 'Panoramic village by sea',
    category: 'landscape',
    description: 'A coastal village photographed from a hillside above the harbor.',
  },
  {
    name: 'Domestic landscape',
    category: 'landscape',
    description: 'Rolling pasture land split by an old fence line at the edge of a farm.',
  },
  {
    name: 'Park bench',
    category: 'landscape',
    description: 'An empty bench under bare branches in early winter light.',
  },
];

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const currentPhotos = PHOTOS.filter((photo) => photo.category === category);

  const openModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && currentPhoto && (
        <Modal onClose={closeModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <button
            key={image.name}
            type="button"
            className="img-thumbnail-button mx-1"
            onClick={() => openModal(image, i)}
            aria-label={`Open ${image.name}`}
          >
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              loading="lazy"
              className="img-thumbnail"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
