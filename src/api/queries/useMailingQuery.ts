import { useMutation, useQuery } from '@tanstack/react-query';
import { mailingQueryKey } from '../API/queryKeys.ts';
import { addMailingsData, deleteMailingsData, getMailingsData } from '../API/API.ts';

const useGetMailing = (page: number, pageNum: number) => {
  return useQuery({
    queryKey: [mailingQueryKey.get],
    queryFn: getMailingsData(page, pageNum),
  });
};

const useAddMailing = (certificationId: number) => {
  return useMutation({
    mutationKey: [mailingQueryKey.post],
    mutationFn: addMailingsData(certificationId),
  });
};

const useDeleteMailing = (mailingsId: number) => {
  return useMutation({
    mutationKey: [mailingQueryKey.delete],
    mutationFn: deleteMailingsData(mailingsId),
  });
};

export { useGetMailing, useAddMailing, useDeleteMailing };
