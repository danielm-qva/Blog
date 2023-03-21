import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPost: [],
  isloading: false,
};

export const slicePost = createSlice({
  name: "post",
  initialState,
  reducers: {
    setgetAllPost: (state, actions) => {
      state.listPost = actions.payload.list;
      console.log(state.listPost);
    },
    resetState: (state) => {
      state = initialState;
    },
    isloadinglist: (state) => {
      state.isloading = true;
    },
    notloadinglist: (state) => {
      state.isloading = false;
    },
  },
});

export const { setgetAllPost, resetState, isloadinglist, notloadinglist } =
  slicePost.actions;

export default slicePost.reducer;
