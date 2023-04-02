import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/booking",
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
