import { GITHUB_URL } from "@/utils/consts";
import { makeRequest } from "@/api/requests";

export const authorizeGithub = (clientId) => {
  const githubAuthApi = `${GITHUB_URL}/login/oauth/authorize`;
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("scope", "repo:status read:user");
  window.location.href = `${githubAuthApi}?${params}`;
};

export const checkAuthorize = () => {
  return makeRequest({
    url: "/user",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    method: "GET",
  });
};
