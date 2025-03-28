import { useQuery } from '@tanstack/react-query';
import { certQueryKey } from '../common/queryKeys.ts';
import {
    getCertCategoryData,
    getCertData,
    getCertDetailData,
    getCertRecommendData
} from '../common/API.ts';

const useGetCertQuery = (categoryId: number, page: number, pageSize: number) => {
    return useQuery({
        queryKey: [certQueryKey.get],
        queryFn: getCertData(categoryId, page, pageSize)
    });
};

const useGetCertDetailQuery = (certificationId: number) => {
    return useQuery({
        queryKey: [certQueryKey.getDetail],
        queryFn: getCertDetailData(certificationId)
    });
};

const useGetCertRecommendQuery = () => {
    return useQuery({
        queryKey: [certQueryKey.getRecommend],
        queryFn: getCertRecommendData
    });
};

const useGetCategoryQuery = () => {
    return useQuery({
        queryKey: [certQueryKey.getCategory],
        queryFn: getCertCategoryData
    });
};

export {
    useGetCertQuery,
    useGetCertDetailQuery,
    useGetCertRecommendQuery,
    useGetCategoryQuery
};