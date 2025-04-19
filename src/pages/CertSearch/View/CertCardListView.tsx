import { useSearchParams } from 'react-router-dom';
import CertificateCard from '@component/CertificateCard.tsx';
import { useCertList, useCertSearch } from '@feature/Certification/useCertService.ts';
import '../style/certCardListView.scss';

const CertCardListView = () => {
  const [searchParams] = useSearchParams();
  const categoryId = Number(
    searchParams.get('subCategoryId')
      ? searchParams.get('subCategoryId')
      : searchParams.get('categoryId')
  );
  const search = searchParams.get('search') ?? '';

  const cert = useCertList(categoryId);
  const certData = cert?.data?.content ?? [];
  const searchedCert = useCertSearch(search);
  const searchedCertData = searchedCert?.data ?? [];

  return (
    <div className="cert-cardList-group">
      <CertificateCard data={searchedCertData.length === 0 ? certData : searchedCertData} />
    </div>
  );
};

export default CertCardListView;
