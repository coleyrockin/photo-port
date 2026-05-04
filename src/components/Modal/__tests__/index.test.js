import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '..';

const photo = {
  name: 'Test photo',
  description: 'A test description.',
  category: 'commercial',
  index: 0,
};

it('renders the photo name', () => {
  const { getByText } = render(
    <Modal photo={photo} onClose={vi.fn()} onNext={vi.fn()} onPrev={vi.fn()} hasMultiple />,
  );
  expect(getByText('Test photo')).toBeTruthy();
});

it('calls onClose when close button is clicked', () => {
  const onClose = vi.fn();
  const { getByLabelText } = render(
    <Modal photo={photo} onClose={onClose} onNext={vi.fn()} onPrev={vi.fn()} hasMultiple />,
  );
  fireEvent.click(getByLabelText('Close'));
  expect(onClose).toHaveBeenCalledTimes(1);
});

it('calls onClose on Escape key', () => {
  const onClose = vi.fn();
  render(
    <Modal photo={photo} onClose={onClose} onNext={vi.fn()} onPrev={vi.fn()} hasMultiple />,
  );
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(onClose).toHaveBeenCalledTimes(1);
});
