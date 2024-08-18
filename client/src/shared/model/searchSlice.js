import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    quickSearch: "",
    title: "",
    author: "",
    category: "",
    publisher: "",
    pageCount: {
      min: null,
      max: null,
    },
  },
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    advancedSearch(state, action) {
      state.params.quickSearch = "";
      if (typeof action.payload.title === "string") {
        state.params.title = action.payload.title;
      }
      if (typeof action.payload.author === "string") {
        state.params.author = action.payload.author;
      }
      if (typeof action.payload.category === "string") {
        state.params.category = action.payload.category;
      }
    },
    quickSearch(state, action) {
      state.params.author = "";
      state.params.category = "";
      state.params.title = "";
      state.params.publisher = "";
      state.params.quickSearch = action.payload.value;
    },
  },
});

export const { advancedSearch, quickSearch } = searchSlice.actions;
export default searchSlice.reducer;
