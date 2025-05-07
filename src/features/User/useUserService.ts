import { toast } from 'react-toastify';
import {
  useDeleteUser,
  useGetUser,
  usePatchUserInterest,
  usePatchUserNick,
  usePatchUserEmail,
} from '../../api';
import { usePatchMailingService } from '@api/queries/useUserQuery.ts';
import { TOAST_MESSAGE } from '@constant/toastMessages.ts';
import { AxiosError } from 'axios';

const useUserData = () => {
  const { data: user } = useGetUser();
  return user;
};

const useChangeUserNick = (nickname: string) => {
  const { refetch: refetchUser } = useGetUser();

  return usePatchUserNick(nickname, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_NICKNAME);
      refetchUser();
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_NICKNAME;
      toast.error(errorMessage);
    },
  });
};

const useChangeUserEmail = (email: string) => {
  const { refetch: refetchUser } = useGetUser();

  return usePatchUserEmail(email, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_EMAIL);
      refetchUser();
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_EMAIL;
      toast.error(errorMessage);
    },
  });
};

const useChangeUserInterest = (categoryIds: number[]) => {
  const { refetch: refetchUser } = useGetUser();

  return usePatchUserInterest(categoryIds, {
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.CHANGE_INTEREST);
      refetchUser();
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_INTEREST;
      toast.error(errorMessage);
    },
  });
};

const useChangeMailingStatus = () => {
  const { refetch: refetchUser } = useGetUser();

  return usePatchMailingService({
    onSuccess: () => {
      refetchUser();
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.CHANGE_MAILING;
      toast.error(errorMessage);
    },
  });
};

const useDeleteUserData = () => {
  const { refetch: refetchUser } = useGetUser();

  return useDeleteUser({
    onSuccess: () => {
      toast.success(TOAST_MESSAGE.SUCCESS.DELETE_USER);
      refetchUser();
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        TOAST_MESSAGE.ERROR.DELETE_USER;
      toast.error(errorMessage);
    },
  });
};

export {
  useUserData,
  useChangeUserNick,
  useChangeUserEmail,
  useChangeUserInterest,
  useChangeMailingStatus,
  useDeleteUserData,
};
