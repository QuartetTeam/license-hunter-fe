import '@styles/pages/MyPage/accountManageView.scss';
import useMyPageState from '../CustomHook/useMyPageState.ts';

const AccountManageView = () => {
    const { accountManageVisible, onVisibleAccountManageClick } = useMyPageState();

    return (
        <div id="account-manage" className="account-manage">
            <div className="account-manage-title">
                {accountManageVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="account-manage-title__icon" onClick={onVisibleAccountManageClick}>
                        <path fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clipRule="evenodd"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="account-manage-title__icon" onClick={onVisibleAccountManageClick}>
                        <path fillRule="evenodd"
                              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                              clipRule="evenodd"/>
                    </svg>

                )}
                <div className="account-manage-title__text">계정 관리</div>
            </div>
            {accountManageVisible && (
                <div className="account-manage-box">
                    <div className="mailing-service-interruption">
                        <div className="mailing-service-interruption__text">메일링 서비스 일시 중단</div>
                        <div>ON</div>
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