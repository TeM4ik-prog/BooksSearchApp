import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {},
};
const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    init(state, action) {
      state.modals[action.payload.name] = {
        isOpened: false,
        animation: null,
      };
    },
    openModal(state, action) {
      state.modals[action.payload.name].isOpened = true;
    },
    closeModal(state, action) {
      state.modals[action.payload.name].isOpened = false;
    },
    changeModalAnimation(state, action) {
      state.modals[action.payload.name].animation = action.payload.animation;
    },
  },
});

export const { init, openModal, closeModal, changeModalAnimation } =
  modalSlice.actions;
export default modalSlice.reducer;
