import CertificateCard from '../../../components/CertificateCard.tsx';
import useCertService from '../../../features/Certification/useCertService.ts';
import ArrowLeft from '@icon/icon-arrow-left.svg?react';
import ArrowRight from '@icon/icon-arrow-right.svg?react';
import { ICertData } from '../../../common/types/certTypes.ts';
import '@styles/pages/MainPage/recommendCertView.scss';

const RecommendCertView = () => {
  const { getCertRecommendData } = useCertService();
  const recommendData: ICertData[] | undefined = getCertRecommendData?.data;

  return (
    <>
      <div className="recommend-cert-view">
        <div className="recommend-cert">
          <div className="recommend-cert__title">
            <div className="recommend-cert__title-text">자격증 추천</div>
          </div>
          <div className="recommend-cert-card-group">
            <ArrowLeft className="arrow-icon" />
            <div className="recommend-cert-card">
              <CertificateCard data={recommendData} />
            </div>
            <ArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendCertView;
