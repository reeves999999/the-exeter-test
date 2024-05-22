import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header';

describe('Search', () => {
  const renderComponent = () => {
    render(<Header />);
  };

  it('should render header with image', () => {
    renderComponent();

    expect(screen.getByAltText(/the exeter/i)).toBeInTheDocument();
  });
});
