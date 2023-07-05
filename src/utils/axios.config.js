import axios from "axios";

export const privateApi = axios.create({
    baseURL: 'http://localhost:3000/'
});

privateApi.interceptors.request.use(
    async(req) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            req.headers.Authorization = 'Bearer ' + token;
        }
        return req;
    }
);