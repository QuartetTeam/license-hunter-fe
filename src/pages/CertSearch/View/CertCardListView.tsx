import CertificateCard from '@component/CertificateCard.tsx';
import searchCertStore from '@store/cert/certStore.ts';
import '../style/certCardListView.scss';

const CertCardListView = () => {
  const { searchCertData } = searchCertStore();

  return (
    <div className="cert-cardList-group">
      <CertificateCard data={searchCertData} />
    </div>
  );
};

export default CertCardListView;
