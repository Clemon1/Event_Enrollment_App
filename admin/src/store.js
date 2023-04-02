import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { eventAPI } from "./features/eventSlice";
import { bookingApi } from "./features/bookingSlice";
import { categoryApi } from "./features/categorySlice";
import { userAPI } from "./features/userSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [eventAPI.reducerPath]: eventAPI.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      eventAPI.middleware,
      categoryApi.middleware,
      bookingApi.middleware,
      userAPI.middleware,
    ),
});
