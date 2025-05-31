import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

// Interceptor para incluir o token em TODAS as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
