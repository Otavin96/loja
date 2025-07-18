import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"]; // deixa o navegador definir corretamente
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

