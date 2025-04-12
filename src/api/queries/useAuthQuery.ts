import { useMutation } from '@tanstack/react-query';
import { authQueryKey } from '../API/queryKeys.ts';
import { login, logout, moveToOAuth2, refresh } from '../API/API.ts';

const useMoveToAuth = (loginType: string) => {
    return useMutation({
        mutationKey: [authQueryKey.postMvToAuth],
        mutationFn: moveToOAuth2(loginType)
    });
};

const useLogin = () => {
    return useMutation({
        mutationKey: [],
        mutationFn: login
    });
};

const useRefresh = (refreshToken: object) => {
    return useMutation({
        mutationKey: [],
        mutationFn: refresh(refreshToken)
    });
};

const useLogout = () => {
    return useMutation({
        mutationKey: [],
        mutationFn: logout
    });
};

export { useMoveToAuth, useLogin, useRefresh, useLogout };