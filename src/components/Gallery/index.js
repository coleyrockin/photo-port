import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CATEGORIES } from '../../data/photos';
import PhotoList from '../PhotoList';

const VALID_CATEGORIES = CATEGORIES.map((c) => c.name);

function Gallery() {
  const { category } = useParams();

  if (!VALID_CATEGORIES.includes(category)) {
    return <Navigate to="/commercial" replace />;
  }

  const meta = CATEGORIES.find((c) => c.name === category);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h1 className="gallery-title">{meta.name.charAt(0).toUpperCase() + meta.name.slice(1)}</h1>
        <p className="gallery-description">{meta.description}</p>
      </div>
      <PhotoList category={category} />
    </section>
  );
}

export default Gallery;
