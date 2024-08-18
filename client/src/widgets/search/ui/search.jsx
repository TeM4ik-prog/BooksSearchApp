import React from "react";
import QuickSearch from "#features/quick-search";
import openAdvancedSearch from "../model/modal-controller";
import { useDispatch } from "react-redux";

import "./search.scss";
function Search() {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <QuickSearch />
      <div className="search__bottom">
        <p className="search__results-found">3 results</p>

        <button
          onClick={() => openAdvancedSearch(dispatch)}
          className="search__button"
        >
          Advanced search
          <img src="icons/filter.svg" className="search__icon" />
        </button>
      </div>
    </div>
  );
}

export default Search;
