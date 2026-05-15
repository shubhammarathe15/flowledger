import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/auth`;

export const signup = async (data) => {
    return axios.post(`${API_URL}/signup`, data);
};

export const login = async (data) => {
    return axios.post(`${API_URL}/login`, data);
};

export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return !!getToken();
};