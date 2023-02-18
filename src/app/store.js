import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { googleBooksAPI } from '../services/googleBooksAPI';


export const store = configureStore({
  reducer: {
    [googleBooksAPI.reducerPath]: googleBooksAPI.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(googleBooksAPI.middleware)
});
