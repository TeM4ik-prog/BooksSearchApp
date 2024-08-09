import bookSlice from "#shared/model/bookSlice.js";
import modalSlice from "#shared/model/modalSlice.js";
import userSlice from "#shared/model/userSlice.js";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        user: userSlice,
        book: bookSlice,
        modal: modalSlice
    },
});

