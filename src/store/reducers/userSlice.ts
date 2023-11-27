import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string;
  favorites: number[];
  history: string[];
}

const initialState: UserState = {
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
    addFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((el) => el !== payload);
    },
  },
});

export const { setUser, resetUser, addFavorites, removeFavorites } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
