import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Tags from '.';

describe('Button component test', () => {
  it('should return title in capital letters', () => {
    render(<Tags titleTag={'test'} linkTag={'/test.com'} />);
    expect(screen.queryByText('test')).toBeInTheDocument();
    const href = document.querySelector(`a[href='/test.com']`);  
    expect(href).toBeInTheDocument();  
  });
});
