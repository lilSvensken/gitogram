import { makeRequest } from "@/api/requests";

export const getUser = () => {
  return makeRequest({
    url: "/user",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    method: "GET",
  });
};
