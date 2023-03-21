import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      statusLogin: false,
       user: {},
       token: "",
       loadingApp: false,
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
      state.user= {},
      state.token =""
    },
    LoadingApp: (state) => {
        state.loadingApp = true;
    },
    NotLoadinApp : (state) => {
          
       state.loadingApp = false;
    }
  },
});

export const { applogin, applogout , LoadingApp , NotLoadinApp } = loginSlice.actions;

export default loginSlice.reducer ;
