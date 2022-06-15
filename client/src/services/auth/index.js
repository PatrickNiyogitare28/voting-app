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