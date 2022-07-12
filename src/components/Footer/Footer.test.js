import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Footer from './Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders banner', () => {
    const banner = screen.getByText('supportukrainenow.org');
    expect(banner).toBeInTheDocument();
  });
});
