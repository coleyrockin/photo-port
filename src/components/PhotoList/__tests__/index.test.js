import React from 'react';
import { render } from '@testing-library/react';
import PhotoList from '..';

it('renders commercial photos', () => {
  const { getAllByRole } = render(<PhotoList category="commercial" />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(5);
});

it('renders portrait photos', () => {
  const { getAllByRole } = render(<PhotoList category="portraits" />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(4);
});
