import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      statusLogin : false,
       user: "",
       token: "",
       Loadingapp : false,
}

export const loginSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    applogin: (state ,actions) => {
      state.statusLogin = true;
      state.user = actions.payload.user;
      state.token = actions.payload.token
    },
    applogout: (state) => {
      state.statusLogin = false;
      state.user= "",
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

export const { applogin, applogout , setLoadingApp , notLoadginApp } = loginSlice.actions;

export default loginSlice.reducer ;
