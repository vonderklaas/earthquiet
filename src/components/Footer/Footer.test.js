import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// Component
import Footer from './Footer';

describe('Footer', () => {
  it('renders banner', () => {
    render(<Footer />);
    // const banner = screen.getByText('supportukrainenow.org');
    // expect(banner).toBeInTheDocument();
  });
});
