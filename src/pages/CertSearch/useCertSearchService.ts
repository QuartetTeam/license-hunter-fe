import { useGetCertQuery } from '../../api';

const useCertSearchService = () => {

    // 자격증 조회
    const { data: getCertData } = useGetCertQuery(1, 0, 15);

    return {
        getCertData
    };
};

export default useCertSearchService;