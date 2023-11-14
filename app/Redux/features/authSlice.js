"use client";

const { createSlice, PayloadAction } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  id: "",
  userName: "",
  phone: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action) => {
      console.log(action);
      console.log(state);
      return {
        ...state,
        id: action.payload.id,
        userName: action.payload.userName,
        // password: action.payload.password,
        phoneNumber: action.payload.phoneNumber,
        isLoggedIn: true,
      };
    },
    signUp: (state, action) => {
      console.log(action);
      return {
        id: action?.payload.id,
        password: action?.payload.password,
        phoneNumber: action?.payload.phoneNumber,
        isLoggedIn: true,
      };
    },
    setUpProfile: (state, action) => {
      return {
        id: action?.payload?.id,
        userName: action?.payload?.userName,
        // password: action?.payload?.password,
        phoneNumber: action?.payload?.phoneNumber,
        isLoggedIn: true,
      };
    },

    // Special reducer for hydrating the state
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.auth,
    //     };
    //   },
    // },
  },
});

export const { logIn, logOut, setUpProfile, signUp } = authSlice.actions;
export default authSlice.reducer;
