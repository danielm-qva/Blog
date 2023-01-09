import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from './sliceApp';

export const store = configureStore({
  reducer: {
    loginApp: loginSlice.reducer
  },
});