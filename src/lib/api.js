import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Adjust to your backend URL
  withCredentials: true, // Include cookies
});

export default api;
