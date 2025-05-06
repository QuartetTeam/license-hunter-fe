import { useState } from 'react';
import Alert from '@component/Alert.tsx';
import ArrowUp from '@icon/icon-arrow-up.svg?react';
import ArrowDown from '@icon/icon-arrow-down.svg?react';
import ToggleON from '@icon/icon-toggle-on.svg?react';
import ToggleOFF from '@icon/icon-toggle-off.svg?react';
import { useChangeMailingStatus, useDeleteUserData } from '@feature/User/useUserService.ts';
import { IUserDataProps } from '@type/user.ts';
import {
  deleteUserAlertMessage,
  cancelDeleteUserMessage,
  confirmDeleteUserMessage,
} from '../Messages';
import '../style/accountManageView.scss';

const AccountManageView = ({ data }: IUserDataProps) => {
  const [accountManageVisible, setAccountManageVisible] = useState(true);
  const [deleteUserAlertVisible, setDeleteUserAlertVisible] = useState(false);
  const onVisibleAccountManageClick = () => {
    setAccountManageVisible(!accountManageVisible);
  };
  const onVisibleDeleteUserAlertClick = () => {
    setDeleteUserAlertVisible(!deleteUserAlertVisible);
  };

  const { mutate: changeMailingStatus } = useChangeMailingStatus();
  const { mutate: deleteUserData } = useDeleteUserData();

  return (
    <div id="account-manage" className="account-manage">
      <div className="account-manage-title">
        {accountManageVisible ? (
          <ArrowDown className="account-manage-title__icon" onClick={onVisibleAccountManageClick} />
        ) : (
          <ArrowUp className="account-manage-title__icon" onClick={onVisibleAccountManageClick} />
        )}
        <div className="account-manage-title__text">계정 관리</div>
      </div>
      {accountManageVisible && (
        <div className="account-manage-box">
          <div className="mailing-service-interruption">
            <div className="mailing-service-interruption__text">메일링 서비스 일시 중단</div>
            <div>
              {data?.status === 'ACTIVE' ? (
                <div className="mailing-service-interruption__toggle">
                  ON
                  <ToggleON data-cy="changeMailingStatus" onClick={() => changeMailingStatus()} />
                </div>
              ) : (
                <div className="mailing-service-interruption__toggle">
                  OFF
                  <ToggleOFF data-cy="changeMailingStatus" onClick={() => changeMailingStatus()} />
                </div>
              )}
            </div>
          </div>
          <div className="delete-account">
            <div className="delete-account__text">
              <div className="delete-account__description1">데이터와 계정을 삭제하세요</div>
              <div className="delete-account__description2">
                귀하의 데이터와 귀하의 계정과 관련된 모든 것을 영구적으로 삭제합니다.
              </div>
            </div>
            <button className="delete-account__button" onClick={onVisibleDeleteUserAlertClick}>
              계정 탈퇴
            </button>
            <Alert
              alertTitle={deleteUserAlertMessage.title}
              alertContent={deleteUserAlertMessage.content}
              alertVisible={deleteUserAlertVisible}
              onVisibleAlertClick={onVisibleDeleteUserAlertClick}
              alertConfirmMessage={confirmDeleteUserMessage.complete}
              alertCancelMessage={cancelDeleteUserMessage.cancel}
              clickEvent={() => deleteUserData()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManageView;
