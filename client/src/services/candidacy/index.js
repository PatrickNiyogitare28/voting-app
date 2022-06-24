import axios from 'axios';
import { API_URL } from '../../config';

export const getAllCandidacy = () => {
    return axios.get(`${API_URL}/candidacy`,
      {headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }}
    )
    .then(response => {
        return response?.data;
    })
    .catch(error => {
       return error?.response?.data || error?.message;
    }
    )
}

export const addVote = (id) => {
    return axios.put(`${API_URL}/candidacy/${id}/vote`,
      {},
      {headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }}
    )
    .then(response => {
        return response?.data;
    }).catch(error => {
       return error?.response?.data || error?.message;
    }
    )
}