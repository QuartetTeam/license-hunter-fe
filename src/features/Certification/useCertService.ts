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

    // 날짜 데이터 가공
    // "2025-03-08T00:00:00Z" -> "2025-03-08"
    const formatDate = (date: string | string []) => {
        if (Array.isArray(date)) {
            const dateArray = date.map((item, _) => item.split('T')[0]);
            return dateArray.join(' ~ ');
        } else {
            return date.split('T')[0];
        }
    };


    return {
        getCertData,
        getCertDetailData,
        getCertCategoryData,
        getCertRecommendData,
        formatDate
    };
};

export default useCertService;