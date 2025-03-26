"use client"

import { IArticles } from '@/bff/interfaces/apiIntefaces';
import { loadArticles } from '@/bff/services/articles';
import React, {
  createContext, ReactNode, useContext, useState, useMemo, useEffect,
} from 'react';

export const Context = createContext<unknown>([]);

interface Props {
  children?: ReactNode
}

const ContextProvider = ({ children }: Props) => {

  const [articles, setArticles] = useState<IArticles[]>([]);

  const getArticles = async () => {
    const data = await loadArticles();
    console.log(data, 'en context')
    setArticles(data);
  };
  useEffect(() => {
    getArticles();
  }, []);
  const value = useMemo(() => (articles), [articles])
  console.log(value,  'val')
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);

export default ContextProvider;
