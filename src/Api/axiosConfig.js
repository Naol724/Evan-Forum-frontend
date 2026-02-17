// baseURL: "http://localhost:5500/api",
  
// import from environment variable
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default axiosInstance;


