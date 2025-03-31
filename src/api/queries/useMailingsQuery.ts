import { useMutation, useQuery } from '@tanstack/react-query';
import { mailingQueryKey } from '../common/queryKeys.ts';
import { addMailingsData, deleteMailingsData, getMailingsData } from '../common/API.ts';


const useGetMailings = () => {
    return useQuery({
        queryKey: [mailingQueryKey.get],
        queryFn: getMailingsData
    });
};

const useAddMailings = (certificationId: number) => {
    return useMutation({
        mutationKey: [mailingQueryKey.post],
        mutationFn: addMailingsData(certificationId)
    });
};

const useDeleteMailings = (mailingsId: number) => {
    return useMutation({
        mutationKey: [mailingQueryKey.delete],
        mutationFn: deleteMailingsData(mailingsId)
    });
};


export { useGetMailings, useAddMailings, useDeleteMailings };