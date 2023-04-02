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
    getCategoryEvents: build.query({
      query: () => "/events",
      providesTags: ["categories"],
    }),
    getSingleCategories: build.query({
      query: (id) => `/all/${id}`,
      providesTags: ["categories"],
    }),
    createCategories: build.mutation({
      query(body) {
        return {
          url: `/create`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useGetCategoryEventsQuery,
  useLimitCategoriesQuery,
  useGetCategoriesQuery,
  useGetSingleCategoriesQuery,
} = categoryApi;
