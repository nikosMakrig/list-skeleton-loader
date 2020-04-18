import React, { useEffect } from 'react';
import { ProductList } from './components'
import { products } from "./_data_/mockes";

import { useAppContext } from './provider';

const App = () => {
  const [, dispatch] = useAppContext();

  useEffect(() => {
    dispatch({ payload: { products } });
  }, [dispatch]);

  return <ProductList />
};

export default App;
