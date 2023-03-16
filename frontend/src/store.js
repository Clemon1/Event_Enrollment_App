import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { eventAPI } from "./features/eventSlice";
import { categoryApi } from "./features/categorySlice";
import { bookingApi } from "./features/bookingSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    [eventAPI.reducerPath]: eventAPI.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      eventAPI.middleware,
      categoryApi.middleware,
      bookingApi.middleware,
    ),
});
