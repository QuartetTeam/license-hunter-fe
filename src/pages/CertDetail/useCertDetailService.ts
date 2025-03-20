// import { usePostMailingsMutation } from '@api/useMailingsQuery.ts';
import { usePostMailingsMutation } from '../../API/queries/useMailingsQuery.ts';

const useCertDetailService = () => {
    const addMailingsMutation = usePostMailingsMutation(1);
    const addMailingsService = () => {
        addMailingsMutation.mutate();
    };

    return {
        addMailingsService
    };
};

export default useCertDetailService;