import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import imgAxiosInstance from './imgAxiosInstance';

const axiosBaseQuery =(): BaseQueryFn<AxiosRequestConfig, unknown, AxiosError> =>
  async ({ url, method, data, params }) => {
    try {
      const response = await imgAxiosInstance ({
        url,
        method,
        data,
        params,
      });
      return { data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { error: error as AxiosError };
      }
      // Handle non-Axios errors or unknown errors
      return { error: new AxiosError('An unknown error occurred') };
    }
  };

export const imgApiServices = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: 'imgapiService',
});

export default imgApiServices;
