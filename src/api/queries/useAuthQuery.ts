import { useMutation } from '@tanstack/react-query';
import { authQueryKey } from '../API/queryKeys.ts';
import { login, logout, refresh } from '../API/API.ts';

const useLogin = () => {
  return useMutation({
    mutationKey: [authQueryKey.postLogin],
    mutationFn: login,
  });
};

const useRefresh = (refreshToken: object) => {
  return useMutation({
    mutationKey: [authQueryKey.postRefresh],
    mutationFn: refresh(refreshToken),
  });
};

const useLogout = () => {
  return useMutation({
    mutationKey: [authQueryKey.postLogout],
    mutationFn: logout,
  });
};

export { useLogin, useRefresh, useLogout };
