import { render, fireEvent } from '@testing-library/react';
import Starships from './Starships';
import '@testing-library/jest-dom';

describe('Starships', () => {
  it('renders the name and model', () => {
    const { getByText } = render(<Starships name="Millennium Falcon" model="YT-1300f light freighter" />);
    expect(getByText('Millennium Falcon')).toBeInTheDocument();
    expect(getByText('YT-1300f light freighter')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Starships name="Millennium Falcon" model="YT-1300f light freighter" onClick={onClick} />);
    fireEvent.click(getByText('Millennium Falcon'));
    expect(onClick).toHaveBeenCalled();
  });
});