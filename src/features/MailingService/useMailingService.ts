import { toast } from 'react-toastify';
import { useAddMailing, useDeleteMailing, useGetMailing } from '../../api';
import { TOAST_MESSAGE } from '@constant/toastMessages.ts';
import { AxiosError } from 'axios';

const useMailingList = (page: number) => {
  const { data: mailing } = useGetMailing(page, 4);
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
  return useDeleteMailing(mailingsId, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.DELETE_MAILING);
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
