import { useDeleteMailingsMutation, useGetMailingsQuery } from '../../API/queries/useMailingsQuery.ts';

const useMyPageService = () => {

    // 메일링 서비스 조회
    const { data: getMailingData } = useGetMailingsQuery();

    // 메일링 서비스 삭제
    const deleteMailingsMutation = useDeleteMailingsMutation(1);
    const deleteMailingsService = () => {
        deleteMailingsMutation.mutate();
    };

    return {
        getMailingData,
        deleteMailingsService
    };
};

export default useMyPageService;