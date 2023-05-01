import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiName } from "../API/api";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiName}/admin`,
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
