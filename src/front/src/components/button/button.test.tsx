import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from ".";

describe('Button component test', () => {
  it('should return title in capital letters', () => {
    render(<Button title='testing button' />);
    expect(screen.queryByText('TESTING BUTTON')).toBeInTheDocument();
    expect(screen.queryByText('testing button')).toBeNull();
  });
});
