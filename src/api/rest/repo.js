import { makeRequest } from "@/api/requests";

/** Получение списка проблем репозитория
 * @param { String } ownerLogin - логин автора репо
 * @param { String } repoName - название репо
 * @param { Number } num - необяз.параметр. Номер комментария, если нужно получить коенкретный
 * */
export const getIssues = (ownerLogin, repoName, num = null) => {
  const numParam = num ? `/${num}` : "";
  return makeRequest({
    url: `repos/${ownerLogin}/${repoName}/issues${numParam}`,
    method: "GET",
  });
};

/** получение readme из репозитория
 * @param { String } owner - владелец репозитория
 * @param { String } repo - название репозитория
 * */
export const getReadmeRepo = (owner, repo) => {
  return makeRequest({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: "application/vnd.github.v3.html+json",
    },
    method: "GET",
  });
};
