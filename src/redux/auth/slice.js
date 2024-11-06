import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  userData: null,
  isLoading: false,
  error: null,

  token: null,
  isRefreshing: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
});

export const authReducer = authSlice.reducer;
