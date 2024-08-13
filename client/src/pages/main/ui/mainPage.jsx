import { useState } from "react";

import "./mainPage.scss";
import Result from "#widgets/result";
import Modal from "#shared/ui/modal";
import { useDispatch } from "react-redux";
import { openModal } from "#shared/model/modalSlice.js";
import SearchModal from "#widgets/search-modal/ui/search-modal.jsx";
function MainPage() {

  const dispatch = useDispatch();

  return (
    <main className="page">
      <Modal modalName="advanced-search">
        <SearchModal />
      </Modal>
      <form className="quick-search">
        <div className="quick-search__input-container">
          <input
            placeholder="Start typing"
            className="quick-search__input-field"
          />
        </div>

        <div className="filter">
          <p className="filter__results-found">3 results</p>

          <button
            type="button"
            className="filter__button"
            onClick={() => {
              document.querySelector("body").classList.add("no-scroll")
              dispatch(openModal({ name: "advanced-search" }))
            }}
          >
            Advanced search
            <img src="icons/filter.svg" className="filter__icon" />
          </button>
        </div>
      </form>

      <Result/>
    </main>
  );
}

export default MainPage;
