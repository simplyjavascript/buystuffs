import * as actions from './actionType';
import { createSelector } from 'reselect';

const INITIAL_STATE = {
  cart: [],
};

const handleAddToCart = (state, item) => {
  const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
  if (state.cart.length === 0 || !existingItem) {
    const newItem = { ...item, quantity: 1 };
    return [...state.cart, newItem];
  }
  const updatedCart = state.cart.map((cartItem) => {
    if (cartItem.id === item.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
    }
    return cartItem;
  });

  return updatedCart;
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.ADD_ITEMS_TO_CART:
      return {
        ...state,
        cart: handleAddToCart(state, action.payload),
      };
    default:
      return state;
  }
}

//Selectors

const selectCartRootSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCartRootSlice,
  (cart) => cart.cart
);

export const getCartTotal = createSelector(selectCartRootSlice, (cart) => {
  return cart.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
});
