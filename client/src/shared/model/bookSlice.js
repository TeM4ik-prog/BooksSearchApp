import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,

  reducers: {
    updateBooks(state, action) {
      state.books = action.payload.books;
    },
  },
});

export const { updateBooks } = bookSlice.actions;
export default bookSlice.reducer;
