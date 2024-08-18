import { advancedSearch } from "#shared/model/searchSlice.js";

export function createTitleHandler(dispatch) {
  return function (value) {
    dispatch(advancedSearch({ title: value }));
  };
}
export function createAuthorHandler(dispatch) {
  return function (value) {
    dispatch(advancedSearch({ author: value }));
  };
}
export function createCategoryHandler(dispatch) {
  return function (value) {
    dispatch(advancedSearch({ category: value }));
  };
}
