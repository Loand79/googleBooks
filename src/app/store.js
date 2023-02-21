import { configureStore} from '@reduxjs/toolkit';
import { googleBooksAPI } from '../services/googleBooksAPI';
import bookSlice from "../slices/bookSlice";


export const store = configureStore({
  reducer: {
    bookSlice: bookSlice,
    [googleBooksAPI.reducerPath]: googleBooksAPI.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(googleBooksAPI.middleware)
});
