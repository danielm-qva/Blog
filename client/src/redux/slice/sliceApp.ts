import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      statusLogin : false,
       user: {},
       token: "",
       Loadingapp : false,

}

export const loginSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    login: (state ,actions) => {
      state.statusLogin = true;
      state.user = actions.payload.user;
      state.token = actions.payload.token
    },
    logout: (state) => {
      state.statusLogin = false;
      state.user= {},
       state.token =""
    },
    setLoadingApp: (state) => {
        state.Loadingapp = true
    },
    notLoadginApp: (state) => {
      state.Loadingapp = false;
    }
  },
});

export const { login, logout , setLoadingApp , notLoadginApp } = loginSlice.actions;

export default loginSlice.reducer ;
