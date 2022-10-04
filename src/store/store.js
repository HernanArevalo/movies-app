import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './movie/movieSlice';
import { searchSlice } from './search/searchSlice';

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    search: searchSlice.reducer,

  },
});