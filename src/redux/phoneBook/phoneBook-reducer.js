import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './phoneBook-operations';
import * as actions from './phoneBook-actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,

  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,

  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.REMOVE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
//
//
//
// const items = createReducer([], {
//   [actions.addContact]: (state, { payload }) => [...state, payload],
//   [actions.removeContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });
