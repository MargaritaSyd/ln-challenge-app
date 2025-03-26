import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import GroupTags from '.';
import { tagsMock } from '../../services/mocks';

describe('GroupTags component test', () => {
  it('should return a tags with correct href', () => {
    render(
    <GroupTags
      tags={tagsMock}
     />
  );
  const tags = screen.getAllByTestId('tag');  
  expect(tags).toHaveLength(4);  
  tagsMock.forEach((tag) => {  
        const href = document.querySelector(`a[href='/tema/${tag.slug}']`);  
        expect(href).toBeInTheDocument();  
      });  
  });
});
