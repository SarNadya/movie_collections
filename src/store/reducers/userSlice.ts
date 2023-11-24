import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  favorites: [],
  history: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.password = payload.password;
      state.favorites = payload.favorites;
      state.history = payload.history;
    },
    resetUser(state) {
      state.email = '';
      state.password = '';
      state.favorites = [];
      state.history = [];
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
