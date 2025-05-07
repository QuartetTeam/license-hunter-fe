import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { accessTokenStore, refreshTokenStore } from '@store/auth/authStore';
// import useAuthService from '@feature/Auth/useAuthService.ts';

const OAuthRedirectContainer = () => {
  // const { loginService } = useAuthService();
  const { setAccessToken } = accessTokenStore();
  const { setRefreshToken } = refreshTokenStore();

  const navigate = useNavigate();
  const moveToMainPage = () => {
    window.scrollTo(0, 0);
    navigate(`/`);
  };
  const [searchParams] = useSearchParams();
  const accessTokenByURL = searchParams.get('accessToken');
  const refreshTokenByURL = searchParams.get('refreshToken');

  useEffect(() => {
    if (accessTokenByURL) {
      setAccessToken(accessTokenByURL || '');
      setRefreshToken(refreshTokenByURL || '');
      // loginService();
      moveToMainPage();
    }
  }, []);

  return (
    <>
      <div>로그인 처리 중...</div>
    </>
  );
};

export default OAuthRedirectContainer;
