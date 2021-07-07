import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, phoneBookReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const exports = { store, persistor };
export default exports;
