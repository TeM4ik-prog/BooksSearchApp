export default function joinParams(params) {
  let result = "";
  for (let key in params) {
    if (key === "pageCount") {
      if (params[key].min) result += `&minPages=${params[key].min}`;
      if (params[key].max) result += `&maxPages=${params[key].max}`;
    } else {
      if (params[key]) {
        result += `&${key}=${params[key]}`;
      }
    }
  }
  return result;
}
