import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  userToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.userInfo = payload;
    },
    logout: state => {
      state.userInfo = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
