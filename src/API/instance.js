import axios from "axios";

export const blogAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const userAPI = axios.create({
  baseURL: "https://randomuser.me/api/"
});
