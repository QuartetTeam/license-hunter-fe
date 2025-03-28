import {
    useDeleteMailingsMutation,
    useGetMailingsQuery,
    usePostMailingsMutation
} from '../../api';

const useMailingService = () => {

    // 메일링 서비스 조회
    const { data: getMailingData } = useGetMailingsQuery();

    // 메일링 서비스 추가
    const addMailingsMutation = usePostMailingsMutation(1);
    const addMailingsService = () => {
        addMailingsMutation.mutate();
    };

    // 메일링 서비스 삭제
    const deleteMailingsMutation = useDeleteMailingsMutation(1);
    const deleteMailingsService = () => {
        deleteMailingsMutation.mutate();
    };

    return {
        getMailingData,
        addMailingsService,
        deleteMailingsService
    };
};

export default useMailingService;