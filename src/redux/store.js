import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },
});

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, phoneBookReducer),
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// const exports = { store, persistor };
