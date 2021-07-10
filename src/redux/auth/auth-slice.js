import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registration.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
  },
});

export default authSlice.reducer;
