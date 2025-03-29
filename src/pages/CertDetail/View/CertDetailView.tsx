import Alert from '../../../components/Alert.tsx';
import { calenderAlertMessage, cancelButtonMessage, confirmButtonMessage, mailingAlertMessage } from '../Messages';
import CertSchedule from './CertDetailInfo/CertSchedule.tsx';
import CertQualifications from './CertDetailInfo/CertQualifications.tsx';
import CertContent from './CertDetailInfo/CertContent.tsx';
import useCertDetailState from '../useCertDetailState.ts';
import useMailingService from '../../../features/MailingService/useMailingService.ts';
import '@styles/pages/CertificateDetail/certDetailView.scss';


const CertDetailView = () => {
    const {
        mailingAlertVisible,
        calenderAlertVisible,
        onVisibleMailingAlertClick,
        onVisibleCalenderAlertClick
    } = useCertDetailState();

    const { addMailingsService } = useMailingService();

    return (
        <>
            <div className="cert-detail-view">
                <div className="cert-detail">
                    <div className="cert-detail-title">화학분석기사</div>
                    <div className="cert-detail-info">
                        <div className="cert-preview">
                            <div className="cert-preview-info">
                                <div className="cert-preview-info__image"></div>
                                <div className="cert-preview-info__description">
                                    화학 분석 지식 및 기술 전문 인력 양성을 위해 제정된 제도이다.
                                    자격증 취득 후 분석, 개발, 논문 및 보고서 등을 수행할 수 있다.
                                </div>
                            </div>
                            <div className="cert-btn-group">
                                <button className="cert-btn">접수 바로가기</button>
                                <button className="cert-btn"
                                        onClick={onVisibleMailingAlertClick}>메일링 서비스
                                </button>
                                <button className="cert-btn"
                                        onClick={onVisibleCalenderAlertClick}>캘린더 추가하기
                                </button>
                            </div>
                        </div>
                        <CertSchedule/>
                        <CertContent/>
                        <CertQualifications/>
                    </div>
                    <Alert alertTitle={mailingAlertMessage.title}
                           alertContent={mailingAlertMessage.content}
                           alertVisible={mailingAlertVisible}
                           onVisibleAlertClick={onVisibleMailingAlertClick}
                           alertConfirmMessage={confirmButtonMessage.subscribe}
                           alertCancelMessage={cancelButtonMessage.think}
                           addMailingsService={addMailingsService}/>
                    <Alert alertTitle={calenderAlertMessage.title}
                           alertContent={calenderAlertMessage.content}
                           alertVisible={calenderAlertVisible}
                           onVisibleAlertClick={onVisibleCalenderAlertClick}
                           alertConfirmMessage={confirmButtonMessage.add}
                           alertCancelMessage={cancelButtonMessage.think}/>
                </div>
            </div>
        </>
    );
};

export default CertDetailView;