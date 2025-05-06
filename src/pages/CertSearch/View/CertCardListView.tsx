import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CertificateCard from '@component/CertificateCard.tsx';
import { useCertList, useCertSearch } from '@feature/Certification/useCertService.ts';
import pageStore from '@store/page/pageStore';
import '../style/certCardListView.scss';
import Pagination from '@component/Pagination';

const CertCardListView = () => {
  const { page, setPage } = pageStore();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const categoryId = Number(
    searchParams.get('subCategoryId')
      ? searchParams.get('subCategoryId')
      : searchParams.get('categoryId')
  );

  useEffect(() => {
    setSearch(searchParams.get('search') ?? '');
  }, [searchParams]);

  const cert = useCertList(categoryId, page);
  const certData = cert?.data?.content ?? [];
  const certTotalPage = cert?.data?.totalPages ?? 0;
  const searchedCert = useCertSearch(search);
  const searchedCertData = searchedCert?.data ?? [];

  useEffect(() => {
    if (certTotalPage === 0 || certTotalPage > 0) {
      setPage(0);
    }
  }, [categoryId]);

  return (
    <>
      <div className="cert-cardList-group">
        <CertificateCard data={searchedCertData.length === 0 ? certData : searchedCertData} />
      </div>
      {certTotalPage > 0 && <Pagination certTotalPage={certTotalPage} />}
    </>
  );
};

export default CertCardListView;
