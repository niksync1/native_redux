import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './someSlicers';

const store = configureStore({
    reducer: counterSlice.reducer,
  })

  export default store;