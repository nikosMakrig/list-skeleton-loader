import React from 'react';
import  { render } from 'react-dom';
import App from './App';

import { initialState, reducer, StateProvider } from "./provider";

render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('root')|| document.createElement('div')
);
