import axios, { AxiosError, AxiosRequestConfig } from "axios";

// create an axios instance
// this instance will be used throughout the app

const options = {
  baseURL: "https://newsapi.org/v2/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  proxy: {
    protocol: "http",
    host: "localhost",
    port: 5173,
  },
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
