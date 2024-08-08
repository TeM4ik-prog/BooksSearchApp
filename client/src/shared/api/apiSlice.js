import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getTokenFromLocalStorage } from "../helper/localstorage"
const bookApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "/api", headers: {Authorization: "Bearer " + getTokenFromLocalStorage() || ""} }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (page, count, filters, searchValue) => `
                /books?
                page=${page}&
                count=${count}&
                min=${filters.min}&
                max=${filters.max}&
                ${filters.searchBy}=${searchValue}
            `
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: '/users',
                method: "POST",
                userData
            }),
        }),
        
    })
})