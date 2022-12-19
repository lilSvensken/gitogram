import { makeRequest } from "@/api/requests";

/** поулчение репозиториев, лайкнутых пользователем
 * */
export const getFavouritesRepos = (page, offset) => {
  return makeRequest({
    url: `/user/starred?page=${page}&per_page=${offset}`,
    method: "GET",
  });
};
