import React, { createContext } from 'react';

const CurrencyContext = createContext({
  currency: 'CAD',
  toggleCurrency: () => {},
});

export default CurrencyContext;
