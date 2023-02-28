import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("User");

const initialState = {
  isLoading: false,
  User: user ? JSON.parse(user) : null,
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
      localStorage.setItem("User", JSON.stringify(state.User));
    },
    Rejected: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    LogOut: (state) => {
      state.isLoading = false;
      state.User = null;
      state.isError = false;
      localStorage.removeItem("User");
    },
  },
});

export const { Pending, Success, Rejected, LogOut } = authSlice.actions;
export const currentUSer = (state) => state.user.User;
export default authSlice.reducer;
