import React from 'react';
import { cleanup, render } from '@testing-library/react';


import {ProductList} from '../components';
import { initialState, reducer, StateProvider } from "../provider";


const setup = () => (
  <StateProvider reducer={reducer} initialState={initialState}>
    <ProductList/>
  </StateProvider>
);

describe('Previewer', () => {
  afterEach(cleanup);

  test('should render products list component', () => {
    const { getByTestId } = render(setup());
    expect(getByTestId('list-container')).toBeInTheDocument();
  });

  test('should render header', () => {
    const { getByTestId } = render(setup());
    expect(getByTestId('header')).toBeInTheDocument();
  });

});
