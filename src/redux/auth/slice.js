import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
