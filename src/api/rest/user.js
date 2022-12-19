import { makeRequest } from "@/api/requests";

export const getUser = () => {
  return makeRequest({
    url: "/user",
    method: "GET",
  });
};
