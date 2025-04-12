import { useGetCert, useGetCertDetail, useGetCertRecommend } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useGetSearchCert } from '../../api/queries/useCertQuery.ts';

const useCertService = () => {

    // 자격증 조회
    const { data: getCertData } = useGetCert(1, 0, 15);

    // 자격증 검색
    const { data: getSearchCert } = useGetSearchCert('정보처리기사');

    // 자격증 상세 조회
    const { data: getCertDetailData } = useGetCertDetail(1);

    // 자격증 추천 조회
    const { data: getCertRecommendData } = useGetCertRecommend();

    // 자격증 검색 페이지 이동
    const navigate = useNavigate();
    const onSearchClick = () => {
        window.scrollTo(0, 0);
        navigate('/certificateSearch');
    };

    // 자격증 상세 정보 페이지 이동
    const onCertCardClick = () => {
        window.scrollTo(0, 0);
        navigate('/certificateDetail');
    };

    // 날짜 데이터 가공
    // "2025-03-08T00:00:00Z" -> "2025-03-08"
    const formatDate = (date: string | string []) => {
        if (Array.isArray(date)) {
            const dateArray = date.map((item) => item.split('T')[0]);
            return dateArray.join(' ~ ');
        } else {
            if (date === '') {
                return '';
            }
            return date.split('T')[0];
        }
    };

    return {
        onSearchClick,
        getCertData,
        getSearchCert,
        getCertDetailData,
        getCertRecommendData,
        onCertCardClick,
        formatDate
    };
};

export default useCertService;