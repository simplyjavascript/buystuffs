import axios from 'axios';

import * as actions from '../store/api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action);
  }
  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  if (onStart) {
    dispatch({ type: onStart });
  }
  next(action);
  try {
    const response = await axios.request({
      baseURL: 'https://nuxt-blog-85ff7-default-rtdb.firebaseio.com',
      url,
      method,
      data,
    });

    const products = [];
    Object.keys(response.data).forEach((key) => {
      const prod = {
        ...response.data[key],
        id: key,
      };
      products.push(prod);
    });

    // General
    dispatch(actions.apiCallSuccess(products));
    if (onSuccess) dispatch({ type: onSuccess, payload: products });
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
