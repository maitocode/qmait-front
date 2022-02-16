import axios from "axios";
const API_URL = "http://localhost:7071/api/login";

export const login = (username, password) => {
    return axios
        .post(API_URL + "signin", { username, password })
        .then((response) => {
            if (response.data.accesstoken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

export const logout = () => {
    localStorage.removeItem("user");
}

export const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    });
}
