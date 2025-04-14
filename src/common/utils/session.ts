import axios from 'axios';
import authStore from '../store/auth/authStore.ts';

const useIncludeAccessTokenAPI = () => {
  const accessToken = authStore((state) => state.accessToken);

  axios.interceptors.request.use(
    (config) => {
      if (config.url?.includes('/path/api/v2')) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.headers['accept'] = 'application/json';
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default useIncludeAccessTokenAPI;
