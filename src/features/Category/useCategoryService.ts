// 자격증 카테고리 조회
import { useGetCategory, useGetChildCategory } from '../../api';

const useCategoryService = () => {
  const { data: defaultCategory } = useGetCategory(true);
  const { data: moreCategory } = useGetCategory(false);
  const { data: childCategory } = useGetChildCategory('1');

  return {
    defaultCategory,
    moreCategory,
    childCategory,
  };
};

export default useCategoryService;
