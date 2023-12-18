import axios from "axios";

const productionOrigins = import.meta.env.VITE_PRODUCTION_ORIGIN;
const developmentOrigin = "http://localhost:8000/api";
const allowedOrgins =
  import.meta.env.VITE_NODE_ENV === "production"
    ? productionOrigins
    : developmentOrigin;

const axiosInstance = axios.create({
  baseURL: allowedOrgins,
  headers: {
    "Content-Type": "application/json",
    "auth-token": JSON.stringify(localStorage.getItem("auth-data"))
      ? JSON.stringify(localStorage.getItem("auth-data"))
      : null,
  },
});

export default axiosInstance;
