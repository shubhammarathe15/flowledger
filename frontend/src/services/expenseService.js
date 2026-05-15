import axios from "axios";
import { getToken } from "../auth/AuthService";

const API_URL = "http://localhost:8080/api/expenses";

const authHeaders = () => ({
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});

export const getExpenses = async () => {
    return axios.get(API_URL, authHeaders());
};

export const addExpense = async (expense) => {
    return axios.post(API_URL, expense, authHeaders());
};

export const updateExpense = async (id, expense) => {
    return axios.put(`${API_URL}/${id}`, expense, authHeaders());
};

export const deleteExpense = async (id) => {
    return axios.delete(`${API_URL}/${id}`, authHeaders());
};
