import { toast } from 'react-toastify';
import { useLogout, useRefresh } from '../../api';
import { accessTokenStore, refreshTokenStore } from '@store/auth/authStore.ts';
// import useHandleCookies from '../../common/utils/cookie.ts';
import { useMoveToPage } from '@hook/page.ts';
import { TOAST_MESSAGE } from '@constant/toastMessages.ts';
import { AxiosError } from 'axios';

const useAuthService = () => {
  const moveToPage = useMoveToPage();

  // 로그인 (04/27 정윤님)
  // 현재 소셜 로그인 기능은 백엔드 쿠기 통신 이슈 해결 중에 있어 정상적으로 동작하지 않음.
  // 백엔드 API 명세서를 참고하여 추후 테스트할 수 있도록 작업함.
  const { setAccessToken, clearAccessToken } = accessTokenStore();
  // const login = useLogin();
  // const loginService = async () => {
  //   try {
  //     const response = await login.mutateAsync();
  //     const { code } = response;
  //     if (code === 200) {
  //       const accessToken = response.headers['accesstoken'];
  //       setAccessToken(accessToken);
  //       moveToPage('/');
  //     } else {
  //       clearAccessToken();
  //       moveToPage('/login');
  //       toast.error(TOAST_MESSAGE.ERROR.LOGIN);
  //     }
  //   } catch (error: unknown) {
  //     clearAccessToken();
  //     const errorMessage = (error as AxiosError)?.response?.data?.message || TOAST_MESSAGE.ERROR.LOGIN;
  //     toast.error(errorMessage);
  //   }
  // };

  // const { cookies, saveCookie, deleteCookie } = useHandleCookies();
  // Refresh Token 재발급
  // const refreshToken = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${cookies?.refreshToken}`,
  //   },
  // };
  const { refreshToken, setRefreshToken, clearRefreshToken } = refreshTokenStore();
  const refreshTokenHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  const refresh = useRefresh(refreshTokenHeader);
  const refreshService = async () => {
    try {
      const response = await refresh.mutateAsync();
      const {
        data: { code },
      } = response;
      if (code === 204) {
        const accessToken = response.headers['accesstoken'];
        const refreshToken = response.headers['refreshtoken'];
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        // saveCookie('refreshToken', refreshToken);
      } else {
        clearAccessToken();
        clearRefreshToken();
        // deleteCookie('refreshToken');
        moveToPage('/login');
        toast.error(TOAST_MESSAGE.ERROR.REFRESH);
      }
    } catch (error: unknown) {
      clearAccessToken();
      clearRefreshToken();
      // deleteCookie('refreshToken');
      moveToPage('/login');
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.REFRESH;
      toast.error(errorMessage);
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
        clearRefreshToken();
        // deleteCookie('refreshToken');
      } else {
        clearAccessToken();
        clearRefreshToken();
        // deleteCookie('refreshToken');
        toast.error(TOAST_MESSAGE.ERROR.LOGOUT);
      }
    } catch (error: unknown) {
      clearAccessToken();
      clearRefreshToken();
      // deleteCookie('refreshToken');
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.LOGOUT;
      toast.error(errorMessage);
    }
  };

  return {
    // loginService,
    refreshService,
    logoutService,
  };
};

export default useAuthService;
