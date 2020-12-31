import React from 'react';
const DealsContext = React.createContext({
  products: [],
  cart: [],
  loading: false,
  filterVal: '',
  setFilter: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});
export default DealsContext;
