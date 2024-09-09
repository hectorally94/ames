// api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  //  baseURL: 'https://172.105.33.252:8443/api',
  baseURL: 'http://localhost:8088/api',
  headers: {
    'Content-type': 'application/json',

  },
});

export default axiosInstance;
