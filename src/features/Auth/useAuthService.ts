import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLogin, useLogout, useMoveToAuth, useRefresh } from '../../api';
import authStore from '@store/auth/authStore.ts';
import IAuthType from '@store/auth/authType.ts';
import useHandleCookies from '../../common/utils/cookie.ts';
import { useMoveToPage } from '@hook/page.ts';

const useAuthService = () => {
  const [loginType, setLoginType] = useState<string>('');

  // 소셜 로그인 팝업 이동
  const moveToAuth = useMoveToAuth(loginType);
  const moveToAuthService = () => {
    try {
      moveToAuth.mutate();
    } catch (error) {
      console.error('소셜 로그인 화면 이동 실패 => ', error);
    }
  };

  // 로그인
  // 기존 cookie로 토큰을 넣어주는 방식이 동작하지 않아,
  // 현재 임시방편으로 쿼리 파라미터로 accessToken, refreshToken을 넘김 (04/22 정윤님과 협의)
  const [searchParams] = useSearchParams();
  const moveToPage = useMoveToPage();
  const setAccessToken = authStore((state: IAuthType) => state.setAccessToken);
  const clearAccessToken = authStore((state: IAuthType) => state.clearAccessToken);
  const login = useLogin();
  const loginService = async () => {
    try {
      await login.mutateAsync();
      const accessToken = searchParams.get('accessToken');
      console.log('accessToken', accessToken);
      // const refreshToken = searchParams.get('refreshToken');
      if (accessToken) {
        setAccessToken(accessToken);
        moveToPage('/');
      } else {
        clearAccessToken();
        moveToPage('/login');
      }
    } catch (error) {
      clearAccessToken();
      console.error('로그인 실패 => ', error);
    }
  };

  const { cookies, saveCookie, deleteCookie } = useHandleCookies();
  // Refresh Token 재발급
  const refreshToken = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies?.refreshToken}`,
    },
  };
  const refresh = useRefresh(refreshToken);
  const refreshService = async () => {
    try {
      const response = await refresh.mutateAsync();
      const {
        data: { code, accessToken },
      } = response;
      if (code === '204') {
        setAccessToken(accessToken);
        saveCookie('accessToken', accessToken);
      } else {
        clearAccessToken();
        deleteCookie('refreshToken');
      }
    } catch (error) {
      clearAccessToken();
      deleteCookie('refreshToken');
      console.error('Refresh Token 재발급 실패 => ', error);
    }
  };

  const logout = useLogout();
  const logoutService = async () => {
    try {
      const response = await logout.mutateAsync();
      const {
        data: { code },
      } = response;
      if (code === '204') {
        clearAccessToken();
        deleteCookie('refreshToken');
      } else {
        clearAccessToken();
        deleteCookie('refreshToken');
      }
    } catch (error) {
      clearAccessToken();
      deleteCookie('refreshToken');
      console.error('로그아웃 실패 => ', error);
    }
  };

  return {
    setLoginType,
    moveToAuthService,
    loginService,
    refreshService,
    logoutService,
  };
};

export default useAuthService;
