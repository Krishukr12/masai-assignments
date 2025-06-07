import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    apikey: import.meta.env.VITE_OMDB_API_KEY,
  },
});
