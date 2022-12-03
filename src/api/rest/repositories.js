import { makeRequest } from "@/api/requests";

/** получение популярных репозиториев
 * @param { String } qSearch - строка поиска (clanguage, created и др)
 * @param { Number } page - номер страницы
 * @param { Number } offset - кол-во получаемых элементов
 * */
export const getRepositoriesList = (qSearch, page, offset) => {
  return makeRequest({
    url: `/search/repositories?q=${qSearch}&page=${page}&per_page=${offset}`,
    method: "GET",
  });
};
