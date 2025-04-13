import { useState } from 'react';
import CertificateCard from '@component/CertificateCard.tsx';
import useMailingService from '@feature/MailingService/useMailingService.ts';
import ArrowDown from '@icon/icon-arrow-down.svg?react';
import ArrowUp from '@icon/icon-arrow-up.svg?react';
// import CheckboxChecked from '@icon/icon-checkbox-check.svg?react';
import CheckboxEmpty from '@icon/icon-checkbox-empty.svg?react';
import TrashIcon from '@icon/icon-trash.svg?react';
import { IMailingContent } from '@type/mailing.ts';
import '../style/mailingServiceView.scss';

const MailingServiceView = () => {
  const [mailingServiceVisible, setMailingServiceVisible] = useState(true);
  const [trashIconSelected, setTashIconSelected] = useState(false);
  const onVisibleMailingServiceClick = () => {
    setMailingServiceVisible(!mailingServiceVisible);
  };
  const onTrashButtonClick = () => {
    setTashIconSelected(!trashIconSelected);
  };

  const { getMailingData, deleteMailingsService } = useMailingService();
  const mailingData: IMailingContent[] | undefined = getMailingData?.data?.content;

  return (
    <div id="mailing-service" className="mailing-service">
      <div className="mailing-service-title">
        {mailingServiceVisible ? (
          <ArrowDown
            className="mailing-service-title__icon"
            onClick={onVisibleMailingServiceClick}
          />
        ) : (
          <ArrowUp className="mailing-service-title__icon" onClick={onVisibleMailingServiceClick} />
        )}
        <div className="mailing-service-title__title">메일링 서비스 리스트</div>
      </div>
      {mailingServiceVisible && (
        <>
          <div className="mailing-serviceList">
            <div className="mailing-service-tools">
              <CheckboxEmpty />
              {/*<CheckboxChecked/>*/}
              <TrashIcon
                onClick={() => {
                  onTrashButtonClick();
                  deleteMailingsService();
                }}
              />
            </div>
            <div className="mailing-serviceList-group">
              <CertificateCard data={mailingData} trashIconSelected={trashIconSelected} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MailingServiceView;
