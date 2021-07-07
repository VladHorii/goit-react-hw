import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });
// const removeContact = id => ({
//   type: types.REMOVE,
//   payload: id,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const addContact = createAction('phoneBook/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const removeContact = createAction('phoneBook/remove');
const changeFilter = createAction('phoneBook/changeFilter');

const exportFunctions = {
  addContact,
  removeContact,
  changeFilter,
};

export default exportFunctions;
