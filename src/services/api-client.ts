import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/repos/',
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = () => {
    return axiosInstance
      .get<T[]>(`${this.endpoint}/commits?per_page=100`)
      .then((res) => res.data);
  };

  get = (url: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${url}`)
      .then((res) => res.data);
  };
}

export default APIClient;
