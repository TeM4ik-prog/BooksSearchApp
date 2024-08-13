import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "../helper/localstorage";
export const bookApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    headers: { Authorization: "Bearer " + getTokenFromLocalStorage() || "" },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (page, count) => `/books?page=1&limit=16&author=pushkin&title=s`,
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        userData,
      }),
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;