import { toast } from 'react-toastify';
import { useLogin, useLogout, useRefresh } from '../../api';
import authStore from '@store/auth/authStore.ts';
import IAuthType from '@store/auth/authType.ts';
import useHandleCookies from '../../common/utils/cookie.ts';
import { useMoveToPage } from '@hook/page.ts';
import { TOAST_MESSAGE } from '@constant/toastMessages.ts';

const useAuthService = () => {
  const moveToPage = useMoveToPage();

  // 로그인 (04/27 정윤님)
  // 현재 소셜 로그인 기능은 백엔드 이슈 해결 중에 있어 정상적으로 동작하지 않음.
  // 백엔드 API 명세서를 참고하여 추후 테스트할 수 있도록 작업함.
  const setAccessToken = authStore((state: IAuthType) => state.setAccessToken);
  const clearAccessToken = authStore((state: IAuthType) => state.clearAccessToken);
  const login = useLogin();
  const loginService = async () => {
    try {
      const accessToken = await login.mutateAsync();
      if (accessToken) {
        setAccessToken(accessToken);
        moveToPage('/');
      } else {
        clearAccessToken();
        moveToPage('/login');
        toast.error(TOAST_MESSAGE.ERROR.LOGIN);
      }
    } catch {
      clearAccessToken();
      toast.error(TOAST_MESSAGE.ERROR.LOGIN);
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
      if (code === 204) {
        setAccessToken(accessToken);
        saveCookie('accessToken', accessToken);
      } else {
        clearAccessToken();
        deleteCookie('refreshToken');
        moveToPage('/login');
        toast.error(TOAST_MESSAGE.ERROR.REFRESH);
      }
    } catch {
      clearAccessToken();
      deleteCookie('refreshToken');
      moveToPage('/login');
      toast.error(TOAST_MESSAGE.ERROR.REFRESH);
    }
  };

  const logout = useLogout();
  const logoutService = async () => {
    try {
      const response = await logout.mutateAsync();
      const {
        data: { code },
      } = response;
      if (code === 204) {
        clearAccessToken();
        deleteCookie('refreshToken');
      } else {
        clearAccessToken();
        deleteCookie('refreshToken');
        toast.error(TOAST_MESSAGE.ERROR.LOGOUT);
      }
    } catch {
      clearAccessToken();
      deleteCookie('refreshToken');
      toast.error(TOAST_MESSAGE.ERROR.LOGOUT);
    }
  };

  return {
    loginService,
    refreshService,
    logoutService,
  };
};

export default useAuthService;
