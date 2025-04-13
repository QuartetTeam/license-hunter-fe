import CertificateCard from '../../../components/CertificateCard.tsx';
import searchCertStore from '../../../common/store/cert/certStore.ts';
import '@styles/pages/CertificateSearch/certCardListView.scss';

const CertCardListView = () => {
  const { searchCertData } = searchCertStore();

  return (
    <div className="cert-cardList-group">
      <CertificateCard data={searchCertData} />
    </div>
  );
};

export default CertCardListView;
