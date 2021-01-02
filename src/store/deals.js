import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import { createSelector } from 'reselect';

const slice = createSlice({
  name: 'deals',
  initialState: {
    deals: [],
    loading: false,
    error: null,
    filterVal: '',
  },
  reducers: {
    loadDealsBegan: (state, action) => {
      state.loading = true;
    },
    loadDealsSucceeded: (state, action) => {
      state.loading = false;
      state.deals = action.payload;
      state.error = false;
    },
    loadDealsFailed: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    searchProducts: (state, action) => {
      state.filterVal = action.payload;
    },
  },
});

export const {
  loadDealsBegan,
  loadDealsFailed,
  loadDealsSucceeded,
  searchProducts,
} = slice.actions;

export default slice.reducer;

export const loadAllDeals = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url: '/deals.json',
      onStart: loadDealsBegan.type,
      onSuccess: loadDealsSucceeded.type,
      onError: loadDealsFailed.type,
    })
  );
};

// Selectors :

const selectDealsSlice = (state) => state.deals;

export const selectAllDeals = createSelector(
  selectDealsSlice,
  (deals) => deals.deals
);
export const selectLoadingStatus = createSelector(
  selectDealsSlice,
  (deals) => deals.loading
);
export const selectLoadingError = createSelector(
  selectDealsSlice,
  (deals) => deals.error
);

// Combined conditions
export const selectFilteredDeals = createSelector(
  (state) => state.deals.deals,
  (state) => state.deals.filterVal,
  (deals, filterVal) => {
    console.log('DEALS==> ', deals);
    console.log('filterVal==> ', filterVal);
    return deals.filter((deal) =>
      deal.name.toLowerCase().includes(filterVal.toLowerCase())
    );
  }
);

// Selector that accepts parameters.
export const selectDealById = (id) => {
  return createSelector(selectDealsSlice, (deals) =>
    deals.deals.find((item) => item.id === id)
  );
};
