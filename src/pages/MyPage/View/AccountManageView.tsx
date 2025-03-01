import '@styles/pages/MyPage/accountManageView.scss';
import useMyPageState from '../Hooks/useMyPageState.ts';
import ArrowDown from '@icon/icon-arrow-down.svg?react';
import ArrowUp from '@icon/icon-arrow-up.svg?react';
import ToggleON from '@icon/icon-toggle-on.svg?react';
import ToggleOFF from '@icon/icon-toggle-off.svg?react';

const AccountManageView = () => {
    const {
        accountManageVisible,
        onVisibleAccountManageClick,
        mailingServiceOn,
        onMailingServiceClick
    } = useMyPageState();

    return (
        <div id="account-manage" className="account-manage">
            <div className="account-manage-title">
                {accountManageVisible ?
                    <ArrowDown className="account-manage-title__icon" onClick={onVisibleAccountManageClick}/> :
                    <ArrowUp className="account-manage-title__icon" onClick={onVisibleAccountManageClick}/>}
                <div className="account-manage-title__text">계정 관리</div>
            </div>
            {accountManageVisible && (
                <div className="account-manage-box">
                    <div className="mailing-service-interruption">
                        <div className="mailing-service-interruption__text">메일링 서비스 일시 중단</div>
                        <div>
                            {mailingServiceOn ? (
                                <div className="mailing-service-interruption__toggle">ON
                                    <ToggleON onClick={onMailingServiceClick}/></div>) : (
                                <div className="mailing-service-interruption__toggle">OFF
                                    <ToggleOFF onClick={onMailingServiceClick}/></div>)}
                        </div>
                    </div>
                    <div className="delete-account">
                        <div className="delete-account__text">
                            <div className="delete-account__description1">데이터와 계정을 삭제하세요</div>
                            <div className="delete-account__description2">귀하의 데이터와 귀하의 계정과 관련된 모든 것을 영구적으로 삭제합니다.</div>
                        </div>
                        <button className="delete-account__button">계정 삭제</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountManageView;