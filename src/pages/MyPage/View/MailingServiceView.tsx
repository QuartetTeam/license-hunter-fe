import CertificateCard from '../../components/CertificateCard.tsx';
import '@styles/pages/MyPage/mailingServiceView.scss';
import useMyPageState from '../Hooks/useMyPageState.ts';
import ArrowDown from '@icon/icon-arrow-down.svg?react';
import ArrowUp from '@icon/icon-arrow-up.svg?react';
// import CheckboxChecked from '@icon/icon-checkbox-check.svg?react';
import CheckboxEmpty from '@icon/icon-checkbox-empty.svg?react';
import TrashIcon from '@icon/icon-trash.svg?react';
import useMyPageService from '../useMyPageService.ts';
import mailingServiceData from '../MockData/mailingServiceData.ts';

const MailingServiceView = () => {
    const {
        mailingServiceVisible,
        trashIconSelected,
        onVisibleMailingServiceClick,
        onTrashButtonClick
    } = useMyPageState();

    const { getMailingData, deleteMailingsService } = useMyPageService();
    console.log('getMailingData: ', getMailingData);

    return (
        <div id="mailing-service" className="mailing-service">
            <div className="mailing-service-title">
                {mailingServiceVisible ?
                    <ArrowDown className="mailing-service-title__icon" onClick={onVisibleMailingServiceClick}/> :
                    <ArrowUp className="mailing-service-title__icon" onClick={onVisibleMailingServiceClick}/>
                }
                <div className="mailing-service-title__title">메일링 서비스 리스트</div>
            </div>
            {mailingServiceVisible && (
                <>
                    <div className="mailing-serviceList">
                        <div className="mailing-service-tools">
                            <CheckboxEmpty/>
                            {/*<CheckboxChecked/>*/}
                            <TrashIcon onClick={() => {
                                onTrashButtonClick();
                                deleteMailingsService();
                            }}/>
                        </div>
                        <div className="mailing-serviceList-group">
                            <CertificateCard mockData={mailingServiceData} trashIconSelected={trashIconSelected}/>
                        </div>
                    </div>
                </>
            )}
        </div>

    );
};

export default MailingServiceView;