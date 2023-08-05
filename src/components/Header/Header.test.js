import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  test('renders Header component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Log in')).toBeInTheDocument();

    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });
});