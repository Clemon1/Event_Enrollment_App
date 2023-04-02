import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/admin",
  }),
  tagTypes: ["userApp"],
  endpoints: (build) => ({
    getUserNumber: build.query({
      query: () => "/checkingUsers",
      providesTags: ["userApp"],
    }),
  }),
});

export const { useGetUserNumberQuery } = userAPI;
