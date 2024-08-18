import React, { useEffect } from "react";
import Input from "#shared/ui/input.jsx";
import {
  createTitleHandler,
  createAuthorHandler,
  createCategoryHandler,
} from "../model/handlers";
import { useDispatch, useSelector } from "react-redux";

import "./search-form.scss";
function SearchForm() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.search.params.title);
  const author = useSelector((state) => state.search.params.author);
  const category = useSelector((state) => state.search.params.category);
  return (
    <form className="advanced-search">
      <section className="advanced-search__section">
        <h3 className="advanced-search__heading">Title</h3>
        <Input
          value={title}
          handler={createTitleHandler(dispatch)}
          label={"title"}
        />
      </section>
      <section className="advanced-search__section">
        <h3 className="advanced-search__heading">Author</h3>
        <Input
          value={author}
          handler={createAuthorHandler(dispatch)}
          label={"author"}
        />
      </section>
      <section className="advanced-search__section">
        <h3 className="advanced-search__heading">Category</h3>
        <Input
          value={category}
          handler={createCategoryHandler(dispatch)}
          label={"category"}
        />
      </section>
    </form>
  );
}

export default SearchForm;
