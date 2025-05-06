import axios from 'axios';
import authStore from '../store/auth/authStore';

const accessTokenInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      if (config.url?.includes('/api/v1')) {
        const { accessToken } = authStore.getState();
        config.headers.Authorization = `Bearer ${accessToken}`;
        config.headers.accept = 'application/json';
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default accessTokenInterceptor;
