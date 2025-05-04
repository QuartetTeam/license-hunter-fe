import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IAuthType from '@store/auth/authType.ts';
import useAuthService from '@feature/Auth/useAuthService.ts';

const OAuthRedirectContainer = () => {
  const { loginService } = useAuthService();

  // const navigate = useNavigate();
  // const moveToMainPage = () => {
  //   window.scrollTo(0, 0);
  //   navigate(`/`);
  // };
  // const searchParams = new URLSearchParams(location.search);
  // const accessTokenByURL = searchParams.get('accessToken');
  // console.log(accessTokenByURL);
  // const { accessToken, setAccessToken } = authStore();

  useEffect(() => {
    // setAccessToken(accessTokenByURL || '');
    // console.log(accessToken);
    // setAccessToken(accessToken || '');
    loginService();
    // moveToMainPage();
  }, []);

  return (
    <>
      <div>로그인 처리 중...</div>
    </>
  );
};

export default OAuthRedirectContainer;
