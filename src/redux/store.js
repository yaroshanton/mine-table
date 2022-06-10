import { homeReducer } from './reducer/home-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    homeReducer,
  },
});

export default store;
