import axios from "axios";

const getHeader = () => {
  const token = localStorage.getItem("auth-data")
    ? JSON.parse(localStorage.getItem("auth-data"))
    : null;
  console.log(token);
};

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
    "auth-token": getHeader(),
  },
});

export default axiosInstance;
