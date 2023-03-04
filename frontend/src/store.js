import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { eventAPI } from "./features/eventSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    [eventAPI.reducerPath]: eventAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventAPI.middleware),
});
