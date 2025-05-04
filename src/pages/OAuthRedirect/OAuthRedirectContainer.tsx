import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import authStore from '@store/auth/authStore';
import useAuthService from '@feature/Auth/useAuthService.ts';

const OAuthRedirectContainer = () => {
  const { loginService } = useAuthService();

  const navigate = useNavigate();
  const moveToMainPage = () => {
    window.scrollTo(0, 0);
    navigate(`/`);
  };
  const [searchParams] = useSearchParams();
  const accessTokenByURL = searchParams.get('accessToken');
  console.log(accessTokenByURL);
  const { accessToken, setAccessToken } = authStore();

  useEffect(() => {
    if (accessTokenByURL) {
      setAccessToken(accessTokenByURL || '');
      console.log(accessToken);
      loginService();
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
