import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "47cb7015dcba47ccab84c29fca266c94"
  }
});

export default apiClient;