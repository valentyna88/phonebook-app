import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/contacts', contactData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact ',
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const { data } = await authInstance.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
