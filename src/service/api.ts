import axios from "axios";
const api = axios.create({
    baseURL: "https://api.jsonbin.io/b/",
});

api.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        if (error?.response?.status === 401) {
            window.location.replace("/");
            window.localStorage.clear();
        } else {
            return error.response;
        }
    }
);

export default api;