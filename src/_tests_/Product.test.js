import React  from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { Product } from '../components';
import { initialState, reducer, StateProvider } from "../provider";
import { products } from "../_data_/mockes";


const setup = (props) => (
  <StateProvider reducer={reducer} initialState={initialState}>
  <Product products={products} productDetails={props} handleCounter={()=>props.handleCounter}/>
  </StateProvider>

);

describe('Previewer', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 1,
      title: 'title test',
      description: 'description test',
      url: '#',
      votes: 65,
      submitterAvatarUrl: '',
      productImageUrl: '',
      handleCounter:jest.fn()
    };
  });

  afterEach(cleanup);

  test('should render products list component', () => {
    const { getByTestId } = render(setup(props));
    expect(getByTestId('product-1')).toBeInTheDocument();
  });

  test('should click counter', () => {
    const { getByTestId } = render(setup(props));
    fireEvent.click(getByTestId('click-1'));
  });
});
