import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from './slice/sliceApp';

export const store = configureStore({
  reducer: {
    loginApp: loginSlice.reducer
  },
});