import { configureStore } from '@reduxjs/toolkit';
import furnitureReducer from '../redux/furnitureSlice';
import userReducer from './userslice';

const store = configureStore({
  reducer: {
    furniture: furnitureReducer,
    user: userReducer,
  },
});

export default store;