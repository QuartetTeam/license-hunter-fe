import { useGetCategoryQuery, useGetCertRecommendQuery } from '../../api/queries/useCertQuery.ts';

const useMainPageService = () => {

    // 자격증 카테고리 조회
    const { data: getCertCategoryData } = useGetCategoryQuery();

    // 자격증 추천 조회
    const { data: getCertRecommendData } = useGetCertRecommendQuery();

    return {
        getCertCategoryData,
        getCertRecommendData
    };
};

export default useMainPageService;