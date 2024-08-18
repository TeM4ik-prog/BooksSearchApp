import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "../helper/localstorage";
import joinParams from "./../helper/url-params";
export const bookApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    headers: { Authorization: "Bearer " + getTokenFromLocalStorage() || "" },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (params) => `/books?${joinParams(params)}`,
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
