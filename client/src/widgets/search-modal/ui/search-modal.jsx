import React from "react";
import SearchForm from "#features/search";
import CloseButton from "#shared/assets/close-button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeModalAnimation, closeModal } from "#shared/model/modalSlice.js";
import Icon from "#shared/assets/icon.jsx";

import "./search-modal.scss";
function SearchModal() {
  const animation = useSelector(
    (state) => state.modal.modals["advanced-search"],
  )?.animation;

  const dispatch = useDispatch();

  return (
    <div
      className={
        "search-modal search-modal" +
        (animation === "closing" ? "--closed" : "--opened")
      }
      onClick={(e) => e.stopPropagation()}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && animation === "closing") {
          dispatch(
            changeModalAnimation({ name: "advanced-search", animation: null }),
          );
          dispatch(closeModal({ name: "advanced-search" }));
          document.querySelector("body").classList.remove("no-scroll")
        }
      }}
    >
      <header className="search-modal__header">
        <Icon />
        <button
          type="button"
          className="close-button"
          onClick={() => {
            dispatch(
              changeModalAnimation({
                name: "advanced-search",
                animation: "closing",
              }),
            );
          }}
        >
          <CloseButton />
        </button>
      </header>
      <SearchForm />
    </div>
  );
}

export default SearchModal;
