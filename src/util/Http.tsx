import axios, { AxiosError, AxiosRequestConfig } from "axios";

// create an axios instance
// this instance will be used throughout the app

const options = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
};

const Http = axios.create(options);

const mode = import.meta.env.MODE;
console.log(mode);
if (mode === "development") {
  Http.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      console.log(config);
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
    { synchronous: true }
  );
}

export default Http;
