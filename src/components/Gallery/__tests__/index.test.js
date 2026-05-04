import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Gallery from '..';

function renderGallery(category = 'commercial') {
  return render(
    <MemoryRouter initialEntries={[`/${category}`]}>
      <Routes>
        <Route path="/:category" element={<Gallery />} />
      </Routes>
    </MemoryRouter>,
  );
}

it('renders the gallery heading', () => {
  const { getByText } = renderGallery('commercial');
  expect(getByText('Commercial')).toBeTruthy();
});

it('redirects unknown category to commercial', () => {
  const { getByText } = renderGallery('unknown');
  expect(getByText('Commercial')).toBeTruthy();
});
