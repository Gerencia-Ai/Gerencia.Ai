import axios from "axios";

const api = axios.create({
  baseURL: "https://gerencia-back-7ap3-dev.fl0.io/api/",
});

export default api;
