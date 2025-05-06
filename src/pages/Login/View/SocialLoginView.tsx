// import Naver from '@icon/SNS/icon-naver.svg?react';
import Kakao from '@icon/SNS/icon-kakao.svg?react';
import Google from '@icon/SNS/icon-google.svg?react';
import '../style/socialLoginView.scss';

const SocialLoginView = () => {
  const login = (loginType: string) => {
    window.location.href = `https://api.sudomenda.site/oauth2/authorization/${loginType}`;
  };

  return (
    <div className="socialLogin">
      <div className="socialLogin-title-group">
        <div className="socialLogin-title1">로그인/회원가입</div>
        <div className="socialLogin-title2">로그인을 하면 자격증을 추천해드릴게요!</div>
      </div>
      <div className="socialLogin-button-group">
        {/* <div className="socialLogin-button" onClick={() => login('naver')}>
          <div className="socialLogin-text">
            <Naver />
            네이버 로그인
          </div>
        </div> */}
        <div className="socialLogin-button" onClick={() => login('kakao')}>
          <div className="socialLogin-text">
            <Kakao />
            카카오 로그인
          </div>
        </div>
        <div className="socialLogin-button">
          <div className="socialLogin-text" onClick={() => login('google')}>
            <Google />
            구글 로그인
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLoginView;
