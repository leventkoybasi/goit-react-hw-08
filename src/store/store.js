import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './conctacts/slice';
import authReducer from './auth/slice';
import filterReducer from './filters/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
