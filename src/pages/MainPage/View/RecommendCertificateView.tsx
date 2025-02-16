import '@styles/pages/MainPage/recommendCertificateView.scss';
import CertificateCard from '../../components/CertificateCard.tsx';
import recommendCertificateCardData from '../MockData/recommendCertificateCardData.ts';

const RecommendCertificateView = () => {
    return (
        <>
            <div className="recommend-certificate-box">
                <div className="recommend-certificate-title">
                    <div className="recommend-certificate-title-text">자격증 추천</div>
                </div>
                <div className="recommend-certificate-card-group">
                    <div className="recommend-certificate-card">
                        <CertificateCard mockData={recommendCertificateCardData}/>
                    </div>
                </div>
                <div className="three-dot-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="three-dot-icon">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                    </svg>
                </div>
            </div>

        </>
    );
};

export default RecommendCertificateView;