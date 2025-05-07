import axios from 'axios';
import authStore from '@store/auth/authStore.ts';
import useAuthService from '@feature/Auth/useAuthService';

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

const useRefreshTokenInterceptor = () => {
  const { refreshService } = useAuthService();
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 && !error.config._retry) {
        error.config._retry = true;
        refreshService();
      }
      return Promise.reject(error);
    }
  );
};

export { accessTokenInterceptor, useRefreshTokenInterceptor };
