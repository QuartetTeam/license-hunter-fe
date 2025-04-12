import { useQuery } from '@tanstack/react-query';
import { categoryQueryKey } from '../API/queryKeys.ts';
import { getCertCategoryData, getCertChildCategoryData } from '../API/API.ts';

const useGetCategory = (isDefault: boolean) => {
    return useQuery({
        queryKey: [categoryQueryKey.getCategory],
        queryFn: getCertCategoryData(isDefault)
    });
};

const useGetChildCategory = (mainCategoryId: string) => {
    return useQuery({
        queryKey: [categoryQueryKey.getChildCategory],
        queryFn: getCertChildCategoryData(mainCategoryId)
    });
};

export {
    useGetCategory,
    useGetChildCategory
};