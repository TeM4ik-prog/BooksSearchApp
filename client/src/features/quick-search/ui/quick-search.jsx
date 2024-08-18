import React from "react";
import Input from "#shared/ui/input.jsx";
import { useDispatch, useSelector } from "react-redux";
import { quickSearch } from "#shared/model/searchSlice.js";

function QuickSearch() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.search.params.quickSearch);
  return (
    <Input
      value={value}
      handler={(value) => {
        dispatch(quickSearch({ value }));
      }}
      label="quicksearch"
    />
  );
}

export default QuickSearch;
