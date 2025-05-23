import CertificateCard from '@component/CertificateCard.tsx';
import { useCertRecommend } from '@feature/Certification/useCertService.ts';
import { ICertData } from '@type/cert.ts';
import '../style/recommendCertView.scss';

const RecommendCertView = () => {
  const certRecommend = useCertRecommend();
  const recommendData: ICertData[] | undefined = certRecommend?.data;

  return (
    <>
      <div className="recommend-cert-view">
        <div className="recommend-cert">
          <div className="recommend-cert__title">
            <div className="recommend-cert__title-text">자격증 추천</div>
          </div>
          <div className="recommend-cert-card-group">
            <div className="recommend-cert-card">
              <CertificateCard data={recommendData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendCertView;
