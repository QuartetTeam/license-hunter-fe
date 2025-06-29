import { toast } from 'react-toastify';
import { useAddMailing, useDeleteMailing, useGetMailing } from '../../api';
import mailingStore from '@store/mailing/mailingStore';
import { TOAST_MESSAGE } from '@constant/toastMessages.ts';
import { AxiosError } from 'axios';

const useMailingList = (page: number, pageSize: number) => {
  const { data: mailing } = useGetMailing(page, pageSize);
  return mailing;
};

const useAddUserMailing = (certificationId: number) => {
  return useAddMailing(certificationId, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.ADD_MAILING);
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.ADD_MAILING;
      toast.error(errorMessage);
    },
  });
};

const useDeleteUserMailing = (mailingsId: number[]) => {
  const { refetch: refetchMailing } = useGetMailing(0, 4);
  const { setPage, setCheckArr } = mailingStore();

  return useDeleteMailing(mailingsId, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.DELETE_MAILING);
      refetchMailing();
      setPage(0);
      setCheckArr([]);
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.DELETE_MAILING;
      toast.error(errorMessage);
    },
  });
};

export { useMailingList, useAddUserMailing, useDeleteUserMailing };
