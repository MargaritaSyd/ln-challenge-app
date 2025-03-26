/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Grid from '.';  
import { Context } from '../../context/context';  
import { ICard } from '../card';
import { mockArticles } from '../../services/mocks';


jest.mock('../card', () => (props: ICard) => (  
  <div data-testid="card">  
    <img src={props.imageSrc} alt="Article" />  
    <h3 data-testid={props.title}>{props.title}</h3>  
    <p>{props.date}</p>  
  </div>  
));  

describe('Grid Component', () => {  
  
  it('renders the correct number of Card components', () => {  
    render(  
      <Context.Provider value={mockArticles}>  
        <Grid />  
      </Context.Provider>  
    );  
    const cards = screen.getAllByTestId('card');  
    expect(cards).toHaveLength(mockArticles.length);  
  });  

  it('renders the correct content in each Card', () => {  
    render(  
      <Context.Provider value={mockArticles}>  
        <Grid />  
      </Context.Provider>  
    );  
    expect(screen.getByTestId('Article 1')).toBeInTheDocument();  
    mockArticles.forEach((article) => {  
      const title = screen.getByTestId(article.headlines.basic);  
      const date = screen.getByText(article.display_date);  
      
      expect(title).toBeInTheDocument();  
      expect(date).toBeInTheDocument();  
    });  
  });  
});  