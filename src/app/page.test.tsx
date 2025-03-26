import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Home from './page';
import { Context } from '@/front/src/context/context';  
import { mockArticles } from '@/front/src/services/mocks';
 

describe('Page Component', () => {  
  
  it('renders correctly when context has data', () => {  
    render(  
      <Context.Provider value={mockArticles}>  
        <Home />  
      </Context.Provider>  
    );
    expect(screen.queryByText('Acumulado Grilla')).toBeInTheDocument();
    expect(screen.queryByText('MÁS NOTAS DE ACUMULADO GRILLA')).toBeInTheDocument();
  });
  it('renders loading component when context has no data', () => {  
    render(  
      <Context.Provider value={[]}>  
        <Home />  
      </Context.Provider>  
    );
    expect(screen.queryByText('LOADING...')).toBeInTheDocument();
    expect(screen.queryByText('Acumulado Grilla')).toBeNull();
  });  
});  