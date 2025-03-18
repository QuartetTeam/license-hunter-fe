import Alert from '../../components/Alert.tsx';
import { calenderAlertMessage, cancelButtonMessage, confirmButtonMessage, mailingAlertMessage } from '../Messages';
import CertificateSchedule from './CertificateDetailInfo/CertificateSchedule.tsx';
import CertificateQualifications from './CertificateDetailInfo/CertificateQualifications.tsx';
import CertificateContent from './CertificateDetailInfo/CertificateContent.tsx';
import useCertificateDetailState from '../Hooks/useCertificateDetailState.ts';
import '@styles/pages/CertificateDetail/certificateDetailView.scss';

const CertificateDetailView = () => {
    const {
        mailingAlertVisible,
        calenderAlertVisible,
        onVisibleMailingAlertClick,
        onVisibleCalenderAlertClick
    } = useCertificateDetailState();

    return (
        <>
            <div className="certificate-detail-view">
                <div className="certificate-detail">
                    <div className="certificate-detail-title">화학분석기사</div>
                    <div className="certificate-detail-info">
                        <div className="certificate-preview">
                            <div className="certificate-preview-info">
                                <div className="certificate-preview-info__image"></div>
                                <div className="certificate-preview-info__description">
                                    화학 분석 지식 및 기술 전문 인력 양성을 위해 제정된 제도이다.
                                    자격증 취득 후 분석, 개발, 논문 및 보고서 등을 수행할 수 있다.
                                </div>
                            </div>
                            <div className="certificate-button-group">
                                <button className="certificate-button">접수 바로가기</button>
                                <button className="certificate-button" onClick={onVisibleMailingAlertClick}>메일링 서비스
                                </button>
                                <button className="certificate-button" onClick={onVisibleCalenderAlertClick}>캘린더 추가하기
                                </button>
                            </div>
                        </div>
                        <CertificateSchedule/>
                        <CertificateContent/>
                        <CertificateQualifications/>
                    </div>
                    <Alert alertTitle={mailingAlertMessage.title} alertContent={mailingAlertMessage.content}
                           alertVisible={mailingAlertVisible} onVisibleAlertClick={onVisibleMailingAlertClick}
                           alertConfirmMessage={confirmButtonMessage.subscribe}
                           alertCancelMessage={cancelButtonMessage.think}/>
                    <Alert alertTitle={calenderAlertMessage.title} alertContent={calenderAlertMessage.content}
                           alertVisible={calenderAlertVisible} onVisibleAlertClick={onVisibleCalenderAlertClick}
                           alertConfirmMessage={confirmButtonMessage.add}
                           alertCancelMessage={cancelButtonMessage.think}/>
                </div>
            </div>
        </>
    );
};

export default CertificateDetailView;