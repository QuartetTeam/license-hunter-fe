import { useAddMailing, useDeleteMailing, useGetMailing } from '../../api';

const useMailingService = () => {

    // 메일링 서비스 조회
    const { data: getMailingData } = useGetMailing(0, 4);

    // 메일링 서비스 추가
    const addMailings = useAddMailing(1);
    const addMailingsService = () => {
        addMailings.mutate();
    };

    // 메일링 서비스 삭제
    const deleteMailings = useDeleteMailing(1);
    const deleteMailingsService = () => {
        deleteMailings.mutate();
    };

    return {
        getMailingData,
        addMailingsService,
        deleteMailingsService
    };
};

export default useMailingService;