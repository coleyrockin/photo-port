// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

it('renders', () => {
  render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}
    contactSelected={mockContactSelected}
    setContactSelected={mockSetContactSelected}
  />);
})