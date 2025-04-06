import {
    useGetCategory,
    useGetCert,
    useGetCertDetail,
    useGetCertRecommend
} from '../../api';

const useCertService = () => {

    // 자격증 조회
    const { data: getCertData } = useGetCert(1, 0, 15);

    // 자격증 상세 조회
    const { data: getCertDetailData } = useGetCertDetail(1);

    // 자격증 카테고리 조회
    const { data: getCertCategoryData } = useGetCategory();

    // 자격증 추천 조회
    const { data: getCertRecommendData } = useGetCertRecommend();

    return {
        getCertData,
        getCertDetailData,
        getCertCategoryData,
        getCertRecommendData
    };
};

export default useCertService;