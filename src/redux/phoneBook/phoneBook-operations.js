import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8888';

async function getContacts() {
  const contacts = await axios.get(`/contacts`);
  return contacts.data;
}

export const fetchContacts = createAsyncThunk(
  'phoneBook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'phoneBook/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, newContact);
      if (response.status !== 201) {
        throw new Error(response.message);
      }
      const updatedContacts = await getContacts();
      return updatedContacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phoneBook/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      if (response.status !== 200) {
        throw new Error(response.message);
      }
      const updatedContacts = await getContacts();
      return updatedContacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
