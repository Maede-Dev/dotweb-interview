import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
});

axiosInstance.interceptors.request.use(function (config) {
  const tokenValue = localStorage.getItem("TEST_TOKEN");

  if (tokenValue) {
    config.headers["Authorization"] = "Bearer " + tokenValue;
  }

  return config;
});
export default axiosInstance;
