import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    statusLogin: false,
    user: {},
    token: "",
  },
  reducers: {
    login: (state) => {
      state.statusLogin = true;
    },
    logout: (state) => {
      state.statusLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;