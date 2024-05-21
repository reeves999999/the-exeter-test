import axios, { AxiosRequestConfig } from 'axios';

export interface Response<T> {
  sha: string;
  commit: string | null;
  previous: string | null;
  results: T[];
}

//reeves999999/the-exeter-test/commits
const axiosInstance = axios.create({
  baseURL: 'https://github.com/',
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
