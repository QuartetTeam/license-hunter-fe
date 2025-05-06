import { useMutation, useQuery, UseMutationOptions } from '@tanstack/react-query';
import { mailingQueryKey } from '../API/queryKeys.ts';
import { addMailingsData, deleteMailingsData, getMailingsData } from '../API/API.ts';

const useGetMailing = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: [mailingQueryKey.get, page],
    queryFn: getMailingsData(page, pageSize),
  });
};

const useAddMailing = (certificationId: number, option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [mailingQueryKey.post],
    mutationFn: addMailingsData(certificationId),
    ...option,
  });
};

const useDeleteMailing = (mailingsId: number[], option: UseMutationOptions) => {
  return useMutation({
    mutationKey: [mailingQueryKey.delete],
    mutationFn: deleteMailingsData(mailingsId),
    ...option,
  });
};

export { useGetMailing, useAddMailing, useDeleteMailing };
