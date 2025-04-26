import { useState } from 'react';
import CertificateCard from '@component/CertificateCard.tsx';
import { useMailingList, useDeleteUserMailing } from '@feature/MailingService/useMailingService.ts';
import ArrowDown from '@icon/icon-arrow-down.svg?react';
import ArrowUp from '@icon/icon-arrow-up.svg?react';
import ArrowLeft from '@icon/icon-arrow-left.svg?react';
import ArrowRight from '@icon/icon-arrow-right.svg?react';
import CheckboxChecked from '@icon/icon-checkbox-check.svg?react';
import CheckboxEmpty from '@icon/icon-checkbox-empty.svg?react';
import TrashIcon from '@icon/icon-trash.svg?react';
import mailingStore from '@store/mailing/mailingStore';
import { IMailingContent } from '@type/mailing.ts';
import '../style/mailingServiceView.scss';

const MailingServiceView = () => {
  const [mailingServiceVisible, setMailingServiceVisible] = useState(true);
  const [trashIconSelected, setTashIconSelected] = useState(false);
  const [page, setPage] = useState(0);
  const { checkArr, setCheckArr } = mailingStore();

  const onVisibleMailingServiceClick = () => {
    setMailingServiceVisible(!mailingServiceVisible);
  };
  const onTrashButtonClick = () => {
    setTashIconSelected(!trashIconSelected);
  };

  const mailing = useMailingList(page);
  const mailingData: IMailingContent[] | undefined = mailing?.data?.content;
  const totalPages: number = mailing?.data?.totalPages ?? 0;
  const prevPage = (page: number) => {
    const prev = Math.max(page - 1, 0);
    setPage(prev);
  };

  const nextPage = (page: number) => {
    const next = Math.min(page + 1, totalPages - 1);
    setPage(next);
  };
  const { mutate: deleteUserMailing } = useDeleteUserMailing(checkArr);
  const handleCheckedAll = () => {
    const checkAllArr: number[] = [];
    mailingData?.map((item) => checkAllArr.push(item.id));
    setCheckArr(checkAllArr);
  };
  const handleUncheckedAll = () => {
    setCheckArr([]);
  };

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
              {checkArr.length === mailingData?.length ? (
                <CheckboxChecked onClick={handleUncheckedAll} />
              ) : (
                <CheckboxEmpty onClick={handleCheckedAll} />
              )}
              <TrashIcon
                onClick={() => {
                  onTrashButtonClick();
                  deleteUserMailing();
                }}
              />
            </div>
            <div className="mailing-serviceList-group">
              <ArrowLeft
                className="mailing-serviceList-group__icon"
                onClick={() => prevPage(page)}
              />
              <div className="mailing-serviceList-group__card">
                <CertificateCard data={mailingData} trashIconSelected={trashIconSelected} />
              </div>
              <ArrowRight
                className="mailing-serviceList-group__icon"
                onClick={() => nextPage(page)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MailingServiceView;
