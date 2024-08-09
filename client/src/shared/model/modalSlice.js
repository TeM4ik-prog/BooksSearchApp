import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modals: {}
}
const modalSlice = createSlice({
    name: "modal",
    initialState,

    reducers: {
        init(state, action) {
            state.modals[action.payload.name] = {
                isOpened: false,
                animation: null
            }
        },
        open(state, action) {
            state.modals[action.payload.name].isOpened = true
        },
        close(state, action) {
            state.modals[action.payload.name].isOpened = false
        }
    }
})

export const { init, open, close } = modalSlice.actions
export default modalSlice.reducer