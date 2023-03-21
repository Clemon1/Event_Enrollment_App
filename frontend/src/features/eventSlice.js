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
      query: (id) => `/allEvent/${id}`,
      providesTags: ["events"],
    }),
    getSearchEvents: build.query({
      query: (title) => `/search/${title}/?title=${title}`,
      providesTags: ["events"],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetSingleEventsQuery,
  useGetSearchEventsQuery,
} = eventAPI;
