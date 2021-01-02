import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    itemAdded: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (state.cart.length === 0 || !existingItem) {
        const newItem = { ...item, quantity: 1 };
        state.cart.push(newItem);
      } else {
        state.cart.forEach((cartItem) => {
          if (cartItem.id === item.id) {
            cartItem.quantity = cartItem.quantity + 1;
          }
        });
      }
    },
    itemRemoved: (state, action) => {
      const id = action.payload;
      const currentItem = state.cart.find((cartItem) => cartItem.id === id);
      const currentIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === id
      );
      let currentQty = currentItem.quantity;

      if (currentQty > 1) {
        currentItem.quantity = currentItem.quantity - 1;
        state.cart.forEach((cartItem) => {
          if (cartItem.id === id) {
            cartItem = currentItem;
          }
        });
      }
      if (currentQty === 1) {
        state.cart.splice(currentIndex, 1);
      }
    },
  },
});

export const { itemAdded, itemRemoved } = slice.actions;
export default slice.reducer;

// Actions
export const addToCart = (item) => {
  return {
    type: itemAdded.type,
    payload: item,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: itemRemoved.type,
    payload: id,
  };
};

// Selectors:

const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCartSlice,
  (cart) => cart.cart
);

export const selectCartItemsCount = createSelector(selectCartSlice, (cart) =>
  cart.cart.reduce((acc, item) => acc + item.quantity, 0)
);

export const getCartTotal = createSelector(selectCartSlice, (cart) => {
  return cart.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
});
