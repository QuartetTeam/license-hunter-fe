import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Alert from '@component/Alert.tsx';
import {
  calenderAlertMessage,
  cancelButtonMessage,
  confirmButtonMessage,
  mailingAlertMessage,
} from '../Messages';
import CertSchedule from './CertDetailInfo/CertSchedule.tsx';
import CertQualifications from './CertDetailInfo/CertQualifications.tsx';
import CertContent from './CertDetailInfo/CertContent.tsx';
import { useCertDetail } from '@feature/Certification/useCertService.ts';
import useMailingService from '@feature/MailingService/useMailingService.ts';
import useCalendarService from '@feature/MyCalendar/useCalendarService.ts';
import { ICertDetailListDataTypes } from '@type/cert.ts';
import '../style/certDetailView.scss';

const CertDetailView = () => {
  const [mailingAlertVisible, setMailingAlertVisible] = useState(false);
  const [calenderAlertVisible, setCalenderAlertVisible] = useState(false);
  const onVisibleMailingAlertClick = () => {
    setMailingAlertVisible(!mailingAlertVisible);
  };
  const onVisibleCalenderAlertClick = () => {
    setCalenderAlertVisible(!calenderAlertVisible);
  };

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const certDetail = useCertDetail(id);
  const certDetailData: ICertDetailListDataTypes | undefined = certDetail?.data;
  const { addMailingsService } = useMailingService();
  const { addCalendarService } = useCalendarService();

  return (
    <>
      <div className="cert-detail-view">
        <div className="cert-detail">
          <div className="cert-detail-title">{certDetailData?.name}</div>
          <div className="cert-detail-info">
            <div className="cert-preview">
              <div className="cert-preview-info">
                <div className="cert-preview-info__image"></div>
                <div className="cert-preview-info__description">{certDetailData?.description}</div>
              </div>
              <div className="cert-btn-group">
                <button className="cert-btn">접수 바로가기</button>
                <button className="cert-btn" onClick={onVisibleMailingAlertClick}>
                  메일링 서비스
                </button>
                <button className="cert-btn" onClick={onVisibleCalenderAlertClick}>
                  캘린더 추가하기
                </button>
              </div>
            </div>
            <CertSchedule cert={certDetailData?.name} data={certDetailData?.schedules} />
            <CertContent cert={certDetailData?.name} data={certDetailData?.examDetails} />
            <CertQualifications cert={certDetailData?.name} data={certDetailData?.qualification} />
          </div>
          <Alert
            alertTitle={mailingAlertMessage.title}
            alertContent={mailingAlertMessage.content}
            alertVisible={mailingAlertVisible}
            onVisibleAlertClick={onVisibleMailingAlertClick}
            alertConfirmMessage={confirmButtonMessage.subscribe}
            alertCancelMessage={cancelButtonMessage.think}
            event={addMailingsService}
          />
          <Alert
            alertTitle={calenderAlertMessage.title}
            alertContent={calenderAlertMessage.content}
            alertVisible={calenderAlertVisible}
            onVisibleAlertClick={onVisibleCalenderAlertClick}
            alertConfirmMessage={confirmButtonMessage.add}
            alertCancelMessage={cancelButtonMessage.think}
            event={addCalendarService}
          />
        </div>
      </div>
    </>
  );
};

export default CertDetailView;
