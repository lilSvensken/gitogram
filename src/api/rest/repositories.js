import { makeRequest } from "@/api/requests";

/** получение популярных репозиториев
 * @param { String } qSearch - строка поиска (clanguage, created и др)
 * @param { Number } pageCount - кол-во получаемых элементов
 * */
export const getRepositoriesList = (qSearch, pageCount) => {
  return makeRequest({
    url: `/search/repositories?q=${qSearch}&per_page=${pageCount}`,
    method: "GET",
  });
};
