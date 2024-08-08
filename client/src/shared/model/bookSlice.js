import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books: [],
    filters: {
        preview: "any",
        booksPerPage: 8,
        pagesCount: {
            min: 1,
            max: null
        }
    }
}
const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        updateBooks(state, action) {
            state.books = action.payload.data
        },
        updateFilters(state, action) {
            state.filters = action.payload.filter
        }
    }
})

export const {} = bookSlice.actions
export default bookSlice.reducer