import axios from 'axios';

export const api = axios.create({
  baseURL: "chirple-api.onrender.com",
  withCredentials: true,
});
