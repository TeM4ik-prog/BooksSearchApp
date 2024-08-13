import { changeParams } from "#shared/model/searchSlice.js";

export function createTitleHandler(dispatch) {
  return function (value) {
    dispatch(changeParams({ title: value }));
  };
}
export function createAuthorHandler(dispatch) {
  return function (value) {
    dispatch(changeParams({ author: value }));
  };
}
export function createCategoryHandler(dispatch) {
  return function (value) {
    dispatch(changeParams({ category: value }));
  };
}
