import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiName } from "../API/api";

export const eventAPI = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiName}/event`,
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
    createEvents: build.mutation({
      query(body) {
        return {
          url: `/create`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["events"],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetSingleEventsQuery,
  useGetSearchEventsQuery,
  useCreateEventsMutation,
} = eventAPI;
