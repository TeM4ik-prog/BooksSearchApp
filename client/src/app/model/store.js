import searchSlice from "#shared/model/searchSlice.js";
import modalSlice from "#shared/model/modalSlice.js";
import userSlice from "#shared/model/userSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "#shared/model/bookSlice.js";
import {bookApi} from "#shared/api/apiSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [bookApi.reducerPath]: bookApi.reducer,
    search: searchSlice,
    book: bookSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware)
});

setupListeners(store.dispatch)