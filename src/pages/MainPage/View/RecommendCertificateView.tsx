import '@styles/pages/MainPage/recommendCertificateView.scss';
import CertificateCard from '../../components/CertificateCard.tsx';
import recommendCertificateCardData from '../MockData/recommendCertificateCardData.ts';

const RecommendCertificateView = () => {
    return (
        <>
            <div className="recommend-certificate-view">
                <div className="recommend-certificate">
                    <div className="recommend-certificate__title">
                        <div className="recommend-certificate__title-text">자격증 추천</div>
                    </div>
                    <div className="recommend-certificate-card-group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="arrow-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                        <div className="recommend-certificate-card">
                            <CertificateCard mockData={recommendCertificateCardData}/>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="arrow-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>

                    </div>
                    <div className="three-dot-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="three-dot-icon">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecommendCertificateView;