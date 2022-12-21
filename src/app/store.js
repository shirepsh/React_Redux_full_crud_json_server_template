import { configureStore } from '@reduxjs/toolkit';
import zooSlice from '../slicers/zooSlice';

export const store = configureStore({
  reducer: {
    zoo: zooSlice,
  },
});
