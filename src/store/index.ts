import { configureStore } from '@reduxjs/toolkit';
import guidReducer from './guidSlice';

const store = configureStore({
  reducer: {
    guid: guidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;