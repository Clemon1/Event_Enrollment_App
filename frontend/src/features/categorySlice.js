import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/categories",
  }),
  tagTypes: ["categories"],
  endpoints: (build) => ({
    limitCategories: build.query({
      query: () => "/limit",
      providesTags: ["categories"],
    }),
    getCategories: build.query({
      query: () => "/all",
      providesTags: ["categories"],
    }),
    getSingleCategories: build.query({
      query: (id) => `/all/${id}`,
      providesTags: ["categories"],
    }),
  }),
});

export const {
  useLimitCategoriesQuery,
  useGetCategoriesQuery,
  useGetSingleCategoriesQuery,
} = categoryApi;
