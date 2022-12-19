import { makeRequest } from "@/api/requests";
/** поулчение репозиториев, лайкнутых пользователем
 * */
export const getFavouritesRepos = (page, offset) => {
  return makeRequest({
    url: `/user/starred?page=${page}&per_page=${offset}`,
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
