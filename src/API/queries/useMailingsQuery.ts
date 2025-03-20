import { useMutation, useQuery } from '@tanstack/react-query';
import { mailingQueryKey } from '../common/queryKeys.ts';
import { addMailingsData, deleteMailingsData, getMailingsData } from '../common/API.ts';


const useGetMailingsQuery = () => {
    return useQuery({
        queryKey: [mailingQueryKey.get],
        queryFn: getMailingsData
    });
};

const usePostMailingsMutation = (certificationId: number) => {
    return useMutation({
        mutationKey: [mailingQueryKey.post],
        mutationFn: addMailingsData(certificationId)
    });
};

const useDeleteMailingsMutation = (mailingsId: number) => {
    return useMutation({
        mutationKey: [mailingQueryKey.delete],
        mutationFn: deleteMailingsData(mailingsId)
    });
};


export { useGetMailingsQuery, usePostMailingsMutation, useDeleteMailingsMutation };