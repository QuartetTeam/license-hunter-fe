import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Alert from '@component/Alert.tsx';
import {
  calendarAlertMessage,
  cancelButtonMessage,
  confirmButtonMessage,
  mailingAlertMessage,
} from '../Messages';
import CertSchedule from './CertDetailInfo/CertSchedule.tsx';
import CertQualifications from './CertDetailInfo/CertQualifications.tsx';
import CertContent from './CertDetailInfo/CertContent.tsx';
import { useCertDetail } from '@feature/Certification/useCertService.ts';
import { useAddUserMailing } from '@feature/MailingService/useMailingService.ts';
import { useAddUserCalendar } from '@feature/MyCalendar/useCalendarService.ts';
import { ICertDetailListDataTypes } from '@type/cert.ts';
import QNetImage from '@image/QNet.png';
import '../style/certDetailView.scss';

const CertDetailView = () => {
  const [mailingAlertVisible, setMailingAlertVisible] = useState(false);
  const [calendarAlertVisible, setCalendarAlertVisible] = useState(false);
  const onVisibleMailingAlertClick = () => {
    setMailingAlertVisible(!mailingAlertVisible);
  };
  const onVisibleCalendarAlertClick = () => {
    setCalendarAlertVisible(!calendarAlertVisible);
  };

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const certDetail = useCertDetail(id);
  const certDetailData: ICertDetailListDataTypes | undefined = certDetail?.data;

  const { mutate: addUserMailing } = useAddUserMailing(certDetailData?.id ?? 0);
  const { mutate: addUserCalendar } = useAddUserCalendar(certDetailData?.id ?? 0);

  return (
    <>
      <div className="cert-detail-view">
        <div className="cert-detail">
          <div className="cert-detail-title">{certDetailData?.name}</div>
          <div className="cert-detail-info">
            <div className="cert-preview">
              <div className="cert-preview-info">
                <div className="cert-preview-info__image">
                  <img src={QNetImage} alt="자격증 이미지" />
                </div>
                <div className="cert-preview-info__description">{certDetailData?.description}</div>
              </div>
              <div className="cert-btn-group">
                <a className="cert-btn" href={certDetailData?.websiteUrl}>
                  접수 바로가기
                </a>
                <button className="cert-btn" onClick={onVisibleMailingAlertClick}>
                  메일링 서비스 구독
                </button>
                <button className="cert-btn" onClick={onVisibleCalendarAlertClick}>
                  캘린더 추가
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
            clickEvent={() => addUserMailing()}
          />
          <Alert
            alertTitle={calendarAlertMessage.title}
            alertContent={calendarAlertMessage.content}
            alertVisible={calendarAlertVisible}
            onVisibleAlertClick={onVisibleCalendarAlertClick}
            alertConfirmMessage={confirmButtonMessage.add}
            alertCancelMessage={cancelButtonMessage.think}
            clickEvent={() => addUserCalendar()}
          />
        </div>
      </div>
    </>
  );
};

export default CertDetailView;
