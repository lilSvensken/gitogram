import { GITHUB_URL } from "@/utils/consts";

export const authGitHub = (clientId) => {
  const githubAuthApi = `${GITHUB_URL}/login/oauth/authorize`;
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("scope", "repo:status read:user");
  window.location.href = `${githubAuthApi}?${params}`;
};
