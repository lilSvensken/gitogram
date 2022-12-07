import { makeRequest } from "@/api/requests";

/** получение readme из репозитория
 * @param { String } owner - владелец репозитория
 * @param { String } repo - название репозитория
 * */
export const getRepositoriesList = (owner, repo) => {
  return makeRequest({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: "application/vnd.github.v3.html+json",
    },
    method: "GET",
  });
};
