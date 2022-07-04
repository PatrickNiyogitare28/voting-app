import axios from 'axios';
import { API_URL } from '../../config';

export const login = async (data) => {
        return axios.post(`${API_URL}/auth/signin`, data)
        .then((res) => {
            return res.data;
        })
        .catch(e => {
            return e.response.data;
        })
}

export const getProfile = async (token) => {
    return axios.get(`${API_URL}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        return res.data;
    })
    .catch(e => {
        return e.response.data;
    })
}

export const register = async (data) => {
    return axios.post(`${API_URL}/auth/register`, data)
    .then((res) => {
        return res.data;
    })
    .catch(e => {
        return e.response.data;
    })
}