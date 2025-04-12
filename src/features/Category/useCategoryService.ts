// 자격증 카테고리 조회
import { useGetCategory, useGetChildCategory } from '../../api';

const useCategoryService = () => {

    const { data: getCertCategoryData } = useGetCategory(false);
    const { data: getCertChildCategoryData } = useGetChildCategory('1');

    return {
        getCertCategoryData,
        getCertChildCategoryData
    };
};

export default useCategoryService;