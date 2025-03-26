import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from ".";

describe('Card component test', () => {
  it('should return card with first word wrapped in b tag', () => {
    render(
    <Card
        title='testing card' imageSrc={'/url'} date={"2019-10-10T12:55:00Z"}    />
  );
    const bTag = screen.getByText((content, element) => element?.tagName.toLowerCase() === 'b');
    expect(bTag).toHaveTextContent('testing');
    expect(bTag).not.toHaveTextContent('card');
  });
  it('should return card with formatted date', () => {
    render(
    <Card
        title='testing card' imageSrc={'/url'} date={"2019-10-10T12:55:00Z"}    />
  );
    expect(screen.queryByText('10 de Octubre de 2019')).toBeInTheDocument();
  });
});
