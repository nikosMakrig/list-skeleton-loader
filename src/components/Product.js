import React from 'react';
import PropTypes from 'prop-types';

import { ProductStyled } from '../styled'
import { useAppContext } from "../provider";

const {
  ProductContainer,
  ProductDetails,
  Image,
  Counter,
  Title,
  Details,
  Submitted,
  Submitter,
  SubmitInfo,
  Votes,
  Icon
} = ProductStyled;

const Product = ({ productDetails, products = [] }) => {
  const { id, title, description, url, votes, submitterAvatarUrl, productImageUrl } = productDetails;
  const [, dispatch] = useAppContext();

  const handleCounter = id => {
    const copyProductList = [...products];

    const newList = copyProductList.map(product => {
      if (product.id === id) {
        product.votes ++
      }
      return product
    });

    dispatch({ payload: { products: newList } });
  };

  return (
    <ProductContainer data-testid={`product-${id}`}>
      <Image url={require(`../${productImageUrl}`)}/>
      <ProductDetails>
        <Counter>
          <Icon data-testid={`click-${id}`} onClick={() => handleCounter(id)}/>
          <Votes>{votes}</Votes>
        </Counter>
        <Title href={`${url}`}>
          {title}
        </Title>
        <Details>
          {description}
        </Details>
        <SubmitInfo>
          <Submitted>
            Submitted by:
          </Submitted>
          <Submitter url={require(`../${submitterAvatarUrl}`)}/>
        </SubmitInfo>
      </ProductDetails>
    </ProductContainer>
  )
};

Product.propTypes = {
  product: PropTypes.array
};

export default Product
