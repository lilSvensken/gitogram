import axios from "axios";

const client = axios.create({
  baseURL: "https://api.landing.stage.wikiworks.io",
});

export const makeRequest = ({
  url,
  method = "get",
  data = {},
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}) => {
  return client({ url, method, data, headers })
    .then((res) => res.data)
    .catch((error) => error);
};
