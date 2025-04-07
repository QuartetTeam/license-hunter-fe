import { useQuery } from '@tanstack/react-query';
import { certQueryKey } from '../common/queryKeys.ts';
import {
    getCertCategoryData,
    getCertData,
    getCertDetailData,
    getCertRecommendData
} from '../common/API.ts';

const useGetCert = (categoryId: number, page: number, pageSize: number) => {
    return useQuery({
        queryKey: [certQueryKey.get],
        queryFn: getCertData(categoryId, page, pageSize)
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

const useGetCategory = () => {
    return useQuery({
        queryKey: [certQueryKey.getCategory],
        queryFn: getCertCategoryData
    });
};

export {
    useGetCert,
    useGetCertDetail,
    useGetCertRecommend,
    useGetCategory
};