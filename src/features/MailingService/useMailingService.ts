import { useAddMailings, useDeleteMailings, useGetMailings } from '../../api';

const useMailingService = () => {

    // 메일링 서비스 조회
    const { data: getMailingData } = useGetMailings();

    // 메일링 서비스 추가
    const addMailings = useAddMailings(1);
    const addMailingsService = () => {
        addMailings.mutate();
    };

    // 메일링 서비스 삭제
    const deleteMailings = useDeleteMailings(1);
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