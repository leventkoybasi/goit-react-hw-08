import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// fetchContacts
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('fetchContacts icerisinde hata meydana geldi.', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// addContact
export const addContact = createAsyncThunk('contacts', async (text, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', {text});
    return response.data;
  } catch (error) {
    console.error('addContact icerisinde hata meydana geldi.', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
