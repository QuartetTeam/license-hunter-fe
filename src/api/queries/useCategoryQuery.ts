import { useQuery } from '@tanstack/react-query';
import { categoryQueryKey } from '../API/queryKeys.ts';
import { getCertCategoryData, getCertChildCategoryData } from '../API/API.ts';

const useGetCategory = (isDefault: boolean) => {
  return useQuery({
    queryKey: [categoryQueryKey.getCategory, isDefault],
    queryFn: getCertCategoryData(isDefault),
  });
};

const useGetChildCategory = (mainCategoryId: number) => {
  return useQuery({
    queryKey: [categoryQueryKey.getChildCategory, mainCategoryId],
    queryFn: getCertChildCategoryData(mainCategoryId),
    enabled: !!mainCategoryId,
  });
};

export { useGetCategory, useGetChildCategory };
