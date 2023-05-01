import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiName } from "../API/api";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiName}/booking`,
  }),
  tagTypes: ["bookings"],
  endpoints: (build) => ({
    getTopBooking: build.query({
      query: () => `/topevent`,
      providesTags: ["bookings"],
    }),
    createBookings: build.mutation({
      query(body) {
        return {
          url: `/create`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const { useGetTopBookingQuery, useCreateBookingsMutation } = bookingApi;
