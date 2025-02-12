import '@styles/pages/Login/socialLoginView.scss';

const SocialLoginView = () => {
    return (
        <div className="socialLogin">
            <div className="socialLogin-title-group">
                <div className="socialLogin-title1">로그인/회원가입</div>
                <div className="socialLogin-title2">로그인을 하면 자격증을 추천해드릴게요!</div>
            </div>
            <div className="socialLogin-button-group">
                <div className="socialLogin-button">
                    <div className="socialLogin-text">네이버 로그인</div>
                </div>
                <div className="socialLogin-button">
                    <div className="socialLogin-text">카카오 로그인</div>
                </div>
                <div className="socialLogin-button">
                    <div className="socialLogin-text">구글 로그인</div>
                </div>
            </div>
        </div>
    );
};

export default SocialLoginView;