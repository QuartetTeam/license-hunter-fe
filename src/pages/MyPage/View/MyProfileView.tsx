import '@styles/pages/MyPage/myProfileView.scss';
import useMyPageState from '../useMyPageState.ts';
import ArrowDown from '@icon/icon-arrow-down.svg?react';
import ArrowUp from '@icon/icon-arrow-up.svg?react';
import FieldButton from '../../../components/FieldButton.tsx';
import CheckFavoriteField from '../../../components/CheckFavoriteField.tsx';
import { cancelButtonMessage, confirmButtonMessage } from '../Messages/buttonMessages.ts';

const MyProfileView = () => {
    const {
        myProfileVisible,
        favoriteFieldVisible,
        onVisibleMyProfileClick,
        onVisibleFavoriteFieldClick
    } = useMyPageState();

    return (
        <>
            <div id="my-profile" className="my-profile">
                <div className="my-profile-title">
                    {myProfileVisible ?
                        <ArrowDown className="my-profile-title__icon"
                                   onClick={onVisibleMyProfileClick}/> :
                        <ArrowUp className="my-profile-title__icon"
                                 onClick={onVisibleMyProfileClick}/>}
                    <div className="my-profile-title__text">내 프로필</div>
                </div>
                {myProfileVisible && (
                    <div className="my-profile-box">
                        <div className="my-profile-image-box">
                            <div className="my-profile-image-box__image"></div>
                            <button className="my-profile-image-box__button">사진 변경
                            </button>
                        </div>
                        <div className="my-profile-info">
                            <div className="my-profile-info-box">
                                <div className="my-profile-info-box__title">사용자 이름</div>
                                <div className="my-profile-info-box__group">
                                    <input className="my-profile-info-box__group__input"/>
                                    <button
                                        className="my-profile-info-box__group__button">저장
                                    </button>
                                </div>
                            </div>
                            <div className="my-profile-info-box">
                                <div className="my-profile-info-box__title">이메일</div>
                                <div className="my-profile-info-box__group">
                                    <input className="my-profile-info-box__group__input"/>
                                    <button
                                        className="my-profile-info-box__group__button">저장
                                    </button>
                                </div>
                            </div>
                            <div className="my-profile-interest-field">
                                <div className="my-profile-interest-field__title">관심 분야
                                    (Max 3 선택해 주세요)
                                </div>
                                <div className="my-profile-interest-field__button-group">
                                    <FieldButton fieldName="보건·의료"/>
                                    <FieldButton fieldName="경영·회계·사무"/>
                                    <FieldButton fieldName="문화·예술·디자인·방송"/>
                                </div>
                            </div>
                            <div className="my-profile-interest-save">
                                <button className="my-profile-interest-save__button"
                                        onClick={onVisibleFavoriteFieldClick}>수정
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <CheckFavoriteField favoriteFieldVisible={favoriteFieldVisible}
                                onVisibleFavoriteFieldClick={onVisibleFavoriteFieldClick}
                                alertConfirmMessage={confirmButtonMessage.complete}
                                alertCancelMessage={cancelButtonMessage.cancel}/>
        </>
    );
};

export default MyProfileView;