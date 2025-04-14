import '../style/socialLoginView.scss';
import useAuthService from '@feature/Auth/useAuthService.ts';

const SocialLoginView = () => {
  const { setLoginType, moveToAuthService } = useAuthService();

  const login = (snsType: string) => {
    setLoginType(snsType);
    moveToAuthService();
  };

  return (
    <div className="socialLogin">
      <div className="socialLogin-title-group">
        <div className="socialLogin-title1">로그인/회원가입</div>
        <div className="socialLogin-title2">로그인을 하면 자격증을 추천해드릴게요!</div>
      </div>
      <div className="socialLogin-button-group">
        <div className="socialLogin-button">
          <div className="socialLogin-text" onClick={() => login('naver')}>
            네이버 로그인
          </div>
        </div>
        <div className="socialLogin-button">
          <div className="socialLogin-text" onClick={() => login('kakao')}>
            카카오 로그인
          </div>
        </div>
        <div className="socialLogin-button">
          <div className="socialLogin-text" onClick={() => login('google')}>
            구글 로그인
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLoginView;
