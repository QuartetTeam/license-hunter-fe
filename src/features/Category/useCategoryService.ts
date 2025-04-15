// 자격증 카테고리 조회
import { useGetCategory, useGetChildCategory } from '../../api';

const useCategoryService = (isDefault: boolean) => {
  const { data: category } = useGetCategory(isDefault);
  const { data: childCategory } = useGetChildCategory('1');

  return {
    category,
    childCategory,
  };
};

export default useCategoryService;
