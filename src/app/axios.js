import axios from "axios";
import { refreshToken } from "../api/auth";
import { getToken, getRefreshToken } from "./token";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      const refresh_token = getRefreshToken();
      await refreshToken(refresh_token);
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosApiInstance;
