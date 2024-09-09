import axios from 'axios';
 
const imgAxiosInstance = axios.create({
  
   //baseURL: 'https://172.105.33.252:8443/api',
  baseURL: 'http://localhost:8088/api',

  headers: {
    'Content-Type': 'multipart/form-data', // Make sure to set appropriate Content-Type for FormData
  },
 });

export default imgAxiosInstance;
