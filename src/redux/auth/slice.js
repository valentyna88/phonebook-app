import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, refreshUser, register } from './operations';

const initialState = {
  user: null,
  isLoading: false,
  error: null,

  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, handleRejected)

      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, handleRejected)

      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
