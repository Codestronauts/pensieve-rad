import { UseMutationOptions } from '@tanstack/react-query';
import axios, { HttpStatusCode } from 'axios';

import { baseURL } from '@/config/constant';
import { ERROR_MSG } from '@/config/responseMessage';

export type Nullable<T> = T | null;

export interface ApiServiceErr {
  msg: string;
  status: HttpStatusCode;
}

export type MutOptions<Response, TVariables = unknown> = UseMutationOptions<
  Response,
  ApiServiceErr,
  TVariables,
  unknown
>;

const getApiError = (error: any, defaultMessage?: string) => {
  if (typeof error === 'string') {
    return error;
  }
  if (error?.msg) {
    return error.msg;
  }
  if (error?.response?.data) {
    if (typeof error.response.data === 'string') {
      return error.response.data;
    }
    if (typeof error.response.data.message === 'string') {
      return error.response.data.message;
    }
    if (typeof error.response.data.error === 'string') {
      return error.response.data.error;
    }
  }

  return defaultMessage || ERROR_MSG.SOMETHING_WRONG;
};

const axiosApi = axios.create({ baseURL });

axiosApi.interceptors.response.use(undefined, (error) =>
  Promise.reject({
    msg: getApiError(error),
    status: error.response.status || 500,
  })
);

axiosApi.interceptors.request.use((config: any) => {
  return config;
});

export { axiosApi, getApiError };
