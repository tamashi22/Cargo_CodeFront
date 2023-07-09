import axios from "axios";

export const privateApi = axios.create({
  //   baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "https://cargocode-hackaton.onrender.com/",

  baseURL: "http://192.168.1.110:3000",

  // "http://192.168.1.113:3000/",
  // "http://172.20.10.4:3000",
  // "http://172.16.3.75:3000",
  //  "http://172.16.3.78:3000",

  // "https://cargocode-hackaton.onrender.com/",
  //   timeout: 500,
});

privateApi.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    req.headers.Authorization = "Bearer " + token;
  }
  return req;
});
