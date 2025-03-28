import { useGetCertDetailQuery, usePostMailingsMutation } from '../../api';

const useCertDetailService = () => {

    // 자격증 상세 조회
    const { data: getCertDetailData } = useGetCertDetailQuery(1);
    console.log('getCertDetailData: ', getCertDetailData);

    // 메일링 서비스 추가
    const addMailingsMutation = usePostMailingsMutation(1);
    const addMailingsService = () => {
        addMailingsMutation.mutate();
    };
    console.log('addMailingsService: ', addMailingsService);

    return {
        getCertDetailData,
        addMailingsService
    };
};

export default useCertDetailService;