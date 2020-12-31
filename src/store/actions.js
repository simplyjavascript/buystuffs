import * as actions from './actionType';
import axios from '../api/axios';

export const loadAllDeals = () => (dispatch) => {
  // Loading spinner
  dispatch({ type: actions.LOAD_ALL_DEALS });
  axios
    .get('/deals.json')
    .then((res) => {
      const products = [];
      Object.keys(res.data).forEach((key) => {
        const prod = {
          ...res.data[key],
          id: key,
        };
        products.push(prod);
      });
      dispatch(loadDealsSuccess(products));
    })
    .catch((err) => {
      dispatch(loadDealsFail(err));
    });
};

export const loadDealsSuccess = (deals) => {
  return {
    type: actions.LOAD_ALL_DEALS_SUCCESS,
    payload: deals,
  };
};

export const loadDealsFail = (error) => {
  return {
    type: actions.LOAD_ALL_DEALS_FAIL,
    payload: error,
  };
};

export const searchProducts = (filterVal) => {
  return {
    type: actions.SEARCH_PRODUCTS,
    payload: filterVal,
  };
};
