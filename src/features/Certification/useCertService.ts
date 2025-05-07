import { useNavigate } from 'react-router-dom';
import { useGetCert, useGetCertDetail, useGetCertRecommend } from '../../api';
import { useGetSearchCert } from '@api/queries/useCertQuery.ts';

const useCertList = (id: number, page: number) => {
  const { data: cert } = useGetCert(id, page, 10);
  return cert;
};

const useCertDetail = (id: number) => {
  const { data: certDetail } = useGetCertDetail(id);
  return certDetail;
};

const useCertSearch = (name: string, page: number) => {
  const { data: searchedCert } = useGetSearchCert(name, page, 10);
  return searchedCert;
};

const useCertRecommend = () => {
  const { data: certRecommend } = useGetCertRecommend();
  return certRecommend;
};

const useCertService = () => {
  // 날짜 데이터 가공
  // "2025-03-08T00:00:00Z" -> "2025-03-08"
  const formatDate = (date: string | string[]) => {
    if (Array.isArray(date)) {
      const dateArray = date.map((item) => item.split('T')[0]);
      return dateArray.join(' ~ ');
    } else {
      if (date === '') {
        return '';
      }
      return date.split('T')[0];
    }
  };

  const navigate = useNavigate();
  const moveToCertByName = (name: string) => {
    window.scrollTo(0, 0);
    navigate(`/certificateSearch?search=${name}`);
  };

  const moveToCertById = (id: number, name: string, subId?: number) => {
    window.scrollTo(0, 0);
    const query = new URLSearchParams();
    query.set('categoryId', String(id));
    if (subId) query.set('subCategoryId', String(subId));
    query.set('categoryName', name);
    navigate(`/certificateSearch?${query.toString()}`);
  };

  const moveToCertDetailById = (id: number) => {
    window.scrollTo(0, 0);
    navigate(`/certificateDetail?id=${id}`);
  };

  return {
    formatDate,
    moveToCertByName,
    moveToCertById,
    moveToCertDetailById,
  };
};

export { useCertList, useCertDetail, useCertSearch, useCertRecommend, useCertService };
