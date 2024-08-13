import React from "react";
import Input from "#shared/ui/input.jsx";
import {
  createTitleHandler,
  createAuthorHandler,
  createCategoryHandler,
} from "../model/handlers";
import { useDispatch, useSelector } from "react-redux";

import "./search-form.scss";
import { useGetBooksQuery } from "#shared/api/apiSlice.js";
import { updateBooks } from "#shared/model/bookSlice.js";
function SearchForm() {
  const dispatch = useDispatch();
  const { title, author, category } = useSelector(
    (state) => state.search.params
  );
  const {data, error, isLoading} = useGetBooksQuery()
  return (
    <form className="search-form">
      <section className="search-form__section">
        <h3 className="search-form__heading">Title</h3>
        <Input
          value={title}
          handler={createTitleHandler(dispatch)}
          label={"title"}
        />
      </section>
      <section className="search-form__section">
        <h3 className="search-form__heading">Author</h3>
        <Input
          value={author}
          handler={createAuthorHandler(dispatch)}
          label={"author"}
        />
      </section>
      <section className="search-form__section">
        <h3 className="search-form__heading">Category</h3>
        <Input
          value={category}
          handler={createCategoryHandler(dispatch)}
          label={"category"}
        />
      </section>
      <button onClick={(e) => {
        e.preventDefault()
        console.log(data)
      }} className="search-form__submit-button">Search</button>
    </form>
  );
}

export default SearchForm;
