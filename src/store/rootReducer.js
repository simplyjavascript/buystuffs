import { combineReducers } from 'redux';
import dealsReducer from './deals';
import cartReducer from './cart';

export default combineReducers({
  deals: dealsReducer,
  cart: cartReducer,
});
