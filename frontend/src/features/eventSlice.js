import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventAPI = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/event",
  }),
  tagTypes: ["events"],
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => "/allEvent",
      providesTags: ["events"],
    }),
    getSingleEvents: build.query({
      query: (id) => `/allEvents/${id}`,
      providesTags: ["events"],
    }),
  }),
});

export const { useGetAllEventsQuery, useGetSingleEventsQuery } = eventAPI;