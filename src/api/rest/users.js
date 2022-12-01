import { makeRequest } from "@/api/requests";

export const getUsers = (qSearch, pageCount) => {
  return makeRequest({
    url: `/search/repositories?q=${qSearch}&per_page=${pageCount}`,
    method: "GET",
  });
};
