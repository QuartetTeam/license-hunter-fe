import {
    useGetCategoryQuery,
    useGetCertDetailQuery,
    useGetCertQuery,
    useGetCertRecommendQuery
} from '../../api';

const useCertService = () => {

    // 자격증 조회
    const { data: getCertData } = useGetCertQuery(1, 0, 15);

    // 자격증 상세 조회
    const { data: getCertDetailData } = useGetCertDetailQuery(1);

    // 자격증 카테고리 조회
    const { data: getCertCategoryData } = useGetCategoryQuery();

    // 자격증 추천 조회
    const { data: getCertRecommendData } = useGetCertRecommendQuery();

    return {
        getCertData,
        getCertDetailData,
        getCertCategoryData,
        getCertRecommendData
    };
};

export default useCertService;