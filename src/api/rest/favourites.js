import { makeRequest } from "@/api/requests";
import { getQueryParamsStr } from "@/utils/get-query-params-str";

/** поулчение репозиториев, лайкнутых пользователем
 * @param { Number } page - номер страницы
 * @param { Number } offset - количество получаемых элементов
 * */
export const getFavouritesRepos = (page, offset) => {
  let urlRequest = "/user/starred";
  const queries = {};
  if (page) queries["page"] = page;
  if (offset) queries["per_page"] = offset;
  urlRequest += getQueryParamsStr(queries);

  return makeRequest({
    url: urlRequest,
    method: "GET",
  });
};

/** Лакнуть репозиторий
 * @param { String } owner - владелец репозитория
 * @param { String } repo - название репозитория
 * */
export const starred = (owner, repo) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: "PUT",
  });
};

/** Разлайкать репозиторий
 * @param { String } owner - владелец репозитория
 * @param { String } repo - название репозитория
 * */
export const unStarred = (owner, repo) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: "DELETE",
  });
};
