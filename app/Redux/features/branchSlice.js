"use client";

const { createSlice, PayloadAction } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  id: "",
  userName: "",
  phone: "",
  isLoggedIn: false,
};

export const branchSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getBranches: (state, action) => {
      console.log(getBranches);
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

export const { getBranches } = authSlice.actions;
export default branchSlice.reducer;
