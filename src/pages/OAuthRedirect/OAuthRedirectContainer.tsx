import { useEffect } from 'react';
import useAuthService from '@feature/Auth/useAuthService.ts';

const OAuthRedirectPage = () => {
  const { loginService } = useAuthService();

  useEffect(() => {
    loginService();
  }, []);

  return <div>로그인 처리</div>;
};

export default OAuthRedirectPage;
