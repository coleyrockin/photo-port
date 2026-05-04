import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '..';

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
  );
});
