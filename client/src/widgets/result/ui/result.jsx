import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "#shared/api/apiSlice.js";
import Book from "#entities/book";

import "./result.scss";
function Result() {
  const params = useSelector((state) => state.search.params);
  const { data, error, isLoading } = useGetBooksQuery({
    ...params,
    page: 1,
    limit: 8,
  });

  return (
    <section aria-labelledby="result-title" className="result">
      <h2 className="result__title" id="result-title">
        Results:
      </h2>
      {data?.length ? data?.map((e) => <Book book={e} />) : ""}
    </section>
  );
}

export default Result;
