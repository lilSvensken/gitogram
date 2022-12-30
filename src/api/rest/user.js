import { makeRequest } from "@/api/requests";
import { getQueryParamsStr } from "@/utils/get-query-params-str";

/** получить данные о пользователе */
export const getUser = () => {
  return makeRequest({
    url: "/user",
    method: "GET",
  });
};

/** получить список репозиториев пользователя
 * @param { String } owner - владелец репозитория
 * @param { Number } page - номер страницы
 * @param { Number } offset - количество получаемых элементов
 * */
export const getUserReposList = (owner, page, offset) => {
  let urlRequest = `/users/${owner}/repos`;
  const queries = {};
  if (page) queries["page"] = page;
  if (offset) queries["per_page"] = offset;
  urlRequest += getQueryParamsStr(queries);

  return makeRequest({
    url: urlRequest,
    method: "GET",
  });
};

/** получить список репозиториев пользователя
 * @param { Number } page - номер страницы
 * @param { Number } offset - количество получаемых элементов
 * */
export const getUserFollowersList = (page, offset) => {
  let urlRequest = `/user/followers`;
  const queries = {};
  if (page) queries["page"] = page;
  if (offset) queries["per_page"] = offset;
  urlRequest += getQueryParamsStr(queries);

  return makeRequest({
    url: urlRequest,
    method: "GET",
  });
};
