import { useEffect } from 'react';
import useAuthService from '@feature/Auth/useAuthService.ts';

const OAuthRedirectContainer = () => {
  const { loginService } = useAuthService();

  useEffect(() => {
    loginService();
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default OAuthRedirectContainer;
