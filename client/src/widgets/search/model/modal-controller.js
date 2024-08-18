import { openModal } from "#shared/model/modalSlice.js";

export default function openAdvancedSearch(dispatch) {
  document.querySelector("body").classList.add("no-scroll");
  dispatch(openModal({ name: "advanced-search" }));
}
