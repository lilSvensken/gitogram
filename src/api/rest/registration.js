import { makeRequest } from "@/api/requests";

export const registration = (clientId, code, clientSecret) => {
  return makeRequest(
    {
      url: `/github`,
      headers: {
        accept: "application/vnd.github.v3.html+json",
      },
      method: "POST",
      data: {
        clientId,
        code,
        clientSecret,
      },
    },
    true
  );
};
