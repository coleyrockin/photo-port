import React from 'react';
import { render } from '@testing-library/react';
import Contact from '..';

it('renders the heading', () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId('h1tag')).toHaveTextContent('Get in touch');
});

it('renders the submit button', () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId('button')).toHaveTextContent('Send message');
});
