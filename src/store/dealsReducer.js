import * as actions from './actionType';
import { createSelector } from 'reselect';

const INITIAL_STATE = {
  deals: [],
  loading: false,
  error: null,
  filterVal: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LOAD_ALL_DEALS:
      return {
        ...state,
        loading: true,
      };
    case actions.LOAD_ALL_DEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        deals: action.payload,
      };
    case actions.LOAD_ALL_DEALS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SEARCH_PRODUCTS: {
      return {
        ...state,
        filterVal: action.payload,
      };
    }

    default:
      return state;
  }
}

const selectDealsRootSlice = (state) => state.deals;

export const selectAllDeals = createSelector(
  selectDealsRootSlice,
  (deals) => deals.deals
);

export const selectLoadingStatus = createSelector(
  selectDealsRootSlice,
  (deals) => deals.loading
);

export const selectLoadingError = createSelector(
  selectDealsRootSlice,
  (deals) => deals.error
);

export const selectFilteredDeals = createSelector(
  (state) => state.deals.deals,
  (state) => state.deals.filterVal,
  (deals, filterVal) => {
    return deals.filter((deal) =>
      deal.name.toLowerCase().includes(filterVal.toLowerCase())
    );
  }
);

export const selectDealById = (id) => {
  return createSelector(selectDealsRootSlice, (deals) => {
    return deals.deals.find((item) => item.id === id);
  });
};
