import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // 'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

export default api;
