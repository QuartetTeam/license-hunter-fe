import { useState, useEffect } from 'react';
import ArrowDown from '@icon/icon-arrow-down.svg?react';
import ArrowUp from '@icon/icon-arrow-up.svg?react';
import FieldButton from '@component/FieldButton.tsx';
import CheckFavoriteField from './CheckFavoriteField.tsx';
import { cancelInterestMessage, confirmInterestMessage } from '../Messages/buttonMessages.ts';
import { useChangeUserNick } from '@feature/User/useUserService.ts';
import { IUserDataProps } from '@type/user.ts';
import '../style/myProfileView.scss';

const MyProfileView = ({ data }: IUserDataProps) => {
  const [myProfileVisible, setMyProfileVisible] = useState(true);
  const [favoriteFieldVisible, setFavoriteFieldVisible] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const onVisibleMyProfileClick = () => {
    setMyProfileVisible(!myProfileVisible);
  };
  const onVisibleFavoriteFieldClick = () => {
    setFavoriteFieldVisible(!favoriteFieldVisible);
  };

  const { mutate: changeUserNick } = useChangeUserNick(nickname);
  // const { mutate: changeUserEmail } = useChangeUserEmail(email);

  useEffect(() => {
    if (data) {
      setNickname(data.nickname || '');
      setEmail(data.email || '');
    }
  }, [data]);

  return (
    <>
      <div id="my-profile" className="my-profile">
        <div className="my-profile-title">
          {myProfileVisible ? (
            <ArrowDown className="my-profile-title__icon" onClick={onVisibleMyProfileClick} />
          ) : (
            <ArrowUp className="my-profile-title__icon" onClick={onVisibleMyProfileClick} />
          )}
          <div className="my-profile-title__text">내 프로필</div>
        </div>
        {myProfileVisible && (
          <div className="my-profile-box">
            <div className="my-profile-image-box">
              <div className="my-profile-image-box__image"></div>
              <button className="my-profile-image-box__button">사진 변경</button>
            </div>
            <div className="my-profile-info">
              <div className="my-profile-info-box">
                <div className="my-profile-info-box__title">사용자 이름</div>
                <div className="my-profile-info-box__group">
                  <input
                    className="my-profile-info-box__group__input"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <button
                    data-cy="changeUserNick"
                    className="my-profile-info-box__group__button"
                    onClick={() => changeUserNick()}
                  >
                    저장
                  </button>
                </div>
              </div>
              <div className="my-profile-info-box">
                <div className="my-profile-info-box__title">이메일</div>
                <div className="my-profile-info-box__group">
                  <input
                    className="my-profile-info-box__group__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* <button
                    data-cy="changeUserEmail"
                    className="my-profile-info-box__group__button"
                    onClick={() => changeUserEmail()}
                    disabled
                  >
                    저장
                  </button> */}
                </div>
              </div>
              <div className="my-profile-interest-field">
                <div className="my-profile-interest-field__group">
                  <div className="my-profile-interest-field__group-title">
                    관심 분야 (Max 3 선택해 주세요)
                  </div>
                  <button
                    className="my-profile-interest-field__group-button"
                    onClick={() => {
                      onVisibleFavoriteFieldClick();
                    }}
                  >
                    수정
                  </button>
                </div>
                <div className="my-profile-interest-field__button-group">
                  {data?.interests.map((item, index) => (
                    <FieldButton key={index} fieldName={item} />
                  ))}
                </div>
              </div>
              <div className="my-profile-interest-save"></div>
            </div>
          </div>
        )}
      </div>
      <CheckFavoriteField
        favoriteFieldVisible={favoriteFieldVisible}
        onVisibleFavoriteFieldClick={onVisibleFavoriteFieldClick}
        alertConfirmMessage={confirmInterestMessage.complete}
        alertCancelMessage={cancelInterestMessage.cancel}
      />
    </>
  );
};

export default MyProfileView;
