import axios from "axios";

export const privateApi = axios.create({
    //   baseURL: process.env.REACT_APP_BASE_URL,
    // baseURL: "https://cargocode-hackaton.onrender.com/",
    baseURL: "http://localhost:3000/",
    //   timeout: 500,
});

privateApi.interceptors.request.use(async(req) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        req.headers.Authorization = "Bearer " + token;
    }
    return req;
});