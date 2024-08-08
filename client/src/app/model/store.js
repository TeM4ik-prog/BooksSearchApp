import bookSlice from "#shared/model/bookSlice.js";
import userSlice from "#shared/model/userSlice.js";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        user: userSlice,
        book: bookSlice
    },
});

