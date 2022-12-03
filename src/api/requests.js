import axios from "axios";
import { camelizeObjFields } from "@/libs/camelize";

const client = axios.create({
  baseURL: "https://api.github.com",
});

export const makeRequest = ({
  url,
  method = "get",
  data = {},
  headers = {
    Accept: "application/vnd.github+json",
    // "Content-Type": "application/json",
  },
}) => {
  return client({ url, method, data, headers })
    .then((res) => camelizeObjFields(res.data))
    .catch((error) => error);
};
