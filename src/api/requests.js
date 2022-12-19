import axios from "axios";
import { camelizeObjFields } from "@/libs/camelize";
import { GITHUB_API_URL, LOCAL_API_URL } from "@/utils/consts";

export function makeRequest(
  {
    url,
    method = "get",
    data,
    headers = {
      accept: "application/vnd.github+json",
    },
  },
  isLocalRequest = false
) {
  return axios({
    baseURL: isLocalRequest ? LOCAL_API_URL : GITHUB_API_URL,
    url,
    headers,
    method,
    data,
  })
    .then((res) => camelizeObjFields(res.data))
    .catch((error) => error);
}
