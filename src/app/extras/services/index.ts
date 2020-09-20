import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';

export const useHttp = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${environment.apiEndpont}`,
  });
  instance.interceptors.request.use(async (value): Promise<AxiosRequestConfig> => {
    value.headers.common['authorization'] = localStorage.getItem('crm-token');
    return Promise.resolve(value);
  });
  instance.interceptors.response.use((value): Promise<AxiosResponse> => {
    return Promise.resolve(value);
  });
  return instance;
};