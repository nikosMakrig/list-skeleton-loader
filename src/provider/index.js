import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const initialState = {
  products: [],
};

export const StateProvider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export { default as reducer } from './reducers';
