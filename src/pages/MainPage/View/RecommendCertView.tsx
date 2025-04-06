import useCertService from '../../../features/Certification/useCertService.ts';
import recommendCertData from '../../../mocks/certification/recommendCertData.ts';
import CertificateCard from '../../../components/CertificateCard.tsx';
import ArrowLeft from '@icon/icon-arrow-left.svg?react';
import ArrowRight from '@icon/icon-arrow-right.svg?react';
import '@styles/pages/MainPage/recommendCertView.scss';

const RecommendCertView = () => {

    const { getCertCategoryData } = useCertService();
    console.log('getCertCategoryData: ', getCertCategoryData);

    return (
        <>
            <div className="recommend-cert-view">
                <div className="recommend-cert">
                    <div className="recommend-cert__title">
                        <div className="recommend-cert__title-text">자격증 추천</div>
                    </div>
                    <div className="recommend-cert-card-group">
                        <ArrowLeft className="arrow-icon"/>
                        <div className="recommend-cert-card">
                            <CertificateCard mockData={recommendCertData}/>
                        </div>
                        <ArrowRight className="arrow-icon"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecommendCertView;