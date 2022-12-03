import { makeRequest } from "@/api/requests";

export const getPopularRepertories = (qSearch, pageCount) => {
  return makeRequest({
    url: `/search/repositories?q=${qSearch}&per_page=${pageCount}`,
    method: "GET",
  });
};
