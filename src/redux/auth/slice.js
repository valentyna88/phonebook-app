import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiRegister } from "./operations";

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  isLoading: false,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(apiRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(apiLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
