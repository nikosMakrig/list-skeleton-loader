import React, { useState, useEffect } from 'react';

import { Product, Placeholder } from './index'
import { ProductListStyled } from '../styled'
import { useAppContext } from './../provider';

const { ListContainer, Header } = ProductListStyled;

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [{ products }] = useAppContext();

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  useEffect(() => {
    // Emulate loading for skeleton loader effect
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, []);

  const list = productsList.map(productDetails =>
    <Product products={products} key={`id_${productDetails.id}`}
             productDetails={productDetails}/>);

  const skeletonLoader = () =>
    Array.from({ length: 4 }).map((_, i) =>
      <Placeholder id={`loader-${i}`} key={`ld-${i}`}/>);

  return (
    <ListContainer data-testid="list-container">
      <Header data-testid="header">
        Popular Products
      </Header>
      {loading ? skeletonLoader() : list}
    </ListContainer>
  )
};
export default ProductList
