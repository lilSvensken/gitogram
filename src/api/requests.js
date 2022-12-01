import axios from "axios";

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
    .then((res) => res.data)
    .catch((error) => error);
};
