import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from './Signup';

describe('Signup', () => {
  test('renders Signup component and submits form', () => {
    render(<Signup />);
    expect(screen.getByText('Create your account')).toBeInTheDocument();
    expect(screen.getByText('Star Wars is part of The Walt Disney Family of Companies. You\'ll be able to log into services and experiences using the same email and password.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Submit')).toBeInTheDocument();
});
});