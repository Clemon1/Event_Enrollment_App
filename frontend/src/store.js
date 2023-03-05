import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { eventAPI } from "./features/eventSlice";
import { categoryApi } from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    [eventAPI.reducerPath]: eventAPI.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventAPI.middleware, categoryApi.middleware),
});
