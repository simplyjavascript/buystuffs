import React, { useEffect } from 'react';

import CurrencyContext from './contexts/CurrencyContext';
import { useDispatch } from 'react-redux';
import { loadAllDeals } from './store/deals';
import useCurrencyToggle from './hooks/currencyToggle';
import Routes from './Routes';

const App = (props) => {
  const currencyObj = useCurrencyToggle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllDeals());
  }, []);
  return (
    <CurrencyContext.Provider value={currencyObj}>
      <Routes />
    </CurrencyContext.Provider>
  );
};

export default App;
