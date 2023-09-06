import axios from "axios";

const api = axios.create({
  baseURL: "https://gerenciaback-iy0h-dev.fl0.io/api/",
});

export default api;
