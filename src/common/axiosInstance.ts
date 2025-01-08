// api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://amues.org/api',  // Use the secure HTTPS endpoint
//  baseURL: 'http://localhost:8088/api',
 // baseURL: 'http://172.105.33.252:8088/api',

  headers: {
    'Content-type': 'application/json',

  },
});

export default axiosInstance;
