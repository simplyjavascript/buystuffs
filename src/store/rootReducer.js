import { combineReducers } from 'redux';
import dealsReducer from './dealsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  deals: dealsReducer,
  cart: cartReducer,
});
