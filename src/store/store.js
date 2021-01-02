import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import api from '../middlewares/api';
import logger from '../middlewares/logger';

// Redux persist

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    api,
  ],
});

let persistor = persistStore(store);
export { store, persistor };
