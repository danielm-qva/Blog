import { configureStore } from "@reduxjs/toolkit";
import loginSlice  from './slice/sliceApp';
import slicePost from "./slice/slicePost";

export const store = configureStore({
  reducer: {
    app: loginSlice,
     post: slicePost
  },
});