import { createSlice } from "@reduxjs/toolkit";

const User = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  User: User ? JSON.parse(User) : null,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Pending: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    Success: (state, action) => {
      state.isLoading = false;
      state.User = action.payload;
      localStorage.setItem("user", JSON.stringify(state.User));
    },
    Rejected: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    LogOut: (state) => {
      state.isLoading = false;
      state.User = null;
      state.isError = false;
      localStorage.removeItem("user");
    },
  },
});

export const { Pending, Success, Rejected, LogOut } = authSlice.actions;
export const currentUSer = (state) => state.auth.User;
export default authSlice.reducer;
