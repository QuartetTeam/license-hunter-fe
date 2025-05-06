import { useQuery } from '@tanstack/react-query';
import { certQueryKey } from '../API/queryKeys.ts';
import {
  getCertData,
  getCertDetailData,
  getCertRecommendData,
  getSearchCertData,
} from '../API/API.ts';

const useGetCert = (categoryId: number, page: number, pageSize: number) => {
  return useQuery({
    queryKey: [certQueryKey.get, categoryId, page],
    queryFn: getCertData(categoryId, page, pageSize),
    enabled: !!categoryId,
  });
};

const useGetSearchCert = (name?: string) => {
  return useQuery({
    queryKey: [certQueryKey.search, name],
    queryFn: getSearchCertData(name),
    enabled: !!name,
  });
};

const useGetCertDetail = (certificationId: number) => {
  return useQuery({
    queryKey: [certQueryKey.getDetail],
    queryFn: getCertDetailData(certificationId),
  });
};

const useGetCertRecommend = () => {
  return useQuery({
    queryKey: [certQueryKey.getRecommend],
    queryFn: getCertRecommendData,
  });
};

export { useGetCert, useGetSearchCert, useGetCertDetail, useGetCertRecommend };
