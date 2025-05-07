import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CertificateCard from '@component/CertificateCard.tsx';
import Pagination from '@component/Pagination';
import { useCertList, useCertSearch } from '@feature/Certification/useCertService.ts';
import { pageStore, searchedPageStore } from '@store/page/pageStore';
import { isMainCategoryStore } from '@store/certification/certStore.ts';
import '../style/certCardListView.scss';

const CertCardListView = () => {
  const { page, setPage } = pageStore();
  const { searchedPage, setSearchedPage } = searchedPageStore();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const { isMainCategory } = isMainCategoryStore();
  const categoryId = Number(
    searchParams.get('subCategoryId')
      ? searchParams.get('subCategoryId')
      : searchParams.get('categoryId')
  );

  useEffect(() => {
    setSearch(searchParams.get('search') ?? '');
  }, [searchParams]);

  const isSearchMode = searchParams.get('search') !== null;
  const cert = useCertList(isMainCategory, categoryId, page);
  const certData = cert?.data?.content ?? [];
  const certTotalPage = cert?.data?.totalPages ?? 0;
  const searchedCert = useCertSearch(search, searchedPage);
  const searchedCertData = searchedCert?.data?.content ?? [];
  const searchedCertTotalPage = searchedCert?.data?.totalPages ?? 0;

  useEffect(() => {
    if (certTotalPage === 0 || certTotalPage > 0) {
      setPage(0);
    }
    if (searchedCertTotalPage === 0 || searchedCertTotalPage > 0) {
      setSearchedPage(0);
    }
  }, [categoryId]);

  return (
    <>
      <div className="cert-cardList-group">
        <CertificateCard data={isSearchMode ? searchedCertData : certData} />
      </div>
      {(certTotalPage > 0 || searchedCertTotalPage > 0) && (
        <Pagination
          certTotalPage={isSearchMode ? searchedCertTotalPage : certTotalPage}
          isSearchMode={isSearchMode}
        />
      )}
    </>
  );
};

export default CertCardListView;
