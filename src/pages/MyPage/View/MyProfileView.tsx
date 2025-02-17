import '@styles/pages/MyPage/myProfileView.scss';
import useMyPageState from '../CustomHook/useMyPageState.ts';

const MyProfileView = () => {
    const { myProfileVisible, onVisibleMyProfileClick } = useMyPageState();

    return (
        <div id="my-profile" className="my-profile">
            <div className="my-profile-title">
                {myProfileVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="my-profile-title__icon" onClick={onVisibleMyProfileClick}>
                        <path fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clipRule="evenodd"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="my-profile-title__icon" onClick={onVisibleMyProfileClick}>
                        <path fillRule="evenodd"
                              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                              clipRule="evenodd"/>
                    </svg>

                )}
                <div className="my-profile-title__text">내 프로필</div>
            </div>
            {myProfileVisible && (
                <div className="my-profile-image">
                    <div className="my-profile-image-box">
                        <div className="my-profile-image-box__image"></div>
                        <button className="my-profile-image-box__button">사진 변경</button>
                    </div>
                    <div className="my-profile-info">
                        <div className="my-profile-info-box">
                            <div className="my-profile-info-box__title">선호하는 이름</div>
                            <input className="my-profile-info-box__input"/>
                        </div>
                        <div className="my-profile-info-box">
                            <div className="my-profile-info-box__title">사용자 이름</div>
                            <input className="my-profile-info-box__input"/>
                        </div>
                        <div className="my-profile-interest-field">
                            <div>관심 분야 최대 3개 선택해주세요</div>
                            <div className="my-profile-interest-field__button-group">
                                <div className="my-profile-interest-field__button">비지니스</div>
                                <div className="my-profile-interest-field__button">IT·엔지니어링</div>
                                <div className="my-profile-interest-field__button">GenAI</div>
                            </div>
                        </div>
                        <div className="my-profile-interest-save">
                            <button className="my-profile-interest-save__button">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfileView;