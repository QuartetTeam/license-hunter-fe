import { useQuery } from '@tanstack/react-query';
import { certQueryKey } from '../API/queryKeys.ts';
import {
    getCertData,
    getCertDetailData,
    getCertRecommendData,
    getSearchCertData
} from '../API/API.ts';

const useGetCert = (categoryId: number, page: number, pageSize: number) => {
    return useQuery({
        queryKey: [certQueryKey.get],
        queryFn: getCertData(categoryId, page, pageSize)
    });
};

const useGetSearchCert = (name: string) => {
    return useQuery({
        queryKey: [certQueryKey.search],
        queryFn: getSearchCertData(name)
    });
};

const useGetCertDetail = (certificationId: number) => {
    return useQuery({
        queryKey: [certQueryKey.getDetail],
        queryFn: getCertDetailData(certificationId)
    });
};

const useGetCertRecommend = () => {
    return useQuery({
        queryKey: [certQueryKey.getRecommend],
        queryFn: getCertRecommendData
    });
};

export {
    useGetCert,
    useGetSearchCert,
    useGetCertDetail,
    useGetCertRecommend
};