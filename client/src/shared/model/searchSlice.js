import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    title: "",
    author: "",
    category: "",
  },
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeParams(state, action) {
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
  },
});

export const { changeParams } = searchSlice.actions;
export default searchSlice.reducer;
