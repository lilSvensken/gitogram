export function getQueryParamsStr(paramsMap) {
  let queryParams = "";

  Object.keys(paramsMap).forEach((name) => {
    queryParams += !queryParams ? "?" : "&";
    queryParams += `${name}=${paramsMap[name]}`;
  });

  return queryParams;
}
