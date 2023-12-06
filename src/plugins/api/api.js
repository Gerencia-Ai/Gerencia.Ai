import axios from "axios";

const api = axios.create({
  baseURL: "https://gerencia-back-dev-kbzk.4.us-1.fl0.io/api/",
});

export default api;
